import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Header"
import Add from '../../components/Add'
import Reel from "../../components/Reel"
import Post from "../../components/Post"


const Home = () => {

  const [photos, setPhotos] = useState([])

  const navigate = useNavigate()

  const params = useParams()

  const id_user_search = params.id_user

  useEffect(() => {

    let user = localStorage.getItem('user')

    if (user) {
      user = JSON.parse(user)
      
      const id = id_user_search ? id_user_search : user.user_id

      fetch(`http://localhost:9000/api/photo/get_by_user/${id}`, {
        headers: {
          'token-auth': user.token
        }
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
          if (!data.ok) {
            localStorage.removeItem('user')

            navigate('/')
          }

          setPhotos(data.photos)
        })
        .catch(error => console.log('error', error.message))

    } else {
      navigate('/')
    }

  }, [params])


  const updatePhotos = () => {

    console.log('me ejecutaron');
    let user = localStorage.getItem('user')

    if (user) {
      user = JSON.parse(user)
      fetch(`http://localhost:9000/api/photo/get_by_user/${user.user_id}`, {
        headers: {
          'token-auth': user.token
        }
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
          if (!data.ok) {
            localStorage.removeItem('user')

            navigate('/')
          }

          setPhotos(data.photos)
        })
        .catch(error => console.log('error', error.message))

    } else {
      navigate('/')
    }
  }

  return (
    <>
      <Header />
      {!id_user_search && (
        <Add bus={updatePhotos} />
      )}
      <Reel>
        {photos.map(photo => <Post key={photo._id} urlImg={photo.url} />)}
      </Reel>
    </>
  )
}

export default Home