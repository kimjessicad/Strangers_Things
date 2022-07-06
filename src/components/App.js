import React, { useState, useEffect } from "react"
import { Posts } from './'


const App = () => {
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState(null)


    return (
        <div className = "app">
            <Posts />
        </div>
    )
}

export default App