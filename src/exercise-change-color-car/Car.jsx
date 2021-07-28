import React, { Component } from 'react'
import colorCars from './arrayFeatures.json'
import wheelsCars from './wheels.json'


export default class Car extends Component {
    state = {
        id: 1,
        title: "Crystal Black",
        type: "Pearl",
        img: "./images/icons/icon-black.jpg",
        srcImg: "images-black/images-black-1/",
        color: "Black",
        price: "19,550",
        engineType: "In-Line 4-Cylinder",
        displacement: "1996 cc",
        horsepower: "158 @ 6500 rpm",
        torque: "138 lb-ft @ 4200 rpm",
        redline: "6700 rpm",
        wheelId: 0,
        wheels: [
            {
                idWheel: 1,
                srcImg: "images-black/images-black-1/"
            },
            {
                idWheel: 2,
                srcImg: "images-black/images-black-2/"
            },
            {
                idWheel: 3,
                srcImg: "images-black/images-black-3/"
            }
        ],
        imgShow: "images-black/images-black-1/civic-1.jpg"
    }

    handleChangeColor = (index) => {
        const { id, title, type, img, srcImg, color, price, engineType, displacement, horsepower, torque, redline, wheels } = colorCars[index];

        this.setState({
            id,
            title,
            type,
            img,
            srcImg,
            color,
            price,
            engineType,
            displacement,
            horsepower,
            torque,
            redline,
            wheels,
            imgShow: wheels[this.state.wheelId].srcImg + 'civic-1.jpg',
        }, () => { console.log() })
    }

    handleChangeWheel = (indexWheels) => {

        this.setState({
            wheelId: indexWheels,
            imgShow: this.state.wheels[indexWheels].srcImg + 'civic-1.jpg',
        })
    }
    render() {

        const { color, price, engineType, displacement, horsepower, torque, redline, imgShow } = this.state;
        return (
            <div className="container-fluid " id="cars">
                <div className="row">
                    <div className="col-8">
                        <div className="card">                                                   
                          
                            <img className="card-img-top" src={imgShow} alt="" width="100%" />
                            <div className="card-body">
                                <h4 className="card-title">See More LX Features</h4>
                                <div className="card-text">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td>Color</td>
                                                <td>{color}</td>
                                            </tr>
                                            <tr>
                                                <td>Price</td>
                                                <td>${price}</td>
                                            </tr>
                                            <tr>
                                                <td>EngineType</td>
                                                <td>{engineType}</td>
                                            </tr>
                                            <tr>
                                                <td>Displacement</td>
                                                <td>{displacement}</td>
                                            </tr>
                                            <tr>
                                                <td>Horsepower (SAE net)</td>
                                                <td>{horsepower}</td>
                                            </tr>
                                            <tr>
                                                <td>Torque (SAE net)</td>
                                                <td>{torque}</td>
                                            </tr>
                                            <tr>
                                                <td>Redline</td>
                                                <td>{redline}</td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="changeCar">
                            <div className="colorCar">
                                <h3>Exterior Color</h3>
                                <ul >
                                    <li onClick={() => this.handleChangeColor('0')}>
                                        <div className={`row colorCarItem ${this.state.id === 1 && `active`}`}>
                                            <div className="col-2">
                                                <img src="./icons/icon-black.jpg" alt="" width="100%" />
                                            </div>
                                            <div className="col-10">
                                                <h4>Crystal Black</h4>
                                                <p>Pearl</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li onClick={() => this.handleChangeColor('1')}>
                                        <div className={`row colorCarItem ${this.state.id === 2 && `active`}`}>
                                            <div className="col-2">
                                                <img src="./icons/icon-steel.jpg" alt="" width="100%" />
                                            </div>
                                            <div className="col-10">
                                                <h4>Modern Steal</h4>
                                                <p>Metallic</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li onClick={() => this.handleChangeColor('2')}>
                                        <div className={`row colorCarItem ${this.state.id === 3 && `active`}`}>
                                            <div className="col-2">
                                                <img src="./icons/icon-silver.jpg" alt="" width="100%" />
                                            </div>
                                            <div className="col-10">
                                                <h4>Lunar Silver</h4>
                                                <p>Metallic</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li onClick={() => this.handleChangeColor('3')}>
                                        <div className={`row colorCarItem ${this.state.id === 4 && `active`}`}>
                                            <div className="col-2">
                                                <img src="./icons/icon-red.jpg" alt="" width="100%" />
                                            </div>
                                            <div className="col-10">
                                                <h4>Rallye Red</h4>
                                                <p>Metallic</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="wheels">
                                <h3>Wheels</h3>
                                <ul>
                                    {wheelsCars.map((wheel, index) => {
                                        return (
                                            <li key={index} onClick={() => this.handleChangeWheel(index)}>
                                                <div className={`row colorCarItem ${this.state.wheelId === index && `active`}`}>
                                                    <div className="col-2">
                                                        <img src={wheel.img} alt="" width="100%" />
                                                    </div>
                                                    <div className="col-10">
                                                        <h4>{wheel.title}</h4>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
