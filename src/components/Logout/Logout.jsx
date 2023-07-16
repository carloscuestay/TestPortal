import { useNavigate } from "react-router-dom"


const Logout = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('user')

    navigate('/')
  }

  return (
    <div className="logout">
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  )
}

export default Logout