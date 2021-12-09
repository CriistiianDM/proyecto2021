/**
 *  @decs import libs
 */
import React from 'react';
import beidou from '../images/beidou.gif';
import integrantes from '../json/data.json'
/**
 *  @author : juan sebastian camino <juan.camino@correounivalle.edu.co>
 *  @author : Alejandro Mosquera <cardona.alejandro@correounivalle.edu.co>
 *  @decs create header of the app
 *  
 */
export function Footer({properties}) {

    return (
        <footer className={(properties[0])["cls-1"]}>
            <div className={(properties[0])["cls-5"]}>
                <img src={beidou} alt={"beidou"}/>
            </div>
            <div className={(properties[0])["cls-2"]}>
                <h2 className={(properties[0]["cls-3"])}>Participantes del proyecto</h2>
                <ul className={(properties[0]["cls-4"])}>
                    {integrantes.map ( (item) => (
                        <li key={item.name}>{item.name}</li>
                    ))}
                </ul>
            </div>
            <div></div>
        </footer>
    );
}