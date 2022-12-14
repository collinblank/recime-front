import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CurrentUser } from './CurrentUser'
import OtherHeader from "../Header/OtherHeader"
import {IoLogInOutline} from 'react-icons/io5'
import './LoginForm.css'

function LoginForm() {

    const navigate = useNavigate()

    const { setCurrentUser } = useContext(CurrentUser)

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)

     
async function handleSubmit(e) {
    e.preventDefault()
    const response = await fetch(`https://recime-backend.herokuapp.com/authentication`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })

    const data = await response.json()

   if (response.status === 200) {
    setCurrentUser(data.user)
    console.log(data.user)
    localStorage.setItem('token', data.token)
    navigate('/recime-front')
   } else {
        setErrorMessage(data.message)
   }
}
return (
    <div className="background-spatula">
        <OtherHeader/>
    <main>
        <h1 className='header'>Login</h1>
        {errorMessage !== null
            ? (
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>
            )
            : null
        }
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-sm-6 form-group login-email">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        required
                        value={credentials.email}
                        onChange={e => setCredentials({ ...credentials, email: e.target.value })}
                        className="form-control"
                        id="email"
                        name="email"
                    />
                </div>
                <div className="col-sm-6 form-group login-password">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        required
                        value={credentials.password}
                        onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                        className="form-control"
                        id="password"
                        name="password"
                    />
                </div>
            </div>
            <button className="login" type="submit" > <IoLogInOutline/> </button>
        </form>
    </main>
    </div>
)
}

export default LoginForm