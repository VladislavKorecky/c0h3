// @ts-check

import React from "react";


/**
 * Box for selected emotions/effects.
 * 
 * Possible props:
 *      name - A unique name (id) for the box.
 *      title - A title/text of the box.
 * 
 * @param {Object} props - The React properties (props).
 * @returns {Object} - Component's JSX.
 */
export default function SelectionBox({name, title}) {
    console.log(name)

    return (
        <div>
            <h3>{title}</h3>
        </div>
    )
}