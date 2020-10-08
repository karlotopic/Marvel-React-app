import axios from "axios";
// import items from "./items";

export const fetchData = async () => {
  try {
    const res = await axios.get(
      "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=9e2e4dbcfb37842ed455ebd9895c9c49&hash=faabbfc8fa86c4fc70a42b06af985d6d&limit=100"
      // &limit=100
    );

    let temp= res.data.data.results.map((item)=>{
      return(
        {
          ...item,
          bookmark:0
        }
      )
    })
    
    return temp;
  } catch (e) {
    console.log(e);
  }
};
