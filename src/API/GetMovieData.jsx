
const getMovieData = async ({params}) => {
    const id = params.movieId;
    try {
       const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=ec8829d1`);
       const data = await res.json();
         return data;

    } catch (error) {
        console.log(error);
        
    }
}

export default getMovieData;
