/**
 *  @decs import libs
 */
import React , { useState } from "react";
import { Header } from "./components/Header";
import { eventListener } from "./eventListener";
import { Footer } from "./components/Footer";
import { styles } from "./css/styles.css";
import { Slider } from "./components/Slider";
import { Productos } from "./components/Productos";


/** 
 *  @author : cristian duvan machado <cristian.machado@correounivalle.edu.co>
 *  @decs import components 
*/
export function App() {
    //state of the app

    const [array, setarray] = useState([{ "cls-1": "header-box" , "cls-2": "title-content" , content: "Desarrollo De Software I" }]);
    const [array2, setarray2] = useState([{ "cls-1": "footer-box" , 
                                            "cls-2":"footer-divmidfeatures",
                                            "cls-3": "footer-titleFeatures",
                                            "cls-4": "footer-textFeatures", 
                                            "cls-5": "footer-divleftfeatures",
                                            "cls-6": "footer-divRigthfeatures", 
                                            content: "Desarrollo De Software II" }]); 
    const [array3, setarray3] = useState([{"cls-1":"contenedorSlideShow",
                                           "cls-2":"slide",
                                           "cls-3":"textoSlide",
                                           "cls-4":"botonesSlide",
                                           "cls-5":"botonRight",
                                           "cls-6":"botonLeft",
                                           "cls-7":"slider-box",
                                            content: "Desarrollo De Software III"}]);   

    // return component of the app
    return (
       <>
        <Header properties={array}/>
        <Slider />
        <Productos />
        <Footer properties={array2}/>
       </>
    );
}
