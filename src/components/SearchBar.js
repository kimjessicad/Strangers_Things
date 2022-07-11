import React, { useState } from "react";



const SearchBar = ({ posts, setSearchMatches }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const searchInput = React.useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchTerm(event.target[0].value)
        const searchedString = searchTerm.toLowerCase();
        let matches = []
        matches = posts.data.posts.filter((post) => post.title.toLowerCase().includes(searchedString))
        console.log(matches)
        setSearchMatches(matches)
        
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