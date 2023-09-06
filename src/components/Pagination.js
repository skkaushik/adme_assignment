import React, { useState, useEffect } from 'react';

const Pagination = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`);
    const data = await response.json();
    setImages([...images, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, [page]); 

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
    <div className="container">
      <div className="row">
      {images.map((image) => (
             <div  className="col-md-4 col-sm-6 mb-3" >
             <div className="card " style={{width:" 18rem; "}}>
             <img
            key={image.id}
            src={image.download_url}
            alt="error"
            className='card-height'
          />
             </div>
           </div>
          
        ))}
      </div>
    </div>
     
      {loading && <p>Loading...</p>}
      {!loading && (
       <div className='btn-div'>
         <button className="btn btn-warning butn"onClick={handleLoadMore} disabled={loading}>
          Load More
        </button>
       </div>
      )}
    </>
  );
};

export default Pagination;
