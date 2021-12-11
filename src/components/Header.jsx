/**
 *  @decs import libs
 */
import React from "react";
import dataHeader from '../json/data.json';
import $ from 'jquery';
/**
 *  @author : cristian duvan machado mosquera <cristian.machado@correounivalle.edu.co>
 *  @decs create header of the app
 *  
 */
export function Header({properties}) {
    const first_element = Object.values(dataHeader)[1]
    const icon = first_element.icon
    return ( 
    <header className={(properties[0])["cls-1"]}> 
        <div className={first_element["cls-2"]}>{first_element["name-producto"]}</div>
        <div></div>
        <i className="fas fa-wallet"></i>
    </header>
    );
}