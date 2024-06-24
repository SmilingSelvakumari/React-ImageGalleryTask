function Bird(props) {
    return (
      <div className='birds'>
        <img className='image' src={props.image} alt="bird"></img>
        <p>{props.birdname}</p>
      </div>
    )
  }

  export default Bird