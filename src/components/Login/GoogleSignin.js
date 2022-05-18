import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import img from '../../img/google img.png'


const GoogleSignin = () => {
     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
     const navigate = useNavigate()

     
     const location = useLocation();
      let from = location.state?.from?.pathname || "/";

      if (user) {
        navigate(from, { replace: true });
      }
     
     useEffect(() => {
          if (error) {
            toast(error?.message);
          }
        }, [error]);
     return (
          <div className='flex justify-center h-screen items-center'>
               <button  onClick={()=>signInWithGoogle() } class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"><img width={40} src={img} alt="" /> sign in </button>
          </div>
     );
};

export default GoogleSignin;