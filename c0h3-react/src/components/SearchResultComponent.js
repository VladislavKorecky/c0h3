// @ts-check

import React from "react";


/**
 * A single search result component.
 * @see {@link Form} for more information about the search mechanics.
 * @see {@link SearchResultsDisplay} - A parent component.
 * 
 * Possible props:
 *      text - A text/string to display.
 * 
 * @param {Object} props - The React properties (props).
 * @returns {Object} - Form component's JSX.
 * 
 * @component
 */
export default function SearchResultComponent({text}) {
    return (
        <div>
            {text}
        </div>
    )
}