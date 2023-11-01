import React from "react";
import './card.css';

const Card = ({name, serie}) => {
    return (
        <>
            <div className="card">
                <h3>Hello i'm {name}!</h3>
                <p>I recommend you watch: {serie}</p>    
            </div>
        </>
        
    );
};

export default Card;