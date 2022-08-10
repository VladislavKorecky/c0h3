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
    // key for the SearchResultComponent, prevents "Unique 'key' Prop" warning
    let componentKey = 0;

    // maps the raw search results into UI
    const searchResultComponents = searchResults.map(result => {
        componentKey++; // increment the key
        return <SearchResultComponent key={componentKey} text={result.text} />
    })

    return (
        <div>
            {searchResultComponents}
        </div>
    )
}