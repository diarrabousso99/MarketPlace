import React from 'react'

export const Apropos = () => {
  return (
    <div className="row">
        <div className="col-md-4 xs-mb-40">
          <div className="feature-box h-100">
            <div className="feature-box-content">
              <i className="fa fa-paint-brush blue"></i>
              <h4>Enseignement à distance</h4>
              <p>
                Vos cours vous suivent partout. A la 
                maison, au bureau, en voiture...
              </p>
            </div>
            
            <div
              className="feature-box-img"
              style="background-image: url('assets/images/about/1.png')"
            ></div>
            <span className="feature-border"></span>
          </div>
        </div>
        <div className="col-md-4 xs-mb-40">
          <div className="feature-box h-100 active">
            <div className="feature-box-content">
              <i className="fa fa-arrows"></i>
              <h4>Formation continue </h4>
              <p>
                Atteignez votre plein potentiel !
                Grâce aux programmes 
                et aux cours à temps partiel.
              </p>
            </div>
           
            <div
              className="feature-box-img"
              style="background-image: url('assets/images/about/2.png')"
            ></div>
            <span className="feature-border"></span>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature-box h-100">
            <div className="feature-box-content">
              <i className="fa fa-heart"></i>
              <h4>Conseil et Assistance </h4>
              <p>
                On vous propose une prestation de conseil, assistance 
                et accompagnement dans le but de vous apporter une 
                aide dans toutes vos démarches.
              </p>
            </div>
           
            <div
              className="feature-box-img"
              style="background-image: url('assets/images/about/3.png')"
            ></div>
            <span className="feature-border"></span>
          </div>
        </div>
      </div>
  )
}
