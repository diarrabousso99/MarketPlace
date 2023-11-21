import { useAuth } from "./Auth";
import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import axios from "axios";

const Shoes = ({ urlApi }) => {
  const [productData, setProductData] = useState([]);
  // Remplacez par votre vrai token
  //alert(auth.token)
  useEffect(() => {
    // Effectue une requête pour récupérer les données des produits depuis l'API
    const fetchData = async () => {
      try {
        const response = await axios.get(urlApi, {});
        setProductData(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      }
    };
    fetchData(); // N'oubliez pas d'appeler la fonction fetchData pour déclencher la requête
  }, [urlApi]);

  return (
    <div className="row mx-5">
      {productData.map((product) => (
        <div className="col-md-3" key={product.id}>
          <MDBCard>
            <MDBCardImage
              src={product.imageProduit}
              position="top"
              alt="..."
              height="300px"
            />
            <MDBCardBody>
              <MDBCardTitle
                style={{ color: "rgb(3, 157, 85)", fontWeight: "300" }}
              >
                {product.nomProduit}
              </MDBCardTitle>
              <MDBCardText>
                <strong>{product.prixProduit} Fcfa</strong>
                <span className="mx-3">
                  <strong>{product.descriptionProduit}</strong>
                </span>
              </MDBCardText>
              <MDBBtn outline color="success" href={"/shopping/" + product.id}>
                <MDBIcon fas icon="plus" />
                panier
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>
      ))}
    </div>
  );
};

export default Shoes;
