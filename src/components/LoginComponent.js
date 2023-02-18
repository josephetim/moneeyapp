import React, {useState, useContext} from 'react'
import '../componentStylesheet/LoginComponent.css'

import LoginPresentational from './LoginPresentational';
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
    <LoginPresentational togglePasswordVisibility={togglePasswordVisibility} loginAction={loginAction} password={password} eyeType={eyeType} isDisabled={isDisabled} loggingIn={loggingIn} email={email} />
  )
}

export default LoginComponent