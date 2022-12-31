import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

import one from       "../src/auther/img1.jpg"
import two from       "../src/auther/img2.jpg"
import three from     "../src/auther/img3.jpg"
import four from      "../src/auther/img4.jpg"
import five from      "../src/auther/img5.jpg"
import six from       "../src/auther/img6.jpg"
import seven from     "../src/auther/img7.jpg"
import eight from     "../src/auther/img8.jpg"
import nine from      "../src/auther/img9.jpg"
import ten from       "../src/auther/img10.jpg"
import eleven from    "../src/auther/img11.jpg"
import twelve from    "../src/auther/img12.jpg"
import thirteen from  "../src/auther/img13.jpg"
import fourteen from  "../src/auther/img14.jpg"
import fifteen from   "../src/auther/img15.jpg"
import sixteen from   "../src/auther/img16.jpg"
import seventeen from "../src/auther/img17.jpg"
import eighteen from  "../src/auther/img18.jpg"
import ninteen from   "../src/auther/img18.jpg"
import twenty from    "../src/auther/img18.jpg"


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
        
    
        <div className="bg-light"><NavLink to="" className="bookwelove">Author Alliance & MIT Press</NavLink></div>
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
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={ninteen} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={twenty} className="img-fluid" alt="..."/>
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