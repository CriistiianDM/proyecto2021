/**
 *  @decs import libs
 */
import React from "react";
import dataProductos from '../json/data.json';

export function Productos() {
    const elemnt_productos = (Object.values(dataProductos)[3])
    return (
        <div className={elemnt_productos["cls-1"]}>
        </div>
    );
}