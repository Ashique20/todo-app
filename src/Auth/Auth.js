import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.init";
import { Navigate, useLocation } from "react-router-dom";
import Loading from '../Loading/Loading'

const Auth =({children})=>{
    const [user,loading]= useAuthState(auth)
    const location = useLocation();
   if(loading){
      return <Loading></Loading>
   }
    if(!user){
       return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
   return children;
};
export default Auth;