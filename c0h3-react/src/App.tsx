// @ts-check

import { FC } from "react";

import MainSection from "./components/main-section/MainSection";
import SelectionBox from "./components/selection-box/SelectionBox";

import "./styles/base.scss"

/**
 * Root app component.
 * 
 * @returns {Object} - App component's JSX.
 */
const App: FC = (): JSX.Element => {
    return (
        <>
            <MainSection />
            <SelectionBox name="positive" title="Positive emotions/effects" />
            <SelectionBox name="negative" title="Negative emotions/effects" />
        </>
    )
};
export default App;