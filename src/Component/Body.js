import React from "react";

export default function Body(){
    return (<div>
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://th.bing.com/th/id/OIP.RSf4kRzIDS318woa_uRDXwHaHa?pid=ImgDet&w=732&h=732&rs=1')",
            height: 400,
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">Shoes Place</h1>
                <h4 className="mb-3">Kay meu jaay leu</h4>
                <a
                  className="btn btn-outline-light btn-lg"
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