import { useState } from "react"


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

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
        setFormData(getDefaultFormData())
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Emotion/Effect"
                onChange={handleChange}
                name="searchField"
                value={formData.searchField}
            />
            <button>Submit</button>
        </form>
    )
}