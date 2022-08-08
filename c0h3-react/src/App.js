import { useState, useEffect } from "react"


export default function App() {
    const [heading, setHeading] = useState("")

    useEffect(() => {
        fetch("http://127.0.0.1:5000/")
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            })
            .then(data => {
                setHeading(data.message)
            })
            .then(error => console.log(error))
    }, [])


    return (
        <h1>{heading}</h1>
    )
}