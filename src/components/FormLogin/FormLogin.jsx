import { useState } from "react";
import { useNavigate } from "react-router-dom";



const FormLogin = ({bus}) => {

  const [usermame, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const handleOnsubmit = event => {
    event.preventDefault()

    const credentials = {
      email: usermame,
      password
    }
    
    fetch('http://instawebc.azurewebsites.net:9000/api/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then( resp => resp.json())
    .then( data => {
      if (data.token) {
        localStorage.setItem('user', JSON.stringify({
          token: data.token,
          user_id: data.id_user
        }))
  
        navigate('home')
      }

      bus()

    })
    .catch( e => console.log('error', e.message))

  }

  return (
    
    <div>
    <link rel="stylesheet" href="formLogin.module.css" />
    <form method="POST" onSubmit={handleOnsubmit}>
      <label htmlFor='username'>Correo</label>
      <input type="email" id="username" onChange={e => setUsername(e.target.value)} />
      <label htmlFor='pass'>Contraseña</label>
      <input type="password" id="pass" onChange={e => setPassword(e.target.value)} />

      <input type="submit" value="Ingresar" />
    </form>
    </div>
    
  )
}

export default FormLogin