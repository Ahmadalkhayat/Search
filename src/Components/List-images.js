import React from "react";
import "./List-image.css"
const ListImages =(props) => {
const images= props.images.map(image =>{
return < img alt="" key={image.id} src={image.urls.small} />;
});
    return <div className="list-image"> {images}</div>
}

export default ListImages 