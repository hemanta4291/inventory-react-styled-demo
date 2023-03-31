import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthWrapper } from '../components/styled/AuthWrapper.styled'
import { ButMediumPrimaryContained } from '../components/styled/Button.Styled'
import TextField from '../components/TextField'

const Login = () => {
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [isRemember,setIsRemember] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log({userEmail,userPassword,isRemember})
        navigate("dashboard")
    }
    return (
        <AuthWrapper>
            <div className='container'>
                <h2 className='title'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <TextField onChange={(e) => setUserEmail(e.target.value)} value={userEmail} type="email" label="Email" placeholder="Enter Email" />
                    <TextField onChange={(e) => setUserPassword(e.target.value)} value={userPassword} type="password" label="Password" placeholder="Enter Password" />

                    <div className='forgot'>
                        <div className='forgot__inner'>
                            <input id="remember" value={isRemember} onChange={()=>setIsRemember(!isRemember)} type="checkbox" />
                            <label for="remember">Remember Me</label>
                        </div>
                        <Link to="/forgot-password">Forgot Password</Link>
                    </div>
                    <div className='submit'>
                        <ButMediumPrimaryContained>
                            Login
                        </ButMediumPrimaryContained>
                    </div>

                </form>
            </div>
        </AuthWrapper>
    )
}

export default Login