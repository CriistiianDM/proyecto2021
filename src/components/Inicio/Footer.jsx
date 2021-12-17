/**
 *  @decs import libs
 */
import React from 'react';
import beidou from '../../images/beidou.gif';
import integrantes from  '../../json/data.json';

/**
 *  @author : juan sebastian camino <juan.camino@correounivalle.edu.co>
 *  @author : Alejandro Mosquera <cardona.alejandro@correounivalle.edu.co>
 *  @author : Cristian Duvan Machado <cristian.machado@coreounivalle.edu.co>
 *  @decs create header of the app
 *  
 */
export function Footer({properties}) {
    
    const nameIntegrantes = Object.entries(Object.values(integrantes)[0])
    
    return (
        <footer className={(properties[0])["cls-1"]}>
            <div className={(properties[0])["cls-5"]}>
                <img src={beidou} alt={"beidou"}/>
            </div>
            <div className={(properties[0])["cls-2"]}>
                <h2 className={(properties[0]["cls-3"])}>Participantes del proyecto</h2>
                <ul className={(properties[0]["cls-4"])}>
                    {nameIntegrantes.map ( (item) => (
                        <li key={item[1].name}>{item[1].name}</li>
                    ))}
                </ul>
            </div>
            <div className={(properties[0])["cls-6"]} >
            <a className='footer-divRigthfeaturesSlack' href='https://app.slack.com/client/T02LTF0ASN9/C02N04EDXBL' rel='noreferrer' target='_blank'><i className='bi bi-slack ' ></i></a> 
            <a className='footer-divRigthfeaturesGitHub' href='https://github.com/CriistiianDM/proyecto2021' rel='noreferrer' target='_blank'><i className='bi bi-github'></i></a>            
            </div>
        </footer>
    );
  
}