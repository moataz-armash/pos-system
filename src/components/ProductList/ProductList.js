import React from "react";
import {
  Grid,
  Typography,
  Pagination,
  Box,
  FormControlLabel,
  Checkbox,
  Switch,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useProductList } from "../../hooks/useProductList";
import AlphabetFilter from "./AlphabetFilter";
import ProductCard from "./ProductCard";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    color: "#014d50",
  },
  "& .MuiPaginationItem-page.Mui-selected": {
    backgroundColor: "#02747a",
    color: "#fff",
  },
  "& .MuiPaginationItem-root:hover": {
    backgroundColor: "#02747a",
    color: "white",
  },
}));

const SliderContainer = styled(Box)(({ theme }) => ({
  height: "calc(100vh - 200px)",
  overflowY: "auto",
  overflowX: "hidden",
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#888",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
}));

const ProductList = ({
  data,
  searchQuery,
  selectedCategory,
  selectedSubcategory,
}) => {
  const {
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
  } = useProductList(data, searchQuery, selectedCategory, selectedSubcategory);

  const itemsPerPage = 8;
  const letterGroups = [
    "A",
    "B",
    "C-D",
    "E-F",
    "G-I",
    "J-L",
    "M-O",
    "P-R",
    "S-U",
    "V-Z",
  ];

  const productGrid = (products) => (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard
            product={product}
            isFavorite={favorites.includes(product.id)}
            onToggleFavorite={toggleFavorite}
            onCopyBarcode={handleCopyBarcode}
            onAddToCart={handleAddToCart}
          />
        </Grid>
      ))}
    </Grid>
  );

  const VirtualizedProductGrid = ({ height, width }) => {
    const rowHeight = 350; // Adjust based on your ProductCard height
    const columnWidth = width / 4; // Assuming 4 columns, adjust if needed
    const rowCount = Math.ceil(filteredProducts.length / 4);

    return (
      <List
        height={height}
        itemCount={rowCount}
        itemSize={rowHeight}
        width={width}>
        {({ index, style }) => (
          <div style={style}>
            <Grid container spacing={3}>
              {filteredProducts
                .slice(index * 4, (index + 1) * 4)
                .map((product) => (
                  <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <ProductCard
                      product={product}
                      isFavorite={favorites.includes(product.id)}
                      onToggleFavorite={toggleFavorite}
                      onCopyBarcode={handleCopyBarcode}
                      onAddToCart={handleAddToCart}
                    />
                  </Grid>
                ))}
            </Grid>
          </div>
        )}
      </List>
    );
  };

  const productDisplay = useSlider ? (
    <SliderContainer>
      <AutoSizer>
        {({ height, width }) => (
          <VirtualizedProductGrid height={height} width={width} />
        )}
      </AutoSizer>
    </SliderContainer>
  ) : (
    <>
      {hasProducts && (
        <AlphabetFilter
          letterGroups={letterGroups}
          selectedLetterGroup={selectedLetterGroup}
          onLetterGroupClick={handleLetterGroupClick}
        />
      )}
      {productGrid(
        filteredProducts.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
      )}
      {hasProducts && filteredProducts.length > itemsPerPage && (
        <Box display="flex" justifyContent="center" mt={4}>
          <StyledPagination
            count={Math.ceil(filteredProducts.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Box>
      )}
    </>
  );

  return (
    <>
      {(selectedCategory === "Products" || selectedSubcategory) && (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}>
          <Typography variant="h4" gutterBottom>
            {selectedSubcategory || selectedCategory || "All Products"}
          </Typography>

          {hasProducts && (
            <Box display="flex" alignItems="center">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showOnlyFavorites}
                    onChange={(e) => setShowOnlyFavorites(e.target.checked)}
                    color="green"
                  />
                }
                label="Show Favorites Only"
              />
              {selectedCategory === "Products" && (
                <FormControlLabel
                  control={
                    <Switch
                      checked={useSlider}
                      onChange={(e) => setUseSlider(e.target.checked)}
                      color="green"
                    />
                  }
                  label="Show All Products"
                />
              )}
            </Box>
          )}
        </Box>
      )}

      {(selectedCategory === "Products" || selectedSubcategory) &&
        productDisplay}
      {selectedSubcategory && filteredProducts.length === 0 && (
        <Box mt={2} mb={2}>
          <Typography variant="body1" color="textSecondary">
            No products found. Try adjusting your filters or search query.
          </Typography>
        </Box>
      )}
    </>
  );
};

export default ProductList;
