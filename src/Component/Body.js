import React from "react";

export default function Body(){
    return (<div>
        <div
          className="p-5 text-center "
          style={{
            backgroundImage:
              "url('https://www.2020cheapjordans.com/wp-content/uploads/2018/11/Kobe-Bryant-Nike-Kobe-AD-Navy-Blue-Red-White-3.jpeg')",
            height: 500,
          }}
        >
          <div
            className="mask"
            // style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-black">
                <h1 className="mb-4 ">Shoes Place</h1>
                <a 
                  className="btn btn-outline-success btn-lg"
                  href="#!"
                  role="button"
                >
                  Commander
                </a>
              </div>
            </div>
          </div>
        </div>
        <h3 className="mt-4 mb-4">Nos Top Produits</h3>
    </div>);
}