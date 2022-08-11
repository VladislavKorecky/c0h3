// @ts-check

import React from "react";
import { useEffect, useState } from "react"

import colorData from "../color_db_data.json"


/**
 * Form for searching through the color database.
 * 
 * Possible props:
 *      setSearchResults - A setter of "searchResults" state.
 * 
 * @param {Object} props - The React properties (props).
 * @returns {Object} - Form component's JSX.
 * 
 * @component
 */
export default function Form({setSearchResults}) {
    const defaultFormData = {
        searchField: "" // the text/data inside a search input field
    }
    /**
     * State that holds the form data.
     * Gets updated by the "handleChange" @see {@link handleChange}
     */
    const [formData, setFormData] = useState(defaultFormData);

    /**
     * Set/Update new form data after a change.
     * (input field gets edited, checkbox gets checked, dropdown selected, etc.).
     * 
     * @param {Object} event - The event object passed in by React.
     */
    function handleChange(event) {
        const { name, value } = event.target;

        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    /**
     * Handle the submit of a form. 
     * The only current functionality is to prevent the default behaviour (reloading the page).
     * 
     * @param {Object} event - The event object passed in by React.
     */
    function handleSubmit(event) {
        event.preventDefault()
    }

    /**
     * Filter through the color database by the text in the search field.
     * 
     * @returns {Object[]} - A filtered array.
     */
    function filterColorData() {
        // convert the root object into an array
        const colorDataValues = Object.values(colorData)

        // the filtering process based on the starting string/part
        // (executed by the startsWith() function)
        const results = colorDataValues.filter((sample) => sample.text.startsWith(formData.searchField));
        return results
    }

    /**
     * Effect run on the form data change. Sets the search results.
     */
    useEffect(() => {
        const filteredColorData = filterColorData()
        setSearchResults(filteredColorData)
    }, [formData])

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Emotion/Effect"
                onChange={handleChange}
                name="searchField"
                value={formData.searchField}
            />
        </form>
    )
}