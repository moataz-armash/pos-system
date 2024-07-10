// useProductList.js
import { useState, useMemo, useCallback } from "react";
import { useCart } from "./Context/CartContext";

export const useProductList = (
  data,
  searchQuery,
  selectedCategory,
  selectedSubcategory
) => {
  const { addToCart, quantity, setQuantity } = useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [selectedLetterGroup, setSelectedLetterGroup] = useState("A"); // Set default to "A"
  const [useSlider, setUseSlider] = useState(false);

  const { filteredProducts, hasProducts } = useMemo(() => {
    if (!data || data.length === 0)
      return { filteredProducts: [], hasProducts: false };

    let products = [];
    let hasProducts = false;

    if (selectedCategory === "Products" || !selectedCategory) {
      products = data.flatMap((category) =>
        category.subcategories
          ? category.subcategories.flatMap((sub) => sub.products || [])
          : []
      );
      hasProducts = products.length > 0;
    } else if (selectedCategory && selectedSubcategory) {
      const category = data.find((cat) => cat.name === selectedCategory);
      if (category) {
        const subcategory = category.subcategories.find(
          (sub) => sub.name === selectedSubcategory
        );
        if (subcategory && subcategory.products) {
          products = subcategory.products;
          hasProducts = products.length > 0;
        }
      }
    } else if (selectedCategory) {
      const category = data.find((cat) => cat.name === selectedCategory);
      if (category && category.subcategories) {
        products = category.subcategories.flatMap((sub) => sub.products || []);
        hasProducts = products.length > 0;
      }
    }

    if (searchQuery) {
      const lowercaseQuery = searchQuery.toLowerCase();
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(lowercaseQuery) ||
          product.barcode.includes(lowercaseQuery)
      );
    }

    products.sort((a, b) => a.name.localeCompare(b.name));

    if (!useSlider && selectedLetterGroup) {
      const [start, end] = selectedLetterGroup.split("-");
      products = products.filter((product) => {
        const firstLetter = product.name.charAt(0).toUpperCase();
        if (end) {
          return firstLetter >= start && firstLetter <= end;
        } else {
          return firstLetter === start;
        }
      });
    }

    if (showOnlyFavorites) {
      products = products.filter((product) => favorites.includes(product.id));
    }

    return { filteredProducts: products, hasProducts };
  }, [
    data,
    searchQuery,
    selectedCategory,
    selectedSubcategory,
    favorites,
    showOnlyFavorites,
    selectedLetterGroup,
    useSlider,
  ]);

  const handleAddToCart = useCallback(
    (product) => {
      addToCart({ ...product, quantity: quantity });
      setQuantity(1);
    },
    [addToCart, quantity, setQuantity]
  );

  const handlePageChange = useCallback((event, page) => {
    setCurrentPage(page);
  }, []);

  const handleCopyBarcode = useCallback((barcode) => {
    navigator.clipboard.writeText(barcode).then(
      () => {
        console.log("Barcode copied to clipboard");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  }, []);

  const toggleFavorite = useCallback((productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  }, []);

  const handleLetterGroupClick = useCallback(
    (group) => {
      setSelectedLetterGroup(group === selectedLetterGroup ? null : group);
    },
    [selectedLetterGroup]
  );

  return {
    currentPage,
    favorites,
    showOnlyFavorites,
    selectedLetterGroup,
    useSlider,
    filteredProducts,
    hasProducts,
    handleAddToCart,
    handlePageChange,
    handleCopyBarcode,
    toggleFavorite,
    handleLetterGroupClick,
    setShowOnlyFavorites,
    setUseSlider,
  };
};
