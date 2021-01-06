import React from 'react';

const GalleryGridImage = (props) => {
    return (
        <figure className={"gallery__item gallery__item--" + props.number}>
            <img src={props.children} alt={"Gallery "+props.number} className="gallery__img" />
        </figure>
    )
}

export default GalleryGridImage