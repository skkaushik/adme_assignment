import React, { useEffect, useState } from "react";
import axios from "axios";

const HeaderImg = () => {
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
      <section className="image-section">
      {/* {apiData && <img src={apiData[3].download_url}  alt="error in imgapi"/>} */}
        {apiData.map((item,index)=>{
          if(index===0){
return <img src={item.download_url} alt="error in imgapi" key={index}/>
 } })}

        
      </section>
    </>
  );
};

export default HeaderImg;
