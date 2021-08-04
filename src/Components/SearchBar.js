function SearchBar({ search, setSearch, setSortCategory, sortPrice, setSortPrice }) {
    function handleSetCategory(e){
        setSortCategory(e.target.value)
    }

    function handleSearch(e){
        setSearch(e.target.value)
    }

    function handlePriceSort(){
        setSortPrice(!sortPrice)
    }
    
    return (
        <div className="searchbar">
            <label htmlFor="search">Search:</label>
            <input type="text" id="search" placeholder="Search..." 
                value={search} onChange={handleSearch}/>
            <label htmlFor="dropdown">Choose Cuisine:</label>
            <select type="dropdown" id="dropdown"onChange={handleSetCategory}>
                <option value="All">All</option>              
                <option value="Dessert">Dessert</option>
                <option value="Italian">Italian</option>
                <option value="Korean">Korean</option>
                <option value="Potato">Potato</option>
                <option value="Thai">Thai</option>
                <option value="Vietnamese">Vietnamese</option>
            </select>
            <label htmlFor="sort">Sort By Price:</label>
            <input type="checkbox" id="sort" checked={sortPrice} onChange={handlePriceSort}/>
        </div>
    )
}

export default SearchBar;