/**
 *  @decs import libs
 */
import $ from 'jquery';
import img_1 from './images/SliderImg/1.jpg';
import img_2 from './images/SliderImg/2.jpg';
import img_3 from './images/SliderImg/3.jpg';
import img_4 from './images/SliderImg/4.jpg';

/**
 * 
 *  @author : cristian duvan machado mosquera <cristian.machado@correounivalle.edu.co>
 *  @author : juan sebastian camino <juan.camino@correounivalle.edu.co>
 *  @decs here event listerner of the app
 *  
 */
$(function () {
    click_slider()
});
/**
 * 
 *  @author : cristian duvan machado mosquera <cristian.machado@correounivalle.edu.co>
 *  @author : juan sebastian camino <juan.camino@correounivalle.edu.co>
 *  @decs here event listerner of the click slider
 *  
 */

//funcion con evento click
function click_slider() {
    var button_nav;
    var navs_in_button;
    var index;
    let iterador = 0;
    let img_slider = [img_1, img_2, img_3, img_4];
    let img_text = ["descuento 15%","oferta limitada","No te lo puedes perder","Ultimo minuto"];

    $('.botonesSlide').on('click', function (event) {
        event.preventDefault();
        event.isDefaultPrevented();

       button_nav = $(this).parent()
       navs_in_button =  button_nav.find('.botonesSlide')
       index = navs_in_button.index(this)

       //condiciones para cambiar imagen
       if (index === 0) {

       if (iterador === 3) { 

       iterador = 0;
       }else {
       iterador++;
       } 

       }
       else {
        if (iterador === 0) {  
            iterador=3;  
            }else {
            iterador--;
            } 
       }
          
       $('.slide').css('background-image', 'url(' + img_slider[iterador] + ')');
       $('.textoSlide').html(img_text[iterador]);

       
    });
}
