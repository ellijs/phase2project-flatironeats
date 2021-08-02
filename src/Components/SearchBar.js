function SearchBar({ search, setSearch }) {
    return (
        <div className="searchbar">
            <label htmlFor="search">Search:</label>
            <input type="text" id="search" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
    )
}

export default SearchBar;