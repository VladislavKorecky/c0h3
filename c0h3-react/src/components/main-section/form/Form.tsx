// @ts-check

import { FC, useEffect, useState } from "react"

import colorData from "color_db_data.json"
import ColorData from "../ColorData";

import "styles/form.scss"


/**
 * Interface for React props.
 */
interface Props {
    setSearchResults: React.Dispatch<React.SetStateAction<ColorData[]>>
}


/**
 * Interface for form data.
 */
interface FormData {
    searchField: string
}


/**
 * Interface for onChange event.
 */
interface OnChangeEvent {
    target: {
        name: any,
        value: any
    }
}


/**
 * Interface for onSubmit event.
 */
interface OnSubmitEvent {
    preventDefault: () => void
}


/**
 * Form for searching through the color database.
 * 
 * Possible props:
 *      setSearchResults - A setter of "searchResults" state.
 * 
 * @type {FC<Props>}
 * @param {Props} props - The React properties (props).
 * @returns {JSX.Element} - Component's JSX.
 */
const Form: FC<Props> = ({setSearchResults}: Props): JSX.Element => {
    /**
     * Default version of formData.
     * 
     * @type {FormData}
     */
    const defaultFormData: FormData = {
        searchField: ""
    }
    /**
     * State that holds the form data.
     * Gets updated by the "handleChange" @see {@link handleChange}
     */
    const [formData, setFormData] = useState<FormData>(defaultFormData);

    /**
     * Set/Update new form data after a change.
     * (input field gets edited, checkbox gets checked, dropdown selected, etc.).
     * 
     * @param {OnChangeEvent} event - The event passed in when onChange gets triggered.
     */
    function handleChange(event: OnChangeEvent) {
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
     * @param {OnChangeEvent} event - The event passed in when onSubmit gets triggered.
     */
    function handleSubmit(event: OnSubmitEvent) {
        event.preventDefault()
    }

    /**
     * Filter through the color database by the text in the search field.
     * 
     * @returns {ColorData[]} - A filtered array.
     */
    function filterColorData(): ColorData[] {
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
    useEffect((): void => {
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