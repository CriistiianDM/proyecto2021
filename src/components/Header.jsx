/**
 *  @decs import libs
 */
import React from "react";
import dataHeader from '../json/data.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
        <div className={first_element["cls-8"]}>
           <input className={first_element["cls-9"]} type="text" placeholder="Buscar"/>
           <a href='#search'><FontAwesomeIcon icon={faSearch} className={first_element["cls-10"]}/></a>
        </div>
        <div></div>
        <div className={first_element["cls-6"]}>
            <FontAwesomeIcon icon={faUser} className={first_element["cls-7"]}/>
        </div>
        <div className={first_element["cls-3"]}>
        <FontAwesomeIcon icon={faWallet} className={first_element["cls-4"]}/>
        <div className={first_element["cls-5"]}>{first_element["name-wallet"]}</div>
        </div>
    </header>
    );
}