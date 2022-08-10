// @ts-check

import { useState } from "react";
import Form from "./components/Form";

/**
 * Root app component.
 * 
 * @returns {Object} - App component's JSX.
 * 
 * @component
 */
export default function App() {
    /**
     * State that holds the results of a search.
     * @see {@link Form} for the origin of the search results.
     */
    const [searchResults, setSearchResults] = useState([])

    return (
        <>
            <h1>Welcome to C0H3!</h1>
            <Form setSearchResults={setSearchResults} />
        </>
    )
}