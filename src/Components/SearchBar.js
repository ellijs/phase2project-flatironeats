function SearchBar({ search, setSearch, setSortCategory, setSortPrice, sortPrice }) {
    function handleSetCategory(e){
        setSortCategory(e.target.value)
    }

    const priceClick = () => setSortPrice(!sortPrice)

    return (
        <div className="searchbar">
            <label htmlFor="search">Search:</label>
            <input type="text" id="search" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}/>
            <select onChange={handleSetCategory} type="dropdown">
                <option value="All">All</option>              
                <option value="Dessert">Dessert</option>
                <option value="Italian">Italian</option>
                <option value="Korean">Korean</option>
                <option value="Potato">Potato</option>
                <option value="Thai">Thai</option>
                <option value="Vietnamese">Vietnamese</option>
            </select>
            <input type="checkbox" checked={sortPrice} onChange={priceClick}/>
        </div>
    )
}

export default SearchBar;