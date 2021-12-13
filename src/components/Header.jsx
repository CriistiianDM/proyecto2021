/**
 *  @decs import libs
 */
import React from "react";
import dataHeader from '../json/data.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

/**
 *  @author : cristian duvan machado mosquera <cristian.machado@correounivalle.edu.co>
 *  @decs create header of the app
 *  
 */
export function Header({properties}) {
    const first_element = Object.values(dataHeader)[1]

    return ( 
    <header className={(properties[0])["cls-1"]}> 
        <div className={first_element["cls-2"]}>{first_element["name-producto"]}</div>
        <div></div>
        <FontAwesomeIcon icon={faWallet} size="2x" className={first_element["cls-3"]}/>
    </header>
    );
}