import React, { useEffect, useState } from "react";
import "../assets/App.css";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { updateData } from "../actions";
import Pagination from "./Pagination";

function CardContainer() {
  const store = useSelector((state) => state.data);
  const [search, setSearch] = useState("");
  const [flag, setFlag] = useState(false);
  const [fetchedData] = useState(JSON.parse(localStorage.getItem("data")));
  const dispatch = useDispatch();
  const [filteredNames, setFilteredNames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [CardsPerPage] = useState(20);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // wait for the store to populate
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (store) {
      setFlag(true);
    }
  });

  // get the data from local storage when component renders
  useEffect(() => {
    if (flag) {
      if (fetchedData.length !== 0) {
        dispatch(updateData(fetchedData));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

  useEffect(() => {
    // fetch data from LocalStorage
    if (search === "") {
      // extract the bookmarked ones
      let temp = store.filter((item) => item.bookmark === 1);
      if (temp.length === 0) {
        setFilteredNames(false);
      } else {
        setFilteredNames(temp);
        setCurrentPage(1);
      }
    } else {
      setFilteredNames(
        store.filter((item) => {
          return item.name.toLowerCase().includes(search.toLowerCase());
        })
      );
    }
  }, [search, store]);

  const indexOfLastCard = currentPage * CardsPerPage;
  const indexOfFirstCard = indexOfLastCard - CardsPerPage;
  return (
    <>
      <div style={{ padding: 20 }}>
        <div className="search_box">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {filteredNames ? (
          <div>
            <div className="wrapper">
              {filteredNames
                .slice(indexOfFirstCard, indexOfLastCard)
                .map((post, index) => {
                  return <Card data={post} key={post.id} />;
                })}
            </div>
            <Pagination
              cardsPerPage={CardsPerPage}
              totalCards={filteredNames.length}
              paginate={paginate}
            />
          </div>
        ) : (
          <img
            className="search_img"
            src={require("../assets/images/search4.png")}
            alt="search for a character.."
          />
        )}
      </div>
    </>
  );
}

export default CardContainer;
