import React, { useEffect, useState } from "react";

function FetchApi() {
  const [data, setData] = useState([]);
  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };
  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div>
      <h1> Fetch Api</h1>
      {/* <button onClick={apiGet}>Fetching</button> */}
      <br />

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.userId}
              {item.title}
              {/* {item.body} */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FetchApi;
