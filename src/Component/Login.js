import { useState } from "react";
import { useAuth } from "./Auth";
import image from "../assets/image.png";
import logo from "../assets/logo_M.png";
import { Link } from "react-router-dom";


import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { ErrorText } from "./Commons";
import axios, { AxiosError } from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom";

export const Login = () => {
 
  const [error, setError] = useState("");

  const auth = useAuth();

  const navigate = useHistory();

  const handleLogin = (values) => {
    
    const data = JSON.stringify(values, null, 2);
    // call api

    axios
      .post(auth.endpoint + "/authenticate", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        // console.log(response.data.id_token);
        auth.login(values.username);
        auth.haveToken(response.data.id_token);
        navigate.push("/");
      })
      .catch(function (error) {
        // Si une erreur survient pendant la requête
        setError(" Login ou Mot de passe incorrect");
        console.error("Erreur lors de la requête:", error);
        // Gérez l'erreur ou affichez un message à l'utilisateur
        // Vous pouvez également relancer l'erreur si vous souhaitez qu'elle soit gérée ailleurs
        // throw error;
      });
  };

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img src={image} class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col="4" md="6">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p
              className="mb-0 me-3"
              style={{
                fontWeight: "900",
                fontSize: "2.3rem",
              }}
            >
              <Link to='/'>
            
              <img src={logo} height="60" className="mb-4"></img>
              <span
                className="mt-20  "
                style={{ color: "rgb(3, 157, 85)", fontWeight: "300" }}
              >
                Arket
              </span>
              </Link>

             {"   "} Heureux de vous revoir !{" "}
            </p>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0"></p>
          </div>
          <ErrorText>{error}</ErrorText>
          <Formik
            initialValues={{ username: "", password: "", remember: false }}
            validate={(values) => {
              const errors = {};
              if (!values.username) {
                errors.username = "Required";
              }
              //   else if (
              //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              //   ) {
              //     errors.email = "Invalid email address";
              //   }
              return errors;
            }}
            onSubmit={(values) => {
              // alert(JSON.stringify(values, null, 2));
              handleLogin(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                {/* <ErrorText>{errors}</ErrorText> */}
                <MDBInput
                  wrapperClass="mb-4"
                  label="Login"
                  clearOnEscape
                  type="text"
                  id="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="lg"
                />
                <ErrorText>
                  {errors.username && touched.username && errors.username}
                </ErrorText>

                <MDBInput
                  id="password"
                  wrapperClass="mb-4"
                  label="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  size="lg"
                />

                <div className="d-flex justify-content-between mb-4">
                  <MDBCheckbox
                    name="remember"
                    value={values.remember}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="remember"
                    label="Remember me"
                  />
                  <a href="!#" className="link-success">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-md-start mt-4 pt-2">
                  <MDBBtn
                    className="mb-0 px-5"
                    size="lg"
                    desabled={isSubmitting}
                    color="success"
                  >
                    Login
                  </MDBBtn>
                  <p className="small fw-bold mt-2 pt-1 mb-2">
                    Vous n'avez pas de compte?{" "}
                    <a href="/register" className="link-danger">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            )}
          </Formik>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
