import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    // Function to reverse a string
  //   const reverseString=(str)=> {
  //     let splitString = str.split("-");
  //     let reverseArray = splitString.reverse();
  //     let joinArray = reverseArray.join("-"); 
  //     return joinArray; 
  // }
    let { title, description, img, url, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div
          className="shadow align-items-between"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "0fr 1fr 0fr",
            height: "25rem",
            borderRadius: "2%",
            overflow: "hidden",
            backgroundColor:"rgba(245, 245, 255, 0.5)"
          }}
        > 
          <img
            style={{ objectFit: "cover", height: "12rem" }}
            src={img}
            alt=""
            className="card-img-top"
          /> 
          <div
            className="card-body" 
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          ><div className="d-flex px-2" style={{background: "rgba(0,0, 0, 0.5)",
          color: "white", gap:"0.15rem", fontSize:"0.78rem"
          }}>
          <span><small>{author?author:"Unknown"} on {(new Date(date).toGMTString()).slice(0,16) }</small></span><span><small>from</small></span>
          <span><small>{source.name}</small></span>
          </div>
           <div className="card-body-content">
           <h5
              className="card-title pb-1 px-2"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              <strong>{title}</strong>
            </h5>
            <p
              className="card-text px-2"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {description}
            </p>
           </div>

            <a
              href={url}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm"
              style={{backgroundColor : "rgba(0, 0, 0, 0.85)", color:"white"}}
            >
            Read More
            </a>  
          </div>
        </div>
      </div>
      // <div className="my-3">
      //   <div className="card shadow" style={{ width: "18rem" }}>
      //     <img src={img} alt="Img Not Found" className="card-img-top" />
      //     <div className="card-body">
      //       <h5 className="card-title">{title}</h5>
      //       <p className="card-text">{description}</p>
      //       <a href={url}  rel="noreferrer"  target="_blank" className="btn btn-sm btn-primary">
      //         Read More
      //       </a>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
