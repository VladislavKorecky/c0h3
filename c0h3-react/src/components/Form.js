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