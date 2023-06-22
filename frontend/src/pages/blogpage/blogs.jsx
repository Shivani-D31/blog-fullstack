import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Blogs() {
  const navigate = useNavigate();
  const [arr, setArr] = useState([]);
  const token = localStorage.getItem("token");
  console.log(token);
  const getData = async () => {
    if (token) {
      const data = await fetch(`${process.env.REACT_APP_BASE_URL}blogs`, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });
      if (!data.ok) {
        const err = await data.json();
        throw new Error(err);
      } else {
        const fullData = await data.json();
        setArr(fullData);
      }
    } else {
      alert("You are not logged in!");
      navigate("/login");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {arr.length > 0 ? (
        arr.map((el) => {
          return (
            <div key={el._id}>
              <h1>{el.title}</h1>
              <p>{el.blog}</p>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Blogs;
