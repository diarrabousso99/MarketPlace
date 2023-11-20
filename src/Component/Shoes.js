import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBIcon,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";

export default function Shoes() {
  return (
    <div className="row mx-5">
      <div className="col-md-3">
        <MDBCard>
          <MDBCardImage
            src="https://th.bing.com/th/id/OIP.JhcMIhxuQXq2jJI6tma2UQHaHa?pid=ImgDet&rs=1"
            position="top"
            alt="..."
            height="300px"
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Size: 26 39
              <span className="mx-3">
                <strong>Prix:</strong>
                10.0000 Fcfa
              </span>
            </MDBCardText>
            <MDBBtn outline color="success" href="/shopping">
              <MDBIcon fas icon="plus" />
              panier
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
      <div className="col-md-3">
        <MDBCard>
          <MDBCardImage
            src="https://th.bing.com/th/id/R.d7bdcc20adaf6f0e558a510658f7f890?rik=%2bC8jzCJA%2fIpLrQ&pid=ImgRaw&r=0"
            position="top"
            alt="..."
            height="300px"
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Size: 26 39
              <span className="mx-3">
                <strong>Prix:</strong>
                10.0000 Fcfa
              </span>
            </MDBCardText>
            <MDBBtn outline color="success" href="/shopping">
              <MDBIcon fas icon="plus" />
              panier
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
      <div className="col-md-3">
        <MDBCard>
          <MDBCardImage
            src="https://th.bing.com/th/id/R.6acd91f29bb53cbd5db6e23f157b0b3c?rik=45lItIe4R6fWrg&pid=ImgRaw&r=0"
            position="top"
            alt="..."
            height="300px"
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Size: 26 39
              <span className="mx-3">
                <strong>Prix:</strong>
                10.0000 Fcfa
              </span>
            </MDBCardText>
            <MDBBtn outline color="success" href="/shopping">
              <MDBIcon fas icon="plus" />
              panier
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
      <div className="col-md-3">
        <MDBCard>
          <MDBCardImage
            src="https://th.bing.com/th/id/R.7811fe2b4f412e93ab3d0f91142ccb90?rik=eUFFh7t4z5kimQ&pid=ImgRaw&r=0"
            position="top"
            alt="..."
            height="300px"
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Size: 26 39
              <span className="mx-3">
                <strong>Prix:</strong>
                10.0000 Fcfa
              </span>
            </MDBCardText>
            <MDBBtn outline color="success" href="/shopping">
              <MDBIcon fas icon="plus" />
              panier
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>

      {/* <nav aria-label="...">
        <MDBPagination className="mb-0">
          <MDBPaginationItem disabled>
            <MDBPaginationLink href="/shopping" tabIndex={-1} aria-disabled="true">
              Previous
            </MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href="#">1</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem active aria-current="page">
            <MDBPaginationLink href="#">
              2 <span className="visually-hidden">(current)</span>
            </MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href="#">3</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href="#">Next</MDBPaginationLink>
          </MDBPaginationItem>
        </MDBPagination>
      </nav> */}
    </div>
  );
}
