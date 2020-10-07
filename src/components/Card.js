import React, { useState, useEffect } from "react";
import "../assets/App.css";
import { useDispatch, useSelector } from "react-redux";
import { bookmark } from "../actions";


function Card(props) {
  const store = useSelector((state) => state.data);
  const dispatch = useDispatch();
  let [color, Setbgcolor] = useState(() => {
    if (props.data.bookmark === 1) {
      return "yellow";
    }
  });
  const [card,setCard]=useState(props.data)
  const imgextension = "/portrait_incredible.jpg";
 
  const bookmarkClick = () => {
    dispatch(bookmark(card));
    if (card.bookmark === 0) {
      Setbgcolor("yellow");
    } else {
      Setbgcolor("");
    }
  };
  useEffect(() => {
    // for the unbookmark to work
    store.forEach(item => {
      if (item.id === card.id) {
        setCard(item)
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store]);

  return (
    <div className="card">
      <img className="card-img" src={card.thumbnail.path + imgextension} alt="Marvel Superhero" />
        <div className="details">
        <p className="card-title">{card.name}</p>
        <i
          onClick={bookmarkClick}
          className="far fa-bookmark"
          style={{ color: color }}
        ></i>
      </div>
    </div>
  );
}

export default Card;
