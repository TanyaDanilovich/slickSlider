import './App.css';
import React from 'react';
import SlickSlider from './SlickSlider';
import TopSwiper from './TopSwiper';


function App() {
    return (
        <div className = "App">
            <div style = {{marginTop: "100px"}}>
                <TopSwiper/>
            </div>
            <div style = {{marginTop: "100px"}}>
                <SlickSlider/>
            </div>


        </div>
    );
}

export default App;
