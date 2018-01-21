import React from 'react';
import axios from 'axios';
import Radium from 'radium';
import { Route } from 'react-router-dom';
import { Container, Row, Col, Collapse, Carousel, CarouselItem, CarouselCaption, } from 'reactstrap';
import Sidebar from "./Sidebar";
import './Dashboard.css';
import { createStore } from 'redux';

const styles = {
    jumobotron: {
        display: 'inline-block',
        align: 'right',
        padding: '15px',
        backgroundColor: "#444444"
    },
    sideLinks: {
        color: '#4DB1CF',
        "hover": {
            color: '#586EC4',
            textDecoration: 'underline'
        }
    },
    btnList: {
        display: 'inline'
    }
}

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
        this.state = {
            coinmarketcap: [],
            sliderImages: [],
            activeIndex: 0,
            collapse: true
        }

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    componentDidMount() {
        try {
            axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=5')
                .then(results => {
                    this.setState({
                        coinmarketcap:  results.data,
                    })
                    const tmpSlider = [];
                    this.state.coinmarketcap.forEach((image, i) => {
                        tmpSlider.push('http://localhost:3000/img/' + (i + 1) + '.jpg');
                    })
                    this.setState({
                        sliderImages: tmpSlider
                    })
                })
            } catch(error) {
                console.error(error)
            }
    }
    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.state.coinmarketcap.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.coinmarketcap.length  - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    coinHead(rank, name, price) {
        return '' + this.rank + this.name + "$" + this.price;
    }

    carouselCoins(coins) {
        const array = [];
        coins.forEach(coin => {
            let tmp = {
                key: coin.rank,
                src: this.state.sliderImages[coin.rank - 1],
                caption: '#' + coin.rank + ' - ' + coin.name + ' $' + coin.price_usd,
                altText: coin.price_usd,
            }
            array.push(tmp);
        })
        return array;
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }


    render() {
        return (
            <Container className="container">
                <Row>
                    <Col md="3">
                        <Sidebar props={ styles } />
                    </Col>
                    <Col md="9">
                        <center>
                        <h3 onClick={this.toggle} style={{ color: 'black', textDecoration: 'underline' }}>Top 5 CryptoCurrencies Today!</h3>
                        <Collapse isOpen={this.state.collapse}>
                            <hr />
                            <Carousel activeIndex={this.state.activeIndex} next={this.next} previous={this.previous}>
                                {this.state.coinmarketcap.map(coin => (
                                    <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={coin.total_supply}>
                                        <img height="500px" width="800px" src={this.state.sliderImages[coin.rank - 1]} alt={coin.symbol} />
                                        <CarouselCaption captionText={' $' + coin.price_usd} captionHeader={ '#' + coin.rank + ' ' + coin.name } />
                                    </CarouselItem>
                                ))}
                            </Carousel>
                            <hr className="my-2" />
                        </Collapse>
                        </center>
                    </Col>
                </Row>
                    <Row>
                        <Col>

                        </Col>
                    </Row>
            </Container >
        )};
    }
export default Radium(Dashboard);