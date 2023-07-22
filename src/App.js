import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
import './App.css';

export default function App() {
    return (
        <div>
            <Header />
            <p class="slogan">Add your lines and generate some fun!</p>
            <Meme />
        </div>
    )
}
