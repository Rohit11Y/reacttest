import React from 'react';
import { Link } from 'react-router-dom';

const Tabhome = () => {
  return (
    <div>

    <div id="slider-home" class="carousel slide" data-ride="carousel" data-pause="false">
    <ul class="carousel-indicators">
        <li data-target="#slider-home" data-slide-to="0" class="active"></li>
        <li data-target="#slider-home" data-slide-to="1"></li>
        <li data-target="#slider-home" data-slide-to="2"></li>
        <li data-target="#slider-home" data-slide-to="3"></li>
    </ul>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="https://i.ibb.co/JRrHmhv/shanghai.jpg" alt="Los Angeles"/>
            <div class="carousel-caption">
                <h3>discover a new you!</h3>
                <p>Transform your look today with our special offers!</p>
                <Link class="btn" href="#">Make an appointment</Link>
            </div>
        </div>
        <div class="carousel-item">
            <img src="https://i.ibb.co/JRrHmhv/shanghai.jpg" alt="Chicago"/>
            <div class="carousel-caption">
                <h3>discover a new you!</h3>
                <p>Transform your look today with our special offers!</p>
                <Link class="btn" href="#">Make an appointment</Link>
            </div>
        </div>
        <div class="carousel-item">
            <img src="https://i.ibb.co/JRrHmhv/shanghai.jpg" alt="New York"/>
            <div class="carousel-caption">
                <h3>discover a new you!</h3>
                <p>Transform your look today with our special offers!</p>
                <Link class="btn" href="#">Make an appointment</Link>
            </div>
        </div>
        <div class="carousel-item">
            <img src="https://i.ibb.co/JRrHmhv/shanghai.jpg" alt="New York"/>
            <div class="carousel-caption">
                <h3>discover a new you!</h3>
                <p>Transform your look today with our special offers!</p>
                <Link class="btn" href="#">Make an appointment</Link>
            </div>
        </div>
    </div>
         {/* <Link class="carousel-control-prev" href="#slider-home" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </Link>
    <Link class="carousel-control-next" href="#slider-home" data-slide="next">
        <span class="carousel-control-next-icon"></span>
  </Link> */} 
</div>

    
    </div>
  )
}

export default Tabhome
    
