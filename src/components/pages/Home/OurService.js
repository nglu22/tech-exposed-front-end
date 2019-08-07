import React from 'react';
import Block from "../../HOC/Block";

const OurService = () => {
    return (
        <Block>
            <div className="home__our-service" >
                <div className="row heading">
                    <span className="heading-large">Our Service</span>
                    <span className="heading-medium">Bring the best thing to the world</span>
                </div>
                <div className="row body" >
                    <div className="col-md-6" >
                        <span className="heading-small" >Mobile <br/> Development</span>
                    </div>
                    <div className="col-md-6" >
                        <span className="heading-small" >Web <br/> Development</span>
                    </div>
                    <div className="col-md-6" >
                        <span className="heading-small" >Cloud Server</span>
                    </div>
                    <div className="col-md-6" >
                        <span className="heading-small" >Marketing Online</span>
                    </div>
                </div>
            </div>
        </Block>
    )
}

export default OurService;
