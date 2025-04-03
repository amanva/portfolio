import React, { useEffect } from "react";
import './loadingScreen.scss';
import { loadAnim } from "../animations/animations";
const LoadingScreen = () => {

    useEffect(() =>{
        loadAnim()
    },[]
    );
    return (
        <div className="load">
            <div className="load-container">
                <span className="load-span">LOADING PORTFOLIO</span>

            </div>
        </div>
    )
}
export default LoadingScreen