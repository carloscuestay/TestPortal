import Title from '../../components/Title'
import Notification from '../../components/Notification'
import FormLogin from '../../components/FormLogin'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [isError, setIsError] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  const navigate = useNavigate()

  const title = 'Error Autenticación'
  const message = 'Error en las credenciale del usuario'


  useEffect(() => {
    let user = localStorage.getItem('user')

    if (user) {
      user = JSON.parse(user)

      setIsLogin(true)
      navigate('home')
    }

  })

  const isErrorAuth = () => {
    setIsError(true)
  }

  const closeError = () => {
    setIsError(false)
  }


  return (
    <>
      {!isLogin && (
        <>
          <Title title={'Login'} />
          {isError && (<Notification title={title} message={message} bus={closeError} />)}
          <FormLogin bus={isErrorAuth} />
        </>
      )}
    </>
  )
}


export default Login