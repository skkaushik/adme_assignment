import React, { useState, useEffect } from 'react';

const Pagination = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const loadImages = async (page) => {
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`);
      const data = await response.json();
      setImages(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    loadImages(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


    
  return (
    <div>
      
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
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
          <div className="pagination">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <button onClick={handleNextPage}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};


    
 

export default Pagination;
