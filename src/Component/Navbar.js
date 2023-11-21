import React from "react";
import image from "../assets/image.png";

export const Navbar = () => {
  return (
    <div>
      <div
        className="p-5 bg-image   "
        style={{
          backgroundImage:
            "url('https://6ammart-react.6amtech.com/_next/static/media/hero_background.dffabf5b.png')",
          height: 350,
          borderRadius: 20,
          margin: 70,
          backgroundColor: "rgb(178,226,205)",
        }}
      >
        <div style={{ textAlign: "left", marginLeft: "20", float: "left" }}>
          <div
            style={{
              color: "rgb(3, 157, 85)",
              fontSize: "3.3rem",
              fontWeight: "900",
            }}
          >
            Ton e-Shop !
          </div>
          <div
            style={{
              fontSize: "2.3rem",
              fontWeight: "400",
            }}
          >
            L'aventure commence ici.
          </div>
          <div
            style={{
              fontSize: "1.3rem",
              fontWeight: "200",
              padding: "3",
              color: "rgba(107, 114, 128, 0.5);",
            }}
          >
            <span>
              <a
                className="btn btn-outline-success btn-lg "
                href="#!"
                role="button"
              >
                Commander maintenant
              </a>
            </span>
          </div>
        </div>
        <div className="">
          <img src={image} height="300"></img>
        </div>
      </div>
      <h3 style={{ padding: "10" }}>
        Decouvrez
        <strong style={{ color: "rgb(3, 157, 85)" }}> Nos Top Produits</strong>
      </h3>
    </div>
  );
};
