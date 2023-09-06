import React, { useEffect, useState } from "react";
import axios from "axios";

const ImageList = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    handleApi();
  }, []);

  const handleApi = async () => {
    const result = await axios.get("https://picsum.photos/v2/list");
    console.log(result.data);
    setApiData(result.data);
  };

return (
  <>
    <div className="container">
      <div className="row">
        {apiData.map((item, index) => {
          if(index>14&& index<27){
          return (
            <div key={index} className="col-md-4 col-sm-6 mb-3">
              <div className="card " style={{width:" 18rem; "}}>
                <img src={item.download_url} className="card-img-top card-height" alt="..." />
              </div>
            </div>
          );
 } })}
      </div>
    </div>
  </>
);
      }

export default ImageList;
