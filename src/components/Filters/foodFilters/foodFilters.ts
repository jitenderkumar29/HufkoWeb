// components/Filters/foodFilters/foodFilters.ts
import { FoodsCategories } from '@/app/data/Categorywise/FoodsCategories';

/**
 * Minimal shape required for filtering.
 * Supports BOTH `cuisines` (legacy) and `foodCategories` (foodIds).
 */
export interface RestaurantLike {
  cuisines?: string[];
  foodCategories?: string[]; // 👈 foodIds like ["chaach", "lassi", "pizzas"]
}

/**
 * Given a foodId (e.g. "chaach"), return the matching `category` string
 * from FoodsCategories (e.g. "Chaach").
 */
export const getFoodCategoryName = (foodId: string): string | null =>
  FoodsCategories.find((f) => f.foodId === foodId)?.category ?? null;

/**
 * Filter restaurants/items: keep only those that match the given foodId.
 *
 * Matches if EITHER:
 *  1. `foodCategories` (foodIds) includes the foodId directly, OR
 *  2. `cuisines` includes the category name that maps to that foodId.
 */
export const filterRestaurantsByFoodId = <T extends RestaurantLike>(
  restaurants: T[],
  foodId: string | null | undefined
): T[] => {
  if (!foodId) return restaurants;

  const catName = getFoodCategoryName(foodId);
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
export const getAvailableFoodIds = (
  restaurants: RestaurantLike[]
): Set<string> => {
  const allFoodIds = new Set<string>();
  const allCuisines = new Set<string>();

  restaurants.forEach((r) => {
    r.foodCategories?.forEach((f) => allFoodIds.add(f.toLowerCase().trim()));
    r.cuisines?.forEach((c) => allCuisines.add(c.toLowerCase().trim()));
  });

  return new Set(
    FoodsCategories.filter(
      (f) =>
        allFoodIds.has(f.foodId.toLowerCase().trim()) ||
        allCuisines.has(f.category.toLowerCase().trim())
    ).map((f) => f.foodId)
  );
};

/**
 * Count restaurants per foodId. Checks both `foodCategories` and `cuisines`.
 */
export const getFoodIdCounts = (
  restaurants: RestaurantLike[]
): Record<string, number> => {
  const counts: Record<string, number> = {};

  FoodsCategories.forEach((food) => {
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