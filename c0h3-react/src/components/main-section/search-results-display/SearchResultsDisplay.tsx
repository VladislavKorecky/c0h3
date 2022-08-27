// @ts-check

import { FC } from "react";

import SearchResultComponent from "./search-results-component/SearchResultComponent";

import "styles/search-result-display.scss"


/**
 * Interface for React props.
 */
interface Props {
    searchResults: {
        id: number,
        text: string
    }[]
}


/**
 * Display component for displaying the results of a search.
 * @see {@link Form} for more information about the search mechanics.
 * 
 * Possible props:
 *      searchResults - The "searchResults" state.
 * 
 * @type {FC<Props>}
 * @param {Props} props - The React properties (props).
 * @returns {JSX.Element} - Component's JSX.
 */
const SearchResultsDisplay: FC<Props> = ({searchResults}: Props): JSX.Element => {
    // maps the raw search results into UI
    const searchResultComponents: JSX.Element[] = searchResults.map(result => {
        return <SearchResultComponent key={result.id} text={result.text} />
    })

    return (
        <div className="search-result-display">
            {searchResultComponents}
        </div>
    )
};
export default SearchResultsDisplay;