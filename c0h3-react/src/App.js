// @ts-check

import React from "react";
import { useState } from "react";

import Form from "./components/Form";
import SearchResultsDisplay from "./components/SearchResultsDisplay";

import "./styles/base.scss"

/**
 * Root app component.
 * 
 * @returns {Object} - App component's JSX.
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
            <SearchResultsDisplay searchResults={searchResults} /> 
        </>
    )
}