import React, { useContext } from "react";
import "./Loging.css";
import { userContext } from "../../App";
import {
    handleGoogleLoging,
    insializUserLoging,
} from "../firebase/FirebaseAuth";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Loging = () => {
    const { setUser, admin, setAdmin } = useContext(userContext);

 
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    insializUserLoging();
    const handleGoogleSignIn = () => {
        handleGoogleLoging()
            .then((res) => {


                setUser(res);


      const adminEmail={
         email:res.email
      }
                fetch("http://localhost:4500/checkAdmin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(adminEmail)
                })
                .then(res=>res.json())
                .then(data=>{
                     if(data.length > 0){

                        setAdmin(true)

                     }
                   
                })
                .catch(err=>{
                    console.log(err)
                })
                history.replace(from);
                
            })
            .catch((err) => {
                console.log(err);
            });
    }






    

    return (
        <div className="signing-button">
            <div className="signing mt-5">
                <Button variant="primary" onClick={handleGoogleSignIn}>                  
                  <FontAwesomeIcon className="p-1 custom-icon" icon={faGoogle} /> Log-ing 
                </Button>
            </div>
            <i class="fab fa-google-plus-g"></i>
        </div>
    );
};

export default Loging;
