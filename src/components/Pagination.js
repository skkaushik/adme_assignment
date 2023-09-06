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
             <div  className="col-4">
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
        <button onClick={handleLoadMore} disabled={loading}>
          Load More
        </button>
      )}
    </>
  );
};

export default Pagination;
