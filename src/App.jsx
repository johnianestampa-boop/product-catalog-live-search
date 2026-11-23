import { useState, useEffect } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  // Cart state from Lab 3
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  // Lab 4 state
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(searchText);
  }, 300);

  useEffect(() => {
  document.title = `CvSU Mini Store (${filteredProducts.length} results)`;
}, [filteredProducts.length]);

  document.title = `CvSU Mini Store (${filteredProducts.length} results)`;
  return () => clearTimeout(timer); // cleanup
}, [searchText]);


  const handleAddToCart = (title) => {
    setCartCount(cartCount + 1);
    setLastAdded(title);
  };

const handleClear = () => {
  setSearchText("");
  setDebouncedSearch("");
  setCategory("All");
  setSortOrder("default");
};

  // Derived list: calculated during rendering, not stored in state
  let filteredProducts = products
    .filter((p) =>
      p.title.toLowerCase().includes(debouncedSearch.trim().toLowerCase())
    )
    .filter((p) => category === "All" || p.category === category);

  if (sortOrder === "low-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="app">
      <header>
        <h1>CvSU Mini Store</h1>
        <p className="cart-message">
          {cartCount === 0
            ? "Your cart is empty."
            : `Items added to cart: ${cartCount} (Last added: ${lastAdded})`}
        </p>
      </header>

      <SearchBar
        searchText={searchText}
        onSearchChange={setSearchText}
        category={category}
        onCategoryChange={setCategory}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        onClear={handleClear}
      />

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            inStock={product.inStock}
            onAddToCart={handleAddToCart}
          >
            {product.id === 1 && <span>New</span>}
            {product.id === 5 && <span>Sale</span>}
          </ProductCard>
        ))}
      </div>
    </div>
  );
}

export default App;