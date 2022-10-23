import React from "react";
import './app.css';
import { Article,Brand,Cta,Feature,Navbar} from "./components";
import {Footer,Blog,Header,Possibility,WhatGPT3,Features} from './container';
const App = () => {
    return(
        <div className="App">
            <div className="gradient_bg">
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <WhatGPT3/>
            <Features/>
            <Possibility/>
            <Cta/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default App;