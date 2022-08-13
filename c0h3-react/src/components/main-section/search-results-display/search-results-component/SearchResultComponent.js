// @ts-check

import React from "react";

import "styles/search-result-component.scss"


/**
 * A single search result component.
 * @see {@link Form} for more information about the search mechanics.
 * @see {@link SearchResultsDisplay} - A parent component.
 * 
 * Possible props:
 *      text - A text/string to display.
 * 
 * @param {Object} props - The React properties (props).
 * @returns {Object} - Component's JSX.
 */
export default function SearchResultComponent({text}) {
    return (
        <div className="search-result-component">
            {text}
        </div>
    )
}