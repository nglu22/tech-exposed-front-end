import React from 'react';
import Block from "../../HOC/Block";
const LandingPage = () => {
    return (
        <Block>
            <div className="home__landing-page" >
                <div className="row" >
                    <div className="col-md-4 col-sm-6" >
                         <span className="heading-large" >
                             We Build <br/>
                             Creative Design
                         </span>
                         <p>
                             It is a long established fact that a reader will be 
                             distracted by the readable content of a page 
                             uncover many web sites still in their infancy. 
                         </p>
                        <button className="btn" >See more &#8594;</button>
                    </div>
                    <div className="col-md-6 col-sm-6" >
                       
                    </div>
                </div>
            </div>
        </Block>
    )
}

export default LandingPage
