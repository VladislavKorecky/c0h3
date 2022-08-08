import { useState } from "react"

import colorData from "../color_db_data"


export default function Form() {
    const [formData, setFormData] = useState(getDefaultFormData());

    function getDefaultFormData() {
        return {
            searchField: ""
        }
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function filterColorData() {
        const colorDataValues = Object.values(colorData)
        const results = colorDataValues.filter((sample) => sample.text.startsWith(formData.searchField));
        return results
    }

    console.log(filterColorData())

    return (
        <form>
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