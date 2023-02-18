import React, {useState, useContext} from 'react'
import '../componentStylesheet/LoginComponent.css'
import CircularProgress from '@mui/material/CircularProgress';
import { UserContext } from './UserContext'



function LoginComponent({setCtoName, setCeoName, setCompanyName, }) {
    const {email, password} = useContext(UserContext)

    const [eyeType, setEyeType] = useState("far fa-eye")
    const [loggingIn, setLoggingIn] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    

   
    const togglePasswordVisibility = () => {
        var password = document.getElementById('password-input')
        if(password.type === 'password'){
            setEyeType("far fa-eye-slash")
            password.style.fontFamily ='Manrope'
            password.style.letterSpacing = '1px'
            password.style.fontSize = '16px'
            password.type = 'text'

        } else {
            password.type = 'password'
            password.style.fontFamily ='Verdana'
            password.style.letterSpacing = '-7px'
            password.style.fontSize = '30px'
            setEyeType("far fa-eye")
        }
    }
    const loginAction = () => {
        setLoggingIn(true)
        setIsDisabled(true)
        fetch('https://spacex-production.up.railway.app/', {
	method: 'POST',
	headers: {'Content-Type': 'application/json'},
	body: JSON.stringify({
		query: `{
            company {
                ceo
                cto
                name
            }
        }`
	})
})
	.then(res => res.json())
    .then((data) => {
        console.log(data.data)
        setCeoName(data.data.company.ceo)
        setCtoName(data.data.company.cto)
        setCompanyName(data.data.company.name)
    })
	.then(res => console.log(res.data));
    
    }
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
                    <input value={email} type="email" id='email-input' />
                    </div>

                    <div class='input-field-container'>
                    <label htmlFor='password-input'>Password</label>
                    <div>
                        <input value={password} type="password" id='password-input' />
                        <i class={eyeType} id="togglePassword" onClick={togglePasswordVisibility}></i>
                        
                    </div>
                    
                    </div>
                    
                </div>
                <button disabled={isDisabled} id='login-button' onClick={loginAction}>{loggingIn ? <CircularProgress /> : "Login"}</button>


            </div>

        </div>
    </div>
  )
}

export default LoginComponent