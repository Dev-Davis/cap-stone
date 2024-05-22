import React from "react";
import Comments from "../Comments/Comments";

function HatSectionCard(props) {
  const hats = props.hats;

  return (
    <div className="col hat-card">
      <div className="text-center">
        <div className="card" ref={hats.id}>
          {/* <div className="hat-card"> */}
          <div className="card-body">
            {/* <Link to={singleLink}><img src={hats.imageUrl} className="card-img-top" alt="Pic of a hat" /></Link> */}
            <h3 className="card-title hat-name">{hats.name}</h3>
            <img className={hats.className} src={hats.img} alt={hats.alt} />
            <h5 className="card-text hat-type">{hats.type}</h5>
            <h5 className="card-text hat-color">{hats.mainColor}</h5>
            <div className="col-10 offset-1">
            <p className="card-text hat-desc">{hats.description}</p>
          </div>
        </div>
        <Comments />
      </div>
    </div>
    </div>

    // <div className="hat-card">
    //   <div className="card-body">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col">
    //           <h4 className="hat-name">{hats.name}</h4>
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col">
    //           <img className={hats.className} src={hats.img} alt={hats.alt} />
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col">
    //           <p className="hat-desc">{hats.description}</p>
    //         </div>
    //       </div>
    //       <hr />
    //       <Comments />
    //     </div>
    //   </div>
    // </div>
  );
}

export default HatSectionCard;
