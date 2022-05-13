import React from 'react';

const Services = ({ pic, title, text, bg }) => {
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={pic} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{title}</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default Services;