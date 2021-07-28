import React, { Component } from 'react'
import dataGlasses from './dataGlasses.json'


export default class Glasses extends Component {

    state = {
        id: '',
        img: '',
        name: '',
        desc: '',

    }

    handleChangeGlasses = (id, img, name, desc) => {
        this.setState({
            id,
            img,
            name,
            desc,
        })
    }

    renderGlass() {
        return dataGlasses.map(glasses => {
            const { id, name, url, desc } = glasses;
            return (
                <div className="col-2 glassesItem" key={id} onClick={() => this.handleChangeGlasses(id,`v${id}.png`, name, desc)}>
                    <img src={url} alt="" width="100%" className={`${id === this.state.id && "active"} `} />
                </div>
            )
        })
    }


    render() {
        const { img, name, desc } = this.state;
        return (
            <div className="container-fluid" id="tryGlassesContent">
                <h1>TRY GLASSES APP ONLINE</h1>
                <div className="model row">
                    <div className="col-2 " >
                        <div className="modal__content">
                            <img src="./glassesImage/model.jpg" alt="" className="tryModal"/>
                            <img src={`./glassesImage/${img}`} alt="" className="tryGlasses"  />
                            <div className="modalDesc">
                                <h3>{name}</h3>
                                <p>{desc}</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-2">
                        <img src="./glassesImage/model.jpg" alt="" width="100%" />                        
                    </div>
                </div>
                <div className="glasses row">
                    {this.renderGlass()}
                </div>

            </div>
        )
    }
}
