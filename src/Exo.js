import { useState } from "react";
import {ExoDesign} from "../src/ExoDesign.css"
import Connexion from "../src/pages/Connexion.js"
import App from "./App.js";



function Exo() {
   var isLoggedIn=false;
   var content;

    const [nom, setNom]=useState("")
    const [prenom,setPrenom]=useState("");
     const fullname = nom +  ' ' +prenom

     const user={
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
     }
   
const handlesetPrenom=(e)=>{
    setPrenom(e.target.value)
  
}
const handlesetNom= (e)=> {
    setNom(e.target.value)

  
}


  
    


    return(
        <>
        <div>{isLoggedIn ?(<App/>):(<Connexion/>)}</div>
      
      </>
    )
}
export default Exo;