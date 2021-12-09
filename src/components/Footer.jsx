/**
 *  @decs import libs
 */
import React from 'react';
import beidou from '../images/beidou.gif';


/**
 *  @author : juan sebastian camino <juan.camino@correounivalle.edu.co>
 *  @decs create header of the app
 *  @param {object} props
 *  @return {object} jsx
 */
export function Footer({ properties}) {

    return (
        <footer className={(properties[0])["cls-1"]}>
            <div className={(properties[0])["cls-5"]}>
                <img src={beidou} alt={"beidou"}/>
            </div>
            <div className={(properties[0])["cls-2"]}>
                <h2 className={(properties[0]["cls-3"])}>participantes del proyecto</h2>
                <ul className={(properties[0]["cls-4"])}>
                    <p>Juan Sebastian Camino Muñoz</p>
                    <p>Cristian Duvan Machado</p>
                    <p>Juan Felipe Osorio Zapata </p>
                    <p>Alejandro Mosquera</p>
                    <p>Ruzbellit Romero</p>
                    <p>Wilmer Cantillo </p>
                </ul>
            </div>
            <div></div>
        </footer>
    );
}