import React from "react";
import { ErrorText } from "./Commons";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import Header from "./Header";
import { Formik } from "formik";

const handleRegister = (values) => {
  const data = JSON.stringify(values, null, 2);

  alert(data);

}

export default function Register() {
  return (
    <div>
      <Header />
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>
                <Formik
                  initialValues={{
                    login: "",
                    email: "",
                    password: "",
                    repeatPassword: "",
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.login) {
                      errors.login = "Required";
                    }
                    if (!values.password) {
                      errors.password = "Required";
                    } else if (values.password != values.repeatPassword) {
                      errors.password = "Veuillez saisir le meme mots de passe";
                    }
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    return errors;
                  }}
                  onSubmit={(values) => {
                    // alert(JSON.stringify(values, null, 2));
                    handleRegister(values);
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
                      <div className="d-flex flex-row align-items-center mb-4 ">
                        <MDBIcon fas icon="user me-3" size="lg" />
                        <MDBInput
                          label="Login"
                          clearOnEscape
                          id="login"
                          type="text"
                          value={values.login}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-100"
                        />
                        <ErrorText>
                          {errors.login && touched.login && errors.login}
                        </ErrorText>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <MDBIcon fas icon="envelope me-3" size="lg" />
                        <MDBInput
                          label="Your Email"
                          id="email"
                          clearOnEscape
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorText>
                          {errors.email && touched.email && errors.email}
                        </ErrorText>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <MDBIcon fas icon="lock me-3" size="lg" />
                        <MDBInput
                          label="Password"
                          id="password"
                          clearOnEscape
                          type="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorText>
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </ErrorText>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <MDBIcon fas icon="key me-3" size="lg" />
                        <MDBInput
                          label="Repeat your password"
                          id="repeatPassword"
                          type="password"
                          clearOnEscape
                          value={values.repeatPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>

                      <div className="mb-4">
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheckDefault"
                          label="Subscribe to our newsletter"
                        />
                      </div>

                      <MDBBtn
                        className="mb-4"
                        size="lg"
                        desabled={isSubmitting}
                      >
                        Register
                      </MDBBtn>
                    </form>
                  )}
                </Formik>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}
