import React, { useEffect, useState } from "react";
import axios from "axios";

const Sales = () => {
  const [data, setData] = useState([]);

  const FetchData = async () => {
    const response = await axios.get(
      "https://api.coincap.io/v2/assets/?limit=5"
    );
    setData(response.data.data);
  };
  useEffect(() => {
    FetchData();
  }, [FetchData]);
  console.log("Data", data);
  return (
    <div className="sales">
      {data.map((item) => {
        return (
          <>
            <p>{item.id}</p>
            <p>{item.priceUsd}</p>
          </>
        );
      })}
    </div>
  );
};

export default Sales;
