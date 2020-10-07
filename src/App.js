import React, { useEffect } from "react";
import "./assets/App.css";
import CardContainer from "./components/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { requestApiData } from "./actions";

function App() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.data);

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
  }, []);

  return (
    <div>
      <div className="Header-wrapper">
        <img className="logo" src={require("./assets/images/logo.png")} alt="Marvel Logo"/>
        <div className="Header"></div>
      </div>
      <CardContainer />
    </div>
  );
}

export default App;
