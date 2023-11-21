import React from 'react';
import Header from './Header';
import Shoes from './Shoes';


export default function AllProducts(){
    const urlApi='http://localhost:8080/api/produits';
return (<div>
    <Header>
       
    </Header>
    <h3 className="mt-4 mb-4 text-center">Nos  Produits</h3>
    <Shoes urlApi={urlApi}></Shoes>
 
    </div>);
}