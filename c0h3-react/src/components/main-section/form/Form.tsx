// @ts-check

import { FC, useEffect, useState } from "react"

import colorData from "color_db_data.json"
import ColorData from "../ColorData";

import "styles/form.scss"


interface Props {
    setSearchResults: React.Dispatch<React.SetStateAction<ColorData[]>>
}


/**
 * Form for searching through the color database.
 * 
 * Possible props:
 *      setSearchResults - A setter of "searchResults" state.
 * 
 * @param {Object} props - The React properties (props).
 * @returns {Object} - Component's JSX.
 */
const Form: FC<Props> = ({setSearchResults}): JSX.Element => {
    const defaultFormData: {
        searchField: string
    } = {
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
    function handleChange(event: { target: { name: any; value: any; }; }) {
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
    function handleSubmit(event: { preventDefault: () => void; }) {
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
        const results = colorDataValues.filter((sample) => {
            return sample.text.startsWith(formData.searchField)
        });
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
};
export default Form;