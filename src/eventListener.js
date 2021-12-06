/**
 *  @decs import libs
 */
import $ from 'jquery';


/**
 * 
 *  @author : cristian duvan machado mosquera <cristian.machado@correounivalle.edu.co>
 *  @decs here event listerner of the app
 *  
 */
$(function () {
  console.log('Hello World!');
});




/**
 * 
 *  @author : cristian duvan machado mosquera <cristian.machado@correounivalle.edu.co>
 *  @decs get the data of the json file
 *  @returns json data
 *  
 */
async function getData() {
  const response = await fetch('./json/data.json');
  if (!response.ok) {

    let error = "Error 404. dataBase Json, no found";
    console.log("hey")
    throw new Error(error);

  }
  else {

    const objectJson = response.json();
    return objectJson;

  }
}