// @ts-check

import { FC } from "react";

import "styles/search-result-component.scss"


interface Props {
    text: string
}


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
const SearchResultComponent: FC<Props> = ({text}): JSX.Element => {
    return (
        <div className="search-result-component">
            {text}
        </div>
    )
};
export default SearchResultComponent;