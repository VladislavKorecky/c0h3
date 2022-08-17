// @ts-check

import { FC, useState } from "react";

import ColorData from "./ColorData"
import Form from "./form/Form";
import Introduction from "./introduction/Introduction";
import SearchResultsDisplay from "./search-results-display/SearchResultsDisplay";


/**
 * Main section of the page. Contains the introduction, form and the form results.
 * 
 * @returns {Object} - Component's JSX.
 */
const MainSection: FC = () => {
    /**
     * State that holds the results of a search.
     * @see {@link Form} for the origin of the search results.
     */
     const [searchResults, setSearchResults] = useState<ColorData[]>([])

    return (
        <main>
            <Introduction />
            <Form setSearchResults={setSearchResults} />
            <SearchResultsDisplay searchResults={searchResults} />
        </main>
    )
};
export default MainSection;