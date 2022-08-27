// @ts-check

import { FC } from "react";

import "styles/search-result-component.scss"


/**
 * Interface for React props.
 */
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
 * @type {FC<Props>}
 * @param {Props} props - The React properties (props).
 * @returns {JSX.Element} - Component's JSX.
 */
const SearchResultComponent: FC<Props> = ({text}: Props): JSX.Element => {
    return (
        <div className="search-result-component">
            {text}
        </div>
    )
};
export default SearchResultComponent;