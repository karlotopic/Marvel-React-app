import React, { useEffect, useState } from "react";
import "./assets/App.css";
import CardContainer from "./components/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { requestApiData } from "./actions";

function App() {
  const dispatch = useDispatch();
  const store=useSelector((state) => state.data)
  const [flag,setFlag]=useState(false)

  // store the bookmarked cards on refresh or after leaving the page
  useEffect(() => {
    window.onbeforeunload = function (event) {
      let temp = [];
      store.forEach((item) => {
        if (item.bookmark === 1) {
          temp.push(item);
        }
      });
      localStorage.setItem("data", JSON.stringify(temp));
    };
  });

  useEffect(() => {
    dispatch(requestApiData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let temp= JSON.parse(localStorage.getItem("data"))
    if(temp==undefined){
      localStorage.setItem("data", JSON.stringify([]));
    }

  }, []);

  useEffect(()=>{
    if(store.length!==0){
        setFlag(true)
    }
  },[store])

  return (
    <>
    { flag ?(
    <div>
      <div className="Header-wrapper">
        <img className="logo" src={require("./assets/images/logo.png")} alt="Marvel Logo"/>
        <div className="Header"></div>
      </div>
      <CardContainer />
    </div>
    ):(
       <div style={{padding:40}}><div className="loader"></div></div>
    )


    }
    </>
  );
}

export default App;
