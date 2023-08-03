import React from 'react'
import {  Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data';
const Home = () => {
  return (
    <>
    <Container class1="home-wrapper-1 py-5">
    <div className="row">
            <div className="col-12">
              <div className="main-banner position-relative ">
                <img
                  src="images/main-banner-1.png"
                  className="img-fluid rounded-3 w-100"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h5>iPhone 14 Pro.</h5>
                  <p>Starting at ₹1,32,000.00</p>
                  <Link to="" className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            
          </div>
    </Container>
    <Container class1="famous-wrapper py-5 home-wrapper-2">
    <div className='row'>
          
            <div className='col-3'>
              <div className='famous-card-01 position-relative'>
                <img src='images/famous-01.png'className='img-fluid' alt='famous' />
                <div className='famous-content-01 position-absolute'>
                <h5>Studio Display</h5>
                <h6>iPhone 14 Pro Max</h6>
                <p>1TB Deep Purple</p>
                </div>
  
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card-01 position-relative'>
                <img src='images/famous-02.png'className='img-fluid' alt='famous' />
                <div className='famous-content-01 position-absolute'>
                <h5>Smartphones</h5>
                <h6>MacBook Pro 14 </h6>
                <p>M2 Max chip 12C CPU/38C GPU/32GB/1TB</p>
                </div>
  
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card-01 position-relative'>
                <img src='images/famous-03.png'className='img-fluid' alt='famous' />
                <div className='famous-content-01 position-absolute'>
                <h5>PlayStation 5</h5>
                <h6> Sony DualSense Edge </h6>
                <p>From ₹4000or ₹499/mo. for 24 mo</p>
                </div>
  
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/famous.png' className='img-fluid' alt='famous' />
                <div className='famous-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Apple Watch Series 8</h6>
                <p>From ₹3999or ₹160/mo. for 24 mo</p>
                </div>
  
              </div>
            </div>
           
            
          </div>

    </Container>
    <Container class1="home-wrapper-2 py-5"> 
    <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Laptop</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/laptop.jpg" alt="" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>iPhone</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Laptop</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/laptop.jpg" alt="" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>iPhone</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>

    </Container>
    <Container class1="featured-wrapper py-5 home-wrapper-2">
    <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
           
          </div>

    </Container>
    <Container class1="famous-wrapper py-5 home-wrapper-2">
    <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/famous.png' className='img-fluid' alt='famous' />
                <div className='famous-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Apple Watch Series 8</h6>
                <p>From ₹399or ₹16.62/mo. for 24 mo</p>
                </div>
  
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card-01 position-relative'>
                <img src='images/famous-01.png'className='img-fluid' alt='famous' />
                <div className='famous-content-01 position-absolute'>
                <h5>Studio Display</h5>
                <h6>iPhone 14 Pro Max</h6>
                <p>1TB Deep Purple</p>
                </div>
  
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card-01 position-relative'>
                <img src='images/famous-02.png'className='img-fluid' alt='famous' />
                <div className='famous-content-01 position-absolute'>
                <h5>Smartphones</h5>
                <h6>MacBook Pro 14 </h6>
                <p>M2 Max chip 12C CPU/38C GPU/32GB/1TB</p>
                </div>
  
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card-01 position-relative'>
                <img src='images/famous-03.png'className='img-fluid' alt='famous' />
                <div className='famous-content-01 position-absolute'>
                <h5>PlayStation 5</h5>
                <h6> Sony DualSense Edge </h6>
                <p>From ₹399or ₹16.62/mo. for 24 mo</p>
                </div>
  
              </div>
            </div>
           
            
          </div>

    </Container>
    <Container class1="special-wrapper py-5 home-wrapper-2">
    <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
            <div className='row'>
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>

    </Container>
    <Container class1="popular-wrapper py-5 home-wrapper-2">
    <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>        
          </div>
          <div className='row'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

    </Container>
    <Container class1="marque-wrapper home-wrapper-2 py-5">
    <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-01.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/nike-logo.jpg' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/fila_logo.jpg' alt='brand' />
                  </div >
                  <div className='mx-4 w-25'>
                    <img src='images/vans.jpg' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/Screenshot.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-06.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-07.png' alt='brand' />
                  </div>

                </Marquee>
              </div>
            </div>
          </div>

    </Container>
    <Container class1="blog-wrapper py-5 home-wrapper-2">
    <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>

          </div>
          <div className='row'>
            <div className='col-3'>
            <BlogCard />
          
            </div>
            <div className='col-3'>
            <BlogCard />
          
            </div>
            <div className='col-3'>
            <BlogCard />
          
            </div>
            <div className='col-3'>
            <BlogCard />
          
            </div>
          </div>

    </Container>

    </>
  );

};

export default Home