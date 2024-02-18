import React, { useState } from "react";

import "../pages/Connexion.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faUser,faLock } from '@fortawesome/free-solid-svg-icons'



function Connexion () {

const user={
  imgurlG:'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png',
  imgUrlfb:'https://www.freepnglogos.com/uploads/facebook-logo-28.png',
  imgUrlTwitter:'https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-simple-rounded-social-icon-png-logo-30.png'
}

    const [email, setEmail]=useState('');
    const [password, setpassword]=useState('');

 const handleSubmit=(e)=>(
        console.log(e.preventDefault)
 )

 const handlesetEmail=(e)=>(
setEmail(e.target.value)
 )

 const handlesetPassword=(e)=>(
    setpassword(e.target.value)
     )

  return (
    <div>
     
      <div className="formflex">
        <div className="formContent">
          <h1 className="login"> Login</h1>
     
      <form className="flex" action="submit" onSubmit={handleSubmit}>
      
      <div className="inputFlex">
       <label> 
        <FontAwesomeIcon icon={faUser} />
          Username : 
        <input
        value={email}
        
          
          onChange={handlesetEmail}
          icon={faEnvelope}
          placeholder="entrez votre nom ou email"
        />
        </label>

     
       
     
       <label> 
        <FontAwesomeIcon icon={faLock} />
          
          Password : 
        <input size={30} type='password' 
        value={password}
          
          onChange={handlesetPassword}
          placeholder="saisissez votre password"
        />
        </label>

       </div>
      

        <div className="forgotten">

          <p>Forgotten  your password ?</p>
        </div>

          <div className="btnLogin">
        <button>Login</button>
        </div>
      </form>
      <div className="linkNetwork">
        <p>Or sign with </p>
        <div className="logoSocial">
          <img src={user.imgurlG} alt='logo google' style={{width:'50px', height:"auto", marginRight: "10px"}}/>
          <img src={user.imgUrlfb} alt='logo google' style={{width:'50px', height:"auto", marginRight: "10px"}}/>
          <img src={user.imgUrlTwitter} alt='logo google' style={{width:'50px', height:"auto", marginRight: "10px"}}/>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}
export default Connexion;

//Gestion des liste

//Gestion des formulaires
//1 creation du formulation
/* <form action="submit" onSubmit={}>
                      <input type='text' placeholder="Ajouter un nom"/> 
                      <button>Ajouter</button>

            </form>*/

//
