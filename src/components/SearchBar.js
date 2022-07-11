import React, { useState } from "react";



const SearchBar = ({ posts, setSearchMatches, setActiveSearch }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const searchInput = React.useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchTerm(event.target[0].value)
        console.log(searchTerm, "this is our searchTerm")
        // const searchedString = searchTerm.toLowerCase();
        let matches = []
        const searchedString = event.target[0].value.toLowerCase();
        matches = posts.data.posts.filter((post) => (post.title.toLowerCase().includes(searchedString) || post.description.toLowerCase().includes(searchedString)))
        console.log(matches)
        setSearchMatches(matches)
        if (matches.length === 0){
            alert("No matches found for " + {searchTerm})
        } else {
            setActiveSearch(true)
        }
        searchInput.current.value = ('')

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={searchInput} type='text' placeholder='Search for items here' />
                <button type="submit">Search</button>
            </form>
        </div>
    )

}

export default SearchBar