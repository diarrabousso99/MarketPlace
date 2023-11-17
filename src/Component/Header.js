import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBDropdown,
  MDBNavbarToggler,
  MDBDropdownToggle,
  MDBIcon,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
} from "mdb-react-ui-kit";

export default function Header() {
  const [showBasic, setShowBasic] = useState(true);
  const isAuthenticated = false;

  return (
    <div>
      <header>
      <MDBNavbar expand="lg" dark bgColor="dark" fixed>
        <MDBContainer fluid>
          <Link to="/">
          <MDBNavbarBrand>LOGO</MDBNavbarBrand>
            </Link>
        

          <div className="d-flex w-auto mb-3">
            <MDBContainer fluid>
              <MDBNavbarToggler
                aria-controls="navbarExample01"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setShowBasic(!showBasic)}
              >
                <MDBIcon fas icon="bars" />
              </MDBNavbarToggler>

              <div className={showBasic ? "collapse show" : "collapse"}>
                <MDBNavbarNav className=" d-flex mb-2 mb-lg-0">
                  {/* Liens à droite */}
                  <MDBNavbarItem>
                    <Link to="/allproducts">
                      <MDBNavbarLink>
                        Shop
                      </MDBNavbarLink>
                    </Link>
                  </MDBNavbarItem>
                  <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Categorie
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Adidas</MDBDropdownItem>
                  <MDBDropdownItem link>Nike</MDBDropdownItem>
                  <MDBDropdownItem link>Jordan</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

                  <MDBNavbarItem>
                    <Link to="/shopping">
                      <MDBNavbarLink>
                      <MDBIcon fas icon="shopping-cart" />
                      </MDBNavbarLink>
                    </Link>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <Link to="/register">
                      <MDBNavbarLink>
                        <MDBIcon fas icon="user-plus" />
                      </MDBNavbarLink>
                    </Link>
                  </MDBNavbarItem>

                  {isAuthenticated ? (
                    <MDBNavbarItem>
                      <MDBNavbarLink href="#">
                        <MDBIcon fas icon="sign-out-alt" />
                      </MDBNavbarLink>
                    </MDBNavbarItem>
                  ) : (
                    <MDBNavbarItem>
                      <MDBNavbarLink href="#">
                        <MDBIcon fas icon="sign-in-alt" />
                      </MDBNavbarLink>
                    </MDBNavbarItem>
                  )}
                </MDBNavbarNav>
              </div>
            </MDBContainer>
          </div>

      
        </MDBContainer>
      </MDBNavbar>
      </header>
    </div>
  );
}
