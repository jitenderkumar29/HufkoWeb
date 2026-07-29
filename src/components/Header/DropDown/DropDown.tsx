import React, { useRef, useEffect, useState } from "react";
import styles from "./DropDown.module.scss";

export interface DropDownProps {
  categories: {
    id?: string;
    title: string;
    items: string[];
    subItems?: string[][];
    image?: {
      src: string;
      title: string;
      link: string;
    };
  }[];
  isMobile?: boolean;
}

const DropDown: React.FC<DropDownProps> = ({
  categories,
  isMobile = false,
}) => {
  // Separate categories into text categories (no image) and image categories
  const textCategories = categories.filter((cat) => !cat.image);
  const imageCategories = categories.filter((cat) => cat.image);

  // Function to distribute items within categories based on max height
  const distributeItemsInColumns = (categories: typeof textCategories) => {
    const MAX_COLUMNS = 2;
    const MAX_HEIGHT = 390; // pixels
    
    // Calculate how many items can fit in a column
    // Each item takes approximately 25px (including margin and padding)
    const ITEM_HEIGHT = 25;
    const TITLE_HEIGHT = 30;
    const PADDING = 30;
    const availableHeight = MAX_HEIGHT - TITLE_HEIGHT - PADDING;
    const maxItemsPerCategory = Math.floor(availableHeight / ITEM_HEIGHT);
    
    // Distribute categories into columns
    const columns: typeof textCategories[] = [];
    let currentColumn: typeof textCategories = [];
    let currentColumnItemCount = 0;
    
    for (const category of categories) {
      const categoryItemCount = Math.min(category.items.length, maxItemsPerCategory);
      
      // Check if adding this category would exceed the max items per column
      if (currentColumnItemCount + categoryItemCount > maxItemsPerCategory && currentColumn.length > 0) {
        // Start a new column
        columns.push(currentColumn);
        currentColumn = [];
        currentColumnItemCount = 0;
      }
      
      // Add category to current column
      currentColumn.push({
        ...category,
        items: category.items.slice(0, maxItemsPerCategory - currentColumnItemCount)
      });
      currentColumnItemCount += categoryItemCount;
    }
    
    // Push the last column if it has categories
    if (currentColumn.length > 0) {
      columns.push(currentColumn);
    }
    
    return columns;
  };

  const categoryColumns = distributeItemsInColumns(textCategories);

  return (
    <div className={`${styles.dropdown} ${isMobile ? styles.mobile : ""}`}>
      <div className={styles.megaMenu}>
        {/* Text Columns */}
        <div className={styles.textColumns}>
          {categoryColumns.map((columnCategories, colIndex) => (
            <div key={`col-${colIndex}`} className={styles.textColumn}>
              {columnCategories.map((category, index) => (
                <div
                  key={category.id ?? `${colIndex}-${index}`}
                  className={styles.categoryBlock}
                >
                  <h3 className={styles.columnTitle}>
                    <a href="#">{category.title}</a>
                  </h3>

                  {category.items.length > 0 && (
                    <ul className={styles.categoryList}>
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className={styles.categoryItem}>
                          <a href="#">{item}</a>

                          {category.subItems?.[itemIndex] && (
                            <ul className={styles.subCategoryList}>
                              {category.subItems[itemIndex].map(
                                (subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <a href="#">{subItem}</a>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Images Section */}
        <div className={styles.imageColumns}>
          {imageCategories.map((category, index) => (
            <div
              key={`image-${index}`}
              className={styles.imageColumn}
            >
              <a
                href={category.image?.link}
                className={styles.merchPanel}
              >
                <img
                  src={category.image?.src}
                  alt={category.image?.title}
                  className={styles.merchImage}
                />

                <h4 className={styles.merchTitle}>
                  {category.image?.title}
                </h4>

                <span className={styles.merchLink}>
                  See more
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;