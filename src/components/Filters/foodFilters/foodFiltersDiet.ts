// components/Filters/foodFiltersDiet/foodFiltersDiet.ts
import { DietFoodsCategories } from '@/app/data/Categorywise/FoodsCategories';

/**
 * Minimal shape required for filtering.
 * Supports BOTH `cuisines` (legacy) and `foodCategories` (foodIds).
 */
export interface RestaurantLikeDiet {
  cuisines?: string[];
  foodCategories?: string[]; // 👈 foodIds like ["chaach", "lassi", "pizzas"]
}

/**
 * Given a foodId (e.g. "chaach"), return the matching `category` string
 * from DietFoodsCategories (e.g. "Desserts").
 */
export const getDietFoodCategoryName = (foodId: string): string | null =>
  DietFoodsCategories.find((f) => f.foodId === foodId)?.category ?? null;

/**
 * Filter restaurants/items: keep only those that match the given foodId.
 *
 * Matches if EITHER:
 *  1. `foodCategories` (foodIds) includes the foodId directly, OR
 *  2. `cuisines` includes the category name that maps to that foodId.
 */
export const filterDietRestaurantsByFoodId = <T extends RestaurantLikeDiet>(
  restaurants: T[],
  foodId: string | null | undefined
): T[] => {
  if (!foodId) return restaurants;

  const catName = getDietFoodCategoryName(foodId);
  const targetCat = catName?.toLowerCase().trim();
  const targetId = foodId.toLowerCase().trim();

  return restaurants.filter((r) => {
    // ✅ Primary: match against foodCategories (foodIds)
    const matchesFoodId = r.foodCategories?.some(
      (fc) => fc.toLowerCase().trim() === targetId
    );

    // ✅ Fallback: match against cuisines (category names)
    const matchesCuisine =
      targetCat &&
      r.cuisines?.some((c) => c.toLowerCase().trim() === targetCat);

    return matchesFoodId || matchesCuisine;
  });
};

/**
 * Get all foodIds that actually have at least one matching restaurant.
 */
export const getAvailableDietFoodIds = (
  restaurants: RestaurantLikeDiet[]
): Set<string> => {
  const allFoodIds = new Set<string>();
  const allCuisines = new Set<string>();

  restaurants.forEach((r) => {
    r.foodCategories?.forEach((f) => allFoodIds.add(f.toLowerCase().trim()));
    r.cuisines?.forEach((c) => allCuisines.add(c.toLowerCase().trim()));
  });

  return new Set(
    DietFoodsCategories.filter(
      (f) =>
        allFoodIds.has(f.foodId.toLowerCase().trim()) ||
        allCuisines.has(f.category.toLowerCase().trim())
    ).map((f) => f.foodId)
  );
};

/**
 * Count restaurants per foodId. Checks both `foodCategories` and `cuisines`.
 */
export const getDietFoodIdCounts = (
  restaurants: RestaurantLikeDiet[]
): Record<string, number> => {
  const counts: Record<string, number> = {};

  DietFoodsCategories.forEach((food) => {
    const targetId = food.foodId.toLowerCase().trim();
    const targetCat = food.category.toLowerCase().trim();

    counts[food.foodId] = restaurants.filter((r) => {
      const matchesFoodId = r.foodCategories?.some(
        (fc) => fc.toLowerCase().trim() === targetId
      );
      const matchesCuisine = r.cuisines?.some(
        (c) => c.toLowerCase().trim() === targetCat
      );
      return matchesFoodId || matchesCuisine;
    }).length;
  });

  return counts;
};