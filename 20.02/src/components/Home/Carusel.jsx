import React, { Component } from 'react';
import varsImg from './../../../assets/images/section/carusel/hair.jpg';
import matImg from './../../../assets/images/section/carusel/nails.jpg';
import dimImg from './../../../assets/images/section/carusel/make up.jpg';
import aylImg from './../../../assets/images/section/carusel/spa.jpg';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators,
        CarouselCaption} from 'reactstrap';

const items = [
    {
        id: 1,
        altText: 'Վարսահարդար',
        caption: 'Վարսահարդար',
        Img : varsImg
    },
    {
        id: 2,
        altText: 'Մատնահարդար',
        caption: 'Մատնահարդար',
        Img : matImg
    },
    {
        id: 3,
        altText: 'Դիմահարդարում',
        caption: 'Դիմահարդարում',
        Img : dimImg
    },
    {
        id: 4,
        altText: 'Այլ ծառայություններ',
        caption: 'Այլ ծառայություններ',
        Img : aylImg
    }
];

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    className="custom-tag"
                    tag="div"
                    key={item.id}
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    >
                    <img src = {item.Img} alt = {item.altText} width = "100%" />
                    <CarouselCaption 
                        className="text-danger" 
                        captionText={item.caption}
                        captionHeader=  {item.caption} 
                        />
                </CarouselItem>
            );
        });

        return (
            <div>
                <style>
                    {
                        `.custom-tag {
                                max-width: 100%;
                                height: 90vh;
                        }`
                    }
                </style>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    >
                    <CarouselIndicators 
                        items={items} 
                        activeIndex={activeIndex} 
                        onClickHandler={this.goToIndex} 
                        />
                    {slides}
                    <CarouselControl 
                        direction="prev" 
                        directionText="Previous" 
                        onClickHandler={this.previous} 
                        />
                    <CarouselControl
                        direction="next"
                        directionText="Next" 
                        onClickHandler={this.next}
                        />
                </Carousel>
            </div>
        );
    }
}

export default Example;