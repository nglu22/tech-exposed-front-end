import React from 'react';
import Block from "../../HOC/Block";
const Comments = () => {
    return (
        <Block>
            <div className="home__comments" >
                <div className="row" >
                    <div className="col-md-6 text" >
                        <span className="heading-large" >
                            They Talk about us
                       </span>
                       <p>
                            It is a long established fact that a reader will be 
                            distracted by the readable content of a page 
                            uncover many web sites still in their infancy. 
                       </p>
                    </div>
                    <div className="col-md-6 image" >
                        <img src="./me.jpeg" alt="me" /><br /><br />
                        <span className="heading-small">
                            Mr. Kureel
                        </span>
                        <p>
                            Developer at Tech Exposed
                        </p>
                    </div>
                </div>
            </div>
        </Block>
    )
}

export default Comments;
