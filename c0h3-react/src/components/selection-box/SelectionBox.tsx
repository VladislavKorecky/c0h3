// @ts-check

import { FC } from "react"


interface Props {
    name: string,
    title: string
}

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
const SelectionBox: FC<Props> = ({name, title}): JSX.Element =>  {
    return (
        <div>
            <h3>{title}</h3>
        </div>
    )
};
export default SelectionBox;