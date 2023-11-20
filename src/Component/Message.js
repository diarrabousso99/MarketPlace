import React from "react";
import { MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";

export default function Message() {
  return (
    <form className="mx-4">
      <h3 className="mt-4 mb-4">Restons en contact!</h3>

      <MDBInput id="form4Example1" wrapperClass="mb-4" label="Pseudo" />
     
      <MDBInput
        wrapperClass="mb-4"
        textarea
        id="form4Example3"
        rows={8}
        label="Message"
      />
      <MDBBtn type="submit" className="mb-4 btn-lg" block color="success">
       Envoyer
      </MDBBtn>
    </form>
  );
}
