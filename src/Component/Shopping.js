import React, { Component } from "react";
import swal from "sweetalert";
import axios from "axios";
import $ from "jquery";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import Header from "./Header";

class Shopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panier: [],
      somme: 0,
      // Initialiser le state avec le panier
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    // alert(id)

    if (id == 0) {
      // on recupere la liste de produits qu'on affiche seulement
      // Récupérer le panier depuis le localStorage
      const panierString = localStorage.getItem("panierVisiteur");
      try {
        const panier = panierString ? JSON.parse(panierString) : [];

        localStorage.setItem("panierVisiteur", JSON.stringify(panier));
        // montant commande
        let somme = 0;
        for (let index = 0; index < panier.length; index++) {
          somme += parseInt(panier[index].prixProduit) * panier[index].quantite;
        }

        this.setState({ panier, somme }); // Mettre à jour le state avec le nouveau panier
      } catch (error) {
        console.error("Erreur lors de la mise à jour du panier :", error);
      }
    } else {
      // Récupérer le panier depuis le localStorage
      const panierString = localStorage.getItem("panierVisiteur");

      axios
        .get("http://localhost:8080/api/produits/" + id, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          const produit = response.data;

          try {
            const panier = panierString ? JSON.parse(panierString) : [];

            const produitExistant = panier.find((p) => p.id === produit.id);

            if (produitExistant) {
              produitExistant.quantite += 1;
            } else {
              panier.push({ ...produit, quantite: 1 });
            }

            localStorage.setItem("panierVisiteur", JSON.stringify(panier));

            console.log(localStorage.getItem("panierVisiteur"));

            // montant commande
            let somme = 0;
            for (let index = 0; index < panier.length; index++) {
              somme +=
                parseInt(panier[index].prixProduit) * panier[index].quantite;
            }

            this.setState({ panier, somme }); 
            // Mettre à jour le state avec le nouveau panier
          } catch (error) {
            console.error("Erreur lors de la mise à jour du panier :", error);
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la requête :", error);
        });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol size="12">
                <MDBCard
                  className="card-registration card-registration-2"
                  style={{ borderRadius: "15px" }}
                >
                  <MDBCardBody className="p-0">
                    <MDBRow className="g-0">
                      <MDBCol lg="8">
                        <div className="p-5">
                          <div className="d-flex justify-content-between align-items-center mb-5">
                            <MDBTypography
                              tag="h1"
                              className="fw-bold mb-0 "
                              style={{
                                color: "rgb(3, 157, 85)",
                                fontSize: "3.3rem",
                                fontWeight: "900",
                              }}
                            >
                              Mon panier
                            </MDBTypography>
                            <MDBTypography className="mb-0 text-muted">
                              {this.state.panier.length} articles
                            </MDBTypography>
                          </div>

                          <hr className="my-4" />

                          {this.state.panier.map((produit, index) => (
                            <MDBRow
                              key={index}
                              className="mb-4 d-flex justify-content-between align-items-center"
                            >
                              <MDBCol md="2" lg="2" xl="2">
                                <MDBCardImage
                                  src={produit.imageProduit} 
                                  fluid
                                  className="rounded-3"
                                  alt={produit.nomProduit}
                                />
                              </MDBCol>
                              <MDBCol md="3" lg="3" xl="3">
                                <MDBTypography
                                  tag="h6"
                                  className="text-black mb-0"
                                >
                                  {produit.nomProduit}
                                </MDBTypography>
                              </MDBCol>
                              <MDBCol
                                md="3"
                                lg="3"
                                xl="3"
                                className="d-flex align-items-center"
                              >                             

                                <MDBInput
                                  className="number "
                                  type="number"
                                  min="1"
                                  defaultValue={produit.quantite}
                                  size="sm"
                                  id={"qtite_" + index}
                                  onClick={() => this.updateProduit(index)}
                                />
                              </MDBCol>
                              <MDBCol md="3" lg="2" xl="2" className="text-end">
                                <MDBTypography tag="h6" className="mb-0">
                                  {produit.prixProduit} Fcfa
                                </MDBTypography>
                              </MDBCol>
                              <MDBCol md="1" lg="1" xl="1" className="text-end">
                                <a
                                  href="#!"
                                  className="text-muted"
                                  onClick={() => this.supprimerProduit(index)}
                                >
                                  <MDBIcon fas icon="times" />
                                </a>
                              </MDBCol>
                            </MDBRow>
                          ))}

                          <hr className="my-4" />

                          <div className="pt-5">
                            <MDBTypography tag="h6" className="mb-0">
                              {/* Le lien vers la boutique */}
                            </MDBTypography>
                          </div>
                        </div>
                      </MDBCol>
                      <MDBCol lg="4" className="bg-grey">
                        <div className="p-5">
                          <MDBTypography
                            tag="h3"
                            className="fw-bold mb-5 mt-2 pt-1"
                          >
                            Resume
                          </MDBTypography>

                          <hr className="my-4" />
                          <div className="d-flex justify-content-between mb-5">
                            <MDBTypography tag="h5" className="text-uppercase">
                              Total a payer
                            </MDBTypography>
                            <MDBTypography tag="h5">
                              {this.state.somme} Fcfa
                            </MDBTypography>
                          </div>
                          <a href="/order">
                            <MDBBtn
                              color="success"
                              block
                              size="lg"
                             
                            >
                              Valider
                            </MDBBtn>
                          </a>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </div>
    );
  }

  submitOrder() {
    return <Link to="/order"></Link>;
  }
  // Fonction pour supprimer un produit du panier
  supprimerProduit(index) {
    swal({
      title: "Are you sure?",
      text: "Voulez vous vraiment supprimer le produit du panier!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const panier = [...this.state.panier];
        panier.splice(index, 1);
        let somme = 0;
        for (let index = 0; index < panier.length; index++) {
          somme += parseInt(panier[index].prixProduit) * panier[index].quantite;
        }
        this.setState({ panier, somme });
        console.log(panier);
        localStorage.setItem("panierVisiteur", JSON.stringify(panier));
        swal("Poof! le produit a ete supprime", {
          icon: "success",
        });
      }
    });

    // rest of the code
  }
  // fonction update produit
  updateProduit(index) {
    const panier = [...this.state.panier];
    // alert($("#qtite_" + index).val());
    panier[index].quantite = $("#qtite_" + index).val();
    // somme
    let somme = 0;
    for (let index = 0; index < panier.length; index++) {
      somme += parseInt(panier[index].prixProduit) * panier[index].quantite;
    }
    localStorage.setItem("panierVisiteur", JSON.stringify(panier));
    this.setState({ panier, somme });
  }
}

export default Shopping;
