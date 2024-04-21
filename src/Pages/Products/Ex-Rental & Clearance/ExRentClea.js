import React from "react";
import { Breadcrumb, BreadcrumbItem, Col, Row } from "react-bootstrap";
import Filters from "../../../Components/ProdcutFilter/Filters";
import Catalogue from "../../../Components/ProductCatalogue/Catalogue";
import { exRentalProducts } from "../../../Utils";

function ExRentClea() {

  return (
    <div style={{ padding: "109px 0px 0px" }}>
      <div className="px-5">
        <Breadcrumb
          className="py-4"
          style={{ fontSize: "14px", color: "#f26449" }}
        >
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem active>Ex-Rental & Clearance</BreadcrumbItem>
        </Breadcrumb>
        <div>
          <Row>
            <Col md={3} className="d-none d-md-block">
              <Filters />
            </Col>
            <Col md={9} className="ps-md-5 pb-5">
              <Catalogue data={exRentalProducts} />
            </Col>
          </Row>
        </div>
        <div className='py-5'>
          <h4 className='mb-4'>Ex-Rental & Clearance</h4>
          <p>
            Flexikitch ex-rental and clearance equipment is a great place to
            source quality catering equipment at marked down prices. Most of our
            ex rental equipment is less than 2 years old and are always in
            excellent condition after our comprehensive re-sale preparation
            process.
          </p>
          <p>
            Our rentals include additional warranty so you know your buying
            equipment that has been serviced throughout its life. We pride
            ourselves on distributing the leading brands including Skope
            Refrigeration, Frymaster, Garland, Rational, Hobart, Winterhalter,
            Convotherm, Blue Seal, Williams refrigeration and many more.
          </p>
          <p>
            Our ex rental stock is coming and going every day so please get in
            touch so we can help you save on your next purchase.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExRentClea;
