/**
 *  @decs import libs
 */
import React from "react";


/**
 *  @author : cristian duvan machado mosquera <cristian.machado@correounivalle.edu.co>
 *  @decs create header of the app
 *  
 */
export function Header({properties}) {
    //console.log(properties, "properties");
    return ( 
    <header className={(properties[0])["cls-1"]}> 
        <div></div>
        <div className={(properties[0])["cls-2"]}>{(properties[0]).content}</div>
        <div></div>
    </header>
    );
}