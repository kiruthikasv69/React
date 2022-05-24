import React from 'react';

import  {Footer } from '../components/Footer';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';

  
const Home = () => {
  const name = localStorage.getItem('name');
  return (
    <>
      <Header />
      <div className="hero">
        <div className="card bg-dark text-white border-0">
       
          <img src="https://static.vecteezy.com/system/resources/previews/003/266/832/non_2x/isometric-3d-online-book-store-concept-with-digital-library-books-free-vector.jpg" className="card-img" alt="background" />
          <div className="card-img-overlay d-flex  justify-content-center">
            <div className="container">
              <h6 className="card-title display-4 fw-bolder text-primary">
                Hi {name}....
              </h6>
              <p className="card-text text-black">LOGIN </p>
              <p className="card-text text-black">CLICK ON PRODUCT FOR NEW BOOKS             
              </p>
            </div>
          </div>
         
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
