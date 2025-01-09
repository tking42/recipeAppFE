import { useState } from "react";
import SearchResults from "../SearchResults/index.jsx";

const Search = ({setHideWhenUseSearch, hideWhenUseSearch, user, getSavedRecipes, userRecipes}) => {
    const [searchInput, setSearchInput] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [showSearchResults, setShowSearchResults] = useState('hidden')

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }
    const handleSearchClick = async () => {
        if (!searchInput) {
            return
        }
        const response = await fetch(`https://recipefinder.2024-thomask.dev.io-academy.uk/search`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ searchInput }),
        })

        const data = await response.json()
        console.log(data.results)
        setSearchResults(data.results)
        setHideWhenUseSearch('hidden')
        setShowSearchResults('')
        window.scrollTo(0, 0)
    }

    return (
        <div>
            <div className={`flex gap-2 text-gray-700 ${hideWhenUseSearch}`}>
                <input
                    className="rounded p-2 ps-4"
                    onChange={handleChange}
                    type="text"
                    placeholder="Search Recipes"
                    value={searchInput}
                />
                <button
                    className="bg-blue-500 p-2 rounded text-white"
                    onClick={handleSearchClick}
                >
                    Search
                </button>
            </div>
            <div className={showSearchResults}>
                <SearchResults setSearchInput={setSearchInput}
                               searchInput={searchInput}
                               searchResults={searchResults}
                               user={user} getSavedRecipes={getSavedRecipes}
                               userRecipes={userRecipes}
                               setHideWhenUseSearch={setHideWhenUseSearch}
                               setShowSearchResults={setShowSearchResults}/>
            </div>
        </div>
    );
};

export default Search;
