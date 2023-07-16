

const Notification = ({title, message, bus}) => {

  const handleClose = () => {
    bus()
  }

  return (
    <>
      <h4>{title}</h4>
      <p>{message}</p>
      <button onClick={handleClose}>Cerrar</button>
    </>
  )
}

export default Notification