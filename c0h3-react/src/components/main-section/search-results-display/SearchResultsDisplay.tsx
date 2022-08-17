// @ts-check

import SearchResultComponent from "./search-results-component/SearchResultComponent";

import "styles/search-result-display.scss"


/**
 * Display component for displaying the results of a search.
 * @see {@link Form} for more information about the search mechanics.
 * 
 * Possible props:
 *      searchResults - The "searchResults" state.
 * 
 * @param {Object} props - The React properties (props).
 * @returns {Object} - Component's JSX.
 */
export default function SearchResultsDisplay({searchResults}) {
    // maps the raw search results into UI
    const searchResultComponents = searchResults.map(result => {
        return <SearchResultComponent key={result.id} text={result.text} />
    })

    return (
        <div className="search-result-display">
            {searchResultComponents}
        </div>
    )
}