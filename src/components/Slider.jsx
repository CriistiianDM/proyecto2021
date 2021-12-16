/**
 *  @decs import libs
 */
 import React from "react";
 import dataSlider from '../json/data.json';
 import { ReactComponent as FlechaDerecha} from './../images/SliderImg/iconmonstr-angel-right-thin.svg'; 
 import { ReactComponent as FlechaIzquierda} from './../images/SliderImg/iconmonstr-angel-left-thin.svg'; 

 


/**
 *  @author : Juan Sebastian Camino Muñoz <juan.camino@correounivalle.edu.co>
 *  @author : cristian duvan machado mosquera <cristian.machado@correounivalle.edu.co>
 *  @decs create slider of the app
 *  
*/

export function Slider() {
    const elemnt_slider = (Object.values(dataSlider)[2])

    return (
        <div className={elemnt_slider["cls-1"]}>
            <div className={elemnt_slider["cls-2"]}>
                <div className={elemnt_slider["cls-3"]}>
                    <div className={elemnt_slider["cls-8"]}>
                     <div className={elemnt_slider["cls-4"]}>
                         <FlechaIzquierda className={elemnt_slider["cls-5"]}/>
                     </div>
                     <div className={elemnt_slider["cls-6"]}></div>
                     <div className={elemnt_slider["cls-4"]}>
                         <FlechaDerecha  className={elemnt_slider["cls-5"]}/>
                     </div>
                    </div>
                    <div className={elemnt_slider["cls-7"]}>descuento 15%</div>
                </div>
            </div>
        </div>
     );
 }