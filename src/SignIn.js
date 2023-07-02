import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
// import { useGoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './SignIn.css';



function SignIn({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    handleLogin();
  };
 
  
  
  
  return (
    <div className='signin'>

      <div className='left'>
        <h2>Board.</h2>
      </div>

      <div className='right'>
        <div className='content'>
        <h1 className='h1_signin'>Sign In</h1>
        <h3 className='h3_des'>Sign in to your account</h3>
        <div className='signin-with'>
        <button className='buttons'>  
        <GoogleOAuthProvider clientId="66984897381-ao6vk2jj7ngrdnvqpigg6ds5n55266vv.apps.googleusercontent.com">
        
          
          <GoogleLogin onSuccess={handleLogin} buttonText="Sign in with Google"/>
          
          
          </GoogleOAuthProvider>
          </button>
          <button className='buttons'><svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_0_355)">
              <path d="M6.34516 1.21952C7.27201 0.00716167 8.56055 0.00125122 8.56055 0.00125122C8.56055 0.00125122 8.75222 1.14107 7.83144 2.23908C6.84828 3.41151 5.73078 3.21966 5.73078 3.21966C5.73078 3.21966 5.52094 2.29759 6.34516 1.21952ZM5.84866 4.0181C6.32548 4.0181 7.21043 3.36763 8.36232 3.36763C10.3451 3.36763 11.1251 4.76781 11.1251 4.76781C11.1251 4.76781 9.59954 5.54189 9.59954 7.42017C9.59954 9.53904 11.5 10.2693 11.5 10.2693C11.5 10.2693 10.1715 13.9801 8.37708 13.9801C7.55292 13.9801 6.91217 13.4289 6.04378 13.4289C5.15883 13.4289 4.28065 14.0007 3.70868 14.0007C2.0701 14.0007 0 10.4806 0 7.65098C0 4.86704 1.7522 3.40664 3.39569 3.40664C4.46411 3.40664 5.29321 4.0181 5.84866 4.0181Z" fill="#999999" />
            </g>
            <defs>
              <clipPath id="clip0_0_355">
                <rect width="11.5" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
          
          &nbsp;Sign in with Apple</button>
        </div>
        <div className='input-area'>
          <h5 className='label'>Email address</h5>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder=" johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5 className='label'>Password</h5>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className='p_fp'>Forgot password?</p>
            <button className='submit-btn' type="submit">Sign In</button>
          </form>

        </div>
        <div className='signup'><p className='p-signup'>Don’t have an account?&nbsp;<a href="/">Register here</a></p></div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
