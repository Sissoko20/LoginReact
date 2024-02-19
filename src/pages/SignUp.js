import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faUserTie,faKey, faSign } from '@fortawesome/free-solid-svg-icons'
import "../pages/SignUp.css"

function SignUp(){
    const bg={
        imgUrl:"https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?cs=srgb&dl=pexels-marc-mueller-380769.jpg&fm=jpg"
    }

const userInfo={
    fullname:'',
    email:'',
    password:'',
    confirm:''
}


    return(
        <div>
            <div className='flex-Container'>
            <div className='bg'>
                <div className='imgBox'>
               <img src={bg.imgUrl} alt=''/>
               </div>
    
            </div>
          


         
      
          <div  className="signup"> 
            <h1>Sign Up </h1> 

            <div className="formFlex">
                <form> 
                <div className='inputItems'>
                    
                    <label>
                    <FontAwesomeIcon icon={faUserTie} />
                         Full name : 
                        <input value={userInfo.fullname}placeholder='write full name'/> 
                    </label>

                    <label>
                        <FontAwesomeIcon icon={faEnvelope} />
                         Email  : 
                        <input value={userInfo.email} placeholder='enter your email'/> 
                    </label>

                    <label> 
                    <FontAwesomeIcon icon={faKey} />
                        Password  : 
                        <input value={userInfo.password} placeholder='enter your password'/> 
                    </label>

                    <label> 
                    <FontAwesomeIcon icon={faKey} />
                        Confirm password  : 
                        <input value={userInfo.confirm} placeholder="confirm your password"/> 
                    </label>
                    
                    <div className='acceptbox'>
                    <label> I accept the conditions 
                    <input type='checkbox'/> 
                    </label>
                    </div>
                  <div className='btnconnnexion'>
                    <button> <FontAwesomeIcon icon={faSign}></FontAwesomeIcon> Sign up</button> 
                    <button> <FontAwesomeIcon icon={faSign}></FontAwesomeIcon> Sign up</button> 
                    
                  </div>
                </div>
                </form>
            </div>
          </div>
        </div>
        </div>
    )


}
export default SignUp