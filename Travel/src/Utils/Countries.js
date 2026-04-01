const fetchcountries= async ()=>{
    try{
        let result= await fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population")
        let data=await result.json();
        console.log(data)
        return data

    }
    catch(err){
        console.log("Error in fetching...",err)
        return [];
    }
}

export default fetchcountries;