import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Add = ({bus}) => {

  const [isVisible, setIsVisible] = useState(false)

  const navigate = useNavigate()

  const handleVisible = () => {
    setIsVisible(true)
  }

  const handleCancel = () => {
    setIsVisible(false)
  }

  const handleCreatePhoto = (event) => {

    event.preventDefault()

    let user = localStorage.getItem('user')

    if (user) {
      user = JSON.parse(user)

      const image = {
        url: event.target[0].value,
        user_id: user.user_id
      }

      fetch('http://localhost:9000/api/photo/create', {
        method: 'POST',
        body: JSON.stringify(image),
        headers: {
          'token-auth': user.token,
          'Content-Type': 'application/json'
        }
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
          if (!data.ok) {
            localStorage.removeItem('user')

            navigate('/')
          }

          setIsVisible(false)
          bus()
        })
        .catch()
    }

    navigate('/')
  }

  return (
    <>
      {!isVisible && (
        <button onClick={handleVisible}>Agregar foto</button>
      )}

      {isVisible && (
        <>
          <form method="post" onSubmit={handleCreatePhoto}>
            <label htmlFor="image">Url imagen</label>
            <input type="text" id="image" />

            <input type="submit" value="Subir" />
          </form>

          <button onClick={handleCancel}>Cancelar</button>
        </>
      )}
    </>
  )
}

export default Add