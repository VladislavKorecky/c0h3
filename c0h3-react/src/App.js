import { useState } from "react";
import Form from "./components/Form";


export default function App() {
    const [searchResults, setSearchResults] = useState([])

    return (
        <>
            <h1>Welcome to C0H3!</h1>
            <Form setSearchResults={setSearchResults} />
        </>
    )
}