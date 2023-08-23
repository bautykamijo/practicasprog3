import React from "react";
import Category from "../Category/Category";
import Ficha from "../Ficha/Ficha";
import Personajes from "../Personajes/Personajes";
import './Main.css'

let fichas = [{
    tit : 'Products in Database',
    sub : '135',
    icono : 'fas fa-clipboard-list fa-2x text-gray-300'},
    {
    tit : 'Amount in Products',
    sub : '$645.634',
    icono : 'fas fa-dollar-sign fa-2x text-gray-300'},
    {
    tit : 'Users Quantity',
    sub : '90',
    icono : 'fas fa-user fa-2x text-gray-300'}];

let categoryNum = ['1', '2', '3', '4', '5', '6'];

let monstruos = [{
    nombre : 'Ahsoka',
    foto : 'ahsoka.jpg'
},{
    nombre : 'Batman',
    foto : 'batman.jpg'
},{
    nombre : 'Obi Wan Kenobi',
    foto : 'obiWan.jpg'
},{
    nombre : 'Yoda',
    foto : 'yoda.jpg'
},{
    nombre : 'Capitan America',
    foto : 'capAmerica.jpg'
},{
    nombre : 'Strange',
    foto : 'strange.jpg'
},{
    nombre : 'Luke Skywalker',
    foto : 'luke.jpg'
},{
    nombre : 'Kylo Ren',
    foto : 'kyloRen.jpg'}];


function Main() {
    return(
        <main>
        <section className="top-data">
            {fichas.map((ficha, idx) => <Ficha key={ficha.tit + idx} ficha={ficha}/>)}
        </section>
        <h2>Categories in database</h2>
        <section className="general-data">
         {categoryNum.map((num, idx) => <Category key={num + idx} num={num}/>)}
        </section>
        <h2>Personajes de películas</h2>
        <section class="card-container">
        {monstruos.map((monstruo, idx) => <Personajes key={monstruo.nombre + idx} monstruo={monstruo}/>)}
        </section>
        </main>
    )
    
}

export default Main;