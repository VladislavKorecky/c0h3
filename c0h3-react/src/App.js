// @ts-check

import { useState } from "react";
import Form from "./components/Form";

/**
 * Root app component.
 * 
 * @type {function}
 * @returns {Object} - App component's JSX.
 * 
 * @component
 */
export default function App() {
    /**
     * Testing this out.
     */
    const [searchResults, setSearchResults] = useState([])

    /**
     * Testing this our. But there is a twist!
     * 
     * @type {string}
     */
    const randomVar = "Lol"

    return (
        <>
            <h1>Welcome to C0H3!</h1>
            <Form setSearchResults={setSearchResults} />
        </>
    )
}