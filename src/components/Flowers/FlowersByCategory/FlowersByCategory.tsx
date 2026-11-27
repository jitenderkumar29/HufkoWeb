"use client";

import React from "react";

interface FlowersByCategoryProps {
  category: string;
}

const FlowersByCategory = ({ category }: FlowersByCategoryProps) => {
  const renderCategoryContent = () => {
    switch (category) {
      case "birthday-flowers":
        return (
          <div>
            <h2>Birthday Flowers</h2>
          </div>
        );

      case "love-affection":
        return (
          <div>
            <h2>Love & Affection</h2>
          </div>
        );

      case "anniversary-flowers":
        return (
          <div>
            <h2>Anniversary Flowers</h2>
          </div>
        );

      case "bridal-bouquet":
        return (
          <div>
            <h2>Bridal Bouquet</h2>
          </div>
        );

      case "flower-bouquet":
        return (
          <div>
            <h2>Flower Bouquet</h2>
          </div>
        );

      case "flowers-in-vases":
        return (
          <div>
            <h2>Flowers in Vases</h2>
          </div>
        );

      case "flowers-in-gift-box":
        return (
          <div>
            <h2>Flowers in Gift Box</h2>
          </div>
        );

      case "luxury-flowers":
        return (
          <div>
            <h2>Luxury Flowers</h2>
          </div>
        );

      case "all-flowers-enjoy":
        return (
          <div>
            <h2>All Flowers Enjoy</h2>
          </div>
        );

      case "flowers-by-theme":
        return (
          <div>
            <h2>Flowers by Theme</h2>
          </div>
        );

      case "rose-bouquet":
        return (
          <div>
            <h2>Rose Bouquet</h2>
          </div>
        );

      case "lilies-bouquet":
        return (
          <div>
            <h2>Lilies Bouquet</h2>
          </div>
        );

      case "orchids-bouquet":
        return (
          <div>
            <h2>Orchids Bouquet</h2>
          </div>
        );

      case "carnation-bouquet":
        return (
          <div>
            <h2>Carnation Bouquet</h2>
          </div>
        );

      case "mixed-flower":
        return (
          <div>
            <h2>Mixed Flower</h2>
          </div>
        );

      default:
        return (
          <div>
            <h2>Flower Category Not Found</h2>
          </div>
        );
    }
  };

  return (
    <div className="flowersByCategory">
      {renderCategoryContent()}
    </div>
  );
};

export default FlowersByCategory;