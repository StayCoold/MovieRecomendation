import './styles/Recomendation.css'

export const Recomendation = (props) => {

  const vimeo = "https://player.vimeo.com/video/";
  const youtube = "https://www.youtube.com/embed/";

  if(props.recomended.id){
    console.log(props.recomended.video);
    return(  
      <div className="recomendation-container">
        <div className="sub-container">
          <h2 className="recomendation-title">Esta es nuestra recomendación: {props.recomended.title}</h2>
          <img className="portait" src={`https://image.tmdb.org/t/p/w500/${props.recomended.portait}`} /><br />
          <strong>Sinopsis:</strong><span>{props.recomended.sinopsis}</span>
          <div className='video-container'>
          <iframe
            src={`${props.recomended.video.site == "YouTube" ? youtube : vimeo}${props.recomended.video.key}`}
          >
            
          </iframe>
          </div>
        </div>
      </div>
    );

  }

}