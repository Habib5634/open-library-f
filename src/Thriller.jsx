import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

import one from       "../src/thriller/img1.jpg"
import two from       "../src/thriller/img2.jpg"
import three from     "../src/thriller/img3.jpg"
import four from      "../src/thriller/img4.jpg"
import five from      "../src/thriller/img5.jpg"
import six from       "../src/thriller/img6.jpg"
import seven from     "../src/thriller/img7.jpg"
import eight from     "../src/thriller/img8.jpg"
import nine from      "../src/thriller/img9.jpg"
import ten from       "../src/thriller/img10.jpg"
import eleven from    "../src/thriller/img11.jpg"
import twelve from    "../src/thriller/img12.jpg"
import thirteen from  "../src/thriller/img13.jpg"
import fourteen from  "../src/thriller/img14.jpg"
import fifteen from   "../src/thriller/img15.jpg"
import sixteen from   "../src/thriller/img16.jpg"
import seventeen from "../src/thriller/img17.jpg"
import eighteen from  "../src/thriller/img18.jpg"


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "#5DADE2", fontSize:"30px",color:"black" ,borderRadius:"50%" ,tabSize:"30px"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,background: "#5DADE2", fontSize:"30px",color:"black" ,borderRadius:"50%" ,tabSize:"30px"}}
        onClick={onClick}
      />
    );
  }

export default class CenterMode extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="bg">
        
<div className="container-fluid">
<div className="row">
    <div className="col-9 mx-auto border-start border-end  border-success p-2 mb-2 border-opacity-50">
        
    
        <div className="bg-light"><NavLink to="" className="bookwelove">Thriller</NavLink></div>
        <Slider {...settings} id="btnnn">
          <div>
            <h3 className="p-2">
            <div className="card" >
                 <img src={one} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
            <h3 className="p-2">
            <div className="card" >
                 <img src={two} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={three} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={four} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={five} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={six} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={seven} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={eight} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={nine} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={ten} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={eleven} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={twelve} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={thirteen} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={fourteen} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={fifteen} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={sixteen} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={seventeen} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={eighteen} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          
          
        </Slider>
        </div>
</div>
</div>
      </div>
    );
  }
}