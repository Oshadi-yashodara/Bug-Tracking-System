function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="search">Search by title</label>
      <input
        id="search"
        type="text"
        placeholder="Search bugs..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
