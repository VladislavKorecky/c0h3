// @ts-check

import React from "react";

import SearchResultComponent from "./SearchResultComponent";


/**
 * Display component for displaying the results of a search.
 * @see {@link Form} for more information about the search mechanics.
 * 
 * Possible props:
 *      searchResults - The "searchResults" state.
 * 
 * @param {Object} props - The React properties (props).
 * @returns {Object} - Form component's JSX.
 * 
 * @component
 */
export default function SearchResultsDisplay({searchResults}) {
    // maps the raw search results into UI
    const searchResultComponents = searchResults.map(result => {
        return <SearchResultComponent key={result.id} text={result.text} />
    })

    return (
        <div>
            {searchResultComponents}
        </div>
    )
}