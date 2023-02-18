import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import '../componentStylesheet/LoginComponent.css'

const LoginPresentational = (props) => {
  return (
    <div id="login-frame">
        <div id='left-infographics'>
            <img id='logo' alt='logo' src='./assets/MoneeyAppLogo.svg' />
            <div className='top-text-infographics'>
                <p className='bold-text'>Hi there, see what's new</p>
                <p>Here’s how Foodcourt helps you manage your daily operations and ensure your riders are efficient</p>
            </div>
            <div id='options'>
                <div className='option-items grey' id='option-1'>
                    <img alt='icon' src='./assets/icon1.svg' className='option-img' />
                    <div className='option-info'>
                        <p className='option-header'>Monitor your Earnings</p>
                        <p className='option-text'>Easily see how much your busineses are earning  on each transaction and watch your earnings rise.</p>
                    </div>
                </div>
                <div className='option-items grey' id='option-2'>
                    <img alt='icon' src='./assets/icon2.svg' className='option-img' />
                    <div className='option-info'>
                        <p className='option-header'>Manage your Businesses</p>
                        <p className='option-text'>Easily see how much your businesses are earning  on each transaction and watch your earnings rise.</p>
                    </div>
                </div>
                <div className='option-items' id='option-3'>
                    <img alt='icon' src='./assets/icon3.svg' className='option-img' />
                    <div className='option-info'>
                        <p className='option-header'>Delegate to Staff</p>
                        <p className='option-text'>Easily see how much your businesses are earning  on each transaction and watch your earnings rise. </p>
                    </div>
                    <img id='option-3-tick' alt='tick' src='./assets/tick-circle.svg'/>
                </div>
            </div>
        </div>
        <div id='dashboard-login-background'>
            <div id='login-white-square'>
                <div id='info-text'>
                    <p className='info-text-sub-header'>Login to your dashboard</p>
                    <p id='info-text-sub-info'>Provide details to login to your account</p>
                </div>
                <div id='input-fields'>
                    <div class='input-field-container'>
                    <label htmlFor='email-input'>Email</label>
                    <input value={props.email} type="email" id='email-input' />
                    </div>

                    <div class='input-field-container'>
                    <label htmlFor='password-input'>Password</label>
                    <div>
                        <input value={props.password} type="password" id='password-input' />
                        <i class={props.eyeType} id="togglePassword" onClick={props.togglePasswordVisibility}></i>
                        
                    </div>
                    
                    </div>
                    
                </div>
                <button disabled={props.isDisabled} id='login-button' onClick={props.loginAction}>{props.loggingIn ? <CircularProgress /> : "Login"}</button>


            </div>

        </div>
    </div>
  )
}

export default LoginPresentational