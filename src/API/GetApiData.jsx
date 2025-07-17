
const getApidata = async () => {
    try {
       const res = await fetch("http://www.omdbapi.com/?s=avengers&apikey=ec8829d1");
       const data = res.json();
         return data;

    } catch (error) {
        console.log(error);
        
    }
}

export default getApidata;
