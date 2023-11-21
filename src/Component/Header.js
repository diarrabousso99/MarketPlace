import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory,useLocation } from "react-router-dom";
import "../assets/style.css";

import logo from "../assets/logo_M.png";

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
import { useAuth } from "./Auth";

export default function Header() {
  const [showBasic, setShowBasic] = useState(false);

  const navigate = useHistory();
  const auth = useAuth();

  const location = useLocation();

  const handleLogout = () => {
    auth.logout();
    navigate.push("/");
  };


  const isNavLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="mb-10 header">
      <MDBNavbar className="fixed" id="header-bg"
        light
        expand="lg" 
        fixed
       
      >
        <MDBContainer fluid>
          <Link to="/">
            <MDBNavbarBrand>
              <img src={logo} height="70"></img>
              <span
                className="mt-5"
                style={{ color: "rgb(3, 157, 85)", fontWeight: "900" }}
              >
                Arket
              </span>
            </MDBNavbarBrand>
          </Link>

          <div className="d-flex w-auto mb-3">
            <MDBNavbarToggler
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowBasic(!showBasic)}
            >
              <MDBIcon fas icon="bars" />
            </MDBNavbarToggler>

            <div className={!showBasic ? "collapse show" : "collapse"}>
              <MDBNavbarNav className=" d-flex mb-2 mb-lg-0">
                {/* Liens à droite */}
                <MDBNavbarItem>
                  <Link to="/">
                    <MDBNavbarLink active={isNavLinkActive("/")} >Home</MDBNavbarLink>
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <Link to="/allproducts">
                    <MDBNavbarLink active={isNavLinkActive("/allproducts")}  >Shop</MDBNavbarLink>
                  </Link>
                </MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    Categorie
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Adidas</MDBDropdownItem>
                    <MDBDropdownItem link>Nike</MDBDropdownItem>
                    <MDBDropdownItem link>Jordan</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>

                <MDBNavbarItem>
                  <Link to="/shopping/0">
                    <MDBNavbarLink active={isNavLinkActive("/shopping/0")} >
                      <MDBIcon fas icon="shopping-cart" />
                    </MDBNavbarLink>
                  </Link>
                </MDBNavbarItem>

                {!auth.user && (
                  <MDBNavbarItem>
                    <MDBNavbarLink active={isNavLinkActive("/login")}  href="/login">
                      <MDBIcon fas icon="sign-in-alt" />
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                )}
                {auth.user && (
                  <MDBNavbarItem>
                    <MDBNavbarLink
                     
                      href="#"
                      onClick={handleLogout}
                      alt="se deconnecter"
                    >
                      <MDBIcon fas icon="sign-out-alt" />
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                )}
                {!auth.user && (
                  <MDBNavbarItem>
                    <Link to="/register">
                      <MDBNavbarLink >
                        <MDBIcon fas icon="user-plus" />
                      </MDBNavbarLink>
                    </Link>
                  </MDBNavbarItem>
                )}
                {auth.user && (
                  <MDBNavbarItem>
                    <Link to="#">
                      <MDBNavbarLink >
                        <MDBIcon fas icon="user-alt" />
                        {auth.user}
                      </MDBNavbarLink>
                    </Link>
                  </MDBNavbarItem>
                )}
              </MDBNavbarNav>
            </div>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}
