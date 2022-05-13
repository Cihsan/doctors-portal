import React from 'react';

const CardMiniInfo = ({pic,title,text,bg}) => {
    return (
        <div>
            <div className={`card lg:card-side bg-base-100 shadow-xl p-5 ${bg}`}>
                <figure className=''><img src={pic} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default CardMiniInfo;