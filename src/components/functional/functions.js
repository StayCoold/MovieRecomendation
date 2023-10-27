import React from "react";


// Una funcion que modifique el status una sola vez con todas las variables ya cargadas
export async function modifyStatus(setRecomended) {

  let movie = {};

  movie = await promesa();
  movie.video = await videoAsync(movie.id);

  if(movie){
    console.log(movie)
    return setRecomended({
      id: movie.id,
      title: movie.title,
      sinopsis: movie.sinopsis,
      portait: movie.portait,
      video: movie.video
    })
  }else{
    return  console.log('algo salio mal')
  }
}

export function verifyFetchs() {}


//Esta viene de recomendation
async function videoAsync(id_video) {
  const acces = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTA3MmJhZWUyMjQzZDkyN2E0YjY0ZGU1ZTg0MTc0MCIsInN1YiI6IjY1MzhlMjM5MGZiMTdmMDBhYmMxMjE0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ikWB4djK8JzJFWwq0y1XFkAeqM9mLBRnl3oE2DD4D6E",
    },
  };

    const respuestaVideo = await fetch(
    `https://api.themoviedb.org/3/movie/${id_video}/videos?language=es`,
    acces
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));

    if(respuestaVideo.results[0]){
      return {key: respuestaVideo.results[0].key, site: respuestaVideo.results[0].site};
    }else{
      console.log('no hay videos en español')
      const respuestaVideoIngles = await fetch(`https://api.themoviedb.org/3/movie/${id_video}/videos?language=en-US`,
        acces
      )
        .then((res) => res.json())
        .catch((error) => console.log(error));

        if(respuestaVideoIngles){
          console.log(respuestaVideoIngles.results[0].key)
          return {key: respuestaVideoIngles.results[0].key, site: respuestaVideoIngles.results[0].site}
        }else{
          return 'No hay trailer disponible'
        }
    }

}


// Esta viene de PrincipalFilter
// De esta funcion obtenemos todos los datos de una pelicula excepto el video.key

  async function promesa(){

    // variable con los datos de entrada a la DB

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTA3MmJhZWUyMjQzZDkyN2E0YjY0ZGU1ZTg0MTc0MCIsInN1YiI6IjY1MzhlMjM5MGZiMTdmMDBhYmMxMjE0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ikWB4djK8JzJFWwq0y1XFkAeqM9mLBRnl3oE2DD4D6E'
      }
    };

    const random = Math.floor(Math.random()*19);
    const randomPage = Math.floor(Math.random()*19)

    const respuesta = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=es&page=${randomPage > 0 ? randomPage : 1}&region=es`, options)
      .then(response => response.json())
      .catch(err => console.error(err));

      console.log(respuesta.results[random].id);

      return( 
      {
        id: respuesta.results[random].id,
        title: respuesta.results[random].title,
        sinopsis: respuesta.results[random].overview,
        portait:respuesta.results[random].poster_path});
      }