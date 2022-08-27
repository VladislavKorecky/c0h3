/**
 * An interface for a single emotion/effect in the color psychology database.
 */
export default interface ColorData {
    positive: boolean,
    text: string,
    colors: string[],
    importance: number[],
    id: number
}