import style from './post.module.css'

const Post = ({urlImg}) => {

  return (
    <article>
      <div className={style.photo}>
        <img src={urlImg} alt="" />
      </div>
      <div className="iconos">
        <p><span>Fotos disponibles</span></p>
      </div>
    </article>
  )
}

export default Post