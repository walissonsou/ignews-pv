import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselContainer = () => {
    return (
           <Carousel>

        <Carousel.Item interval={1000}>
        <img
            className= "d-block w-100"
            src ="/results/bio.png"

    alt = "First slide"
        />
        <Carousel.Caption>
        <h3> #TeamVictorRicarte</h3>
            <p>Motivação para treinar? Veja estas 4 dicas</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  interval={1000}>
                <img
            className="d-block w-100"
            src ="/results/bio1.png"

    alt = "Second slide"
        />

        <Carousel.Caption>
        <h3> #TeamVictorRicarte </h3>
            <p> Plano anual: quais as vantagens de contratar?</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  interval={1000} >
                <img
            className="d-block w-100"
            src ="/results/bio2.png"
    alt = "Third slide"
        />

        <Carousel.Caption>
        <h3>TeamVictorRicarte</h3>
            <p>Musculação ou cardio – qual é o melhor treino?</p>
                </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                
    )
    }

export default CarouselContainer;