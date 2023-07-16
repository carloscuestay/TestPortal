import { useState } from "react"
import { useNavigate } from "react-router-dom"


const InputSearch = () => {

  const [email, setEmail] = useState('')
  
  const navigate = useNavigate()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSearch = () => {

    let user = localStorage.getItem('user')

    if (user) {
      user = JSON.parse(user)

      fetch(`http://instawebc.azurewebsites.net:9000/api/photo/user/${email}`, {
        headers: {
          'token-auth': user.token
        }
      })
      .then(resp => resp.json())
      .then(data => {
        if (!data.ok) {
          localStorage.removeItem('user')

          navigate('/')
        }
        navigate(`/home/${data.user._id}`)

      })
      .catch()
    }

  }

  return (
    <div className="search">
      <input type="text" name="" id="" onChange={handleEmail}/>
      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}

export default InputSearch