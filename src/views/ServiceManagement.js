import React, { useState, useEffect } from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CDataTable,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CNav,
  CNavItem,
  CNavLink,
  CTabs,
  CFormGroup,
  CLabel,
  CInput,
} from "@coreui/react";

const ServiceManagement = () => {
  const [Service, setService] = useState(usersData);
  const [serviceSelected, setServiceSelected] = useState({});
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [mode, setMode] = useState("VIEW");
  return (
    <CCard accentColor="success">
      <CCardHeader>
        <CRow>
          <CCol>
            <h3>Service Management</h3>
          </CCol>
          <CCol>
            <CButton color="success" className="card-header-actions"
              onClick={() => {
                setMode('CREATE')
                setShowModalDetail(true);
              }}
            >
              Create
            </CButton>
          </CCol>
        </CRow>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol xs="12">
            <CDataTable
              items={Service}
              fields={fields}
              striped
              border
              itemsPerPage={5}
              pagination
              scopedSlots={{
                sale: (item) => (
                  <td>
                    <h4>
                      <CBadge color="danger">
                        {Math.floor(
                          // 100 - (item.promoPrice / item.price) * 100
                          Math.random()*100
                        ) + "%"}
                      </CBadge>
                    </h4>
                  </td>
                ),
                price: (item) => (
                  <td>
                    {Math.floor(Math.random()*1000)*1000}
                  </td>
                ),
                promoPrice: (item) => (
                  <td>
                    {Math.floor(Math.random()*1000)*1000}
                  </td>
                ),
                actions: (item) => (
                  <td>
                    <CButton
                      onClick={() => {
                        setServiceSelected(item);
                        setShowModalDetail(true);
                      }}
                      color="primary"
                    >
                      Detail
                    </CButton>
                  </td>
                ),
              }}
            />
          </CCol>
        </CRow>

        <CModal show={showModalDetail} size="xl">
          <CModalHeader>
            <h3>Service Detail</h3>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                setShowModalDetail(false);
                setMode("VIEW");
                setServiceSelected({})
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </CModalHeader>
          <CModalBody>
            <CRow>
              <CCol xs="12" lg="6" style={{ borderRight: "1px solid #bbb" }}>
                <img
                  width="100%"
                  src={mode !== "CREATE" ? serviceSelected.image : "https://thailamlandscape.vn/wp-content/uploads/2017/10/no-image.png"}
                  style={{
                    border: "1px solid #bbb",
                    boxShadow: "0px 0px 5px #888",
                    maxHeight: "400px"
                  }}
                />
                {mode !== "VIEW" && (
                  <CButton className="mt-2" color="success">
                    Upload Image
                  </CButton>
                )}
              </CCol>
              <CCol xs="12" lg="6" style={{ padding: "10px 20px" }}>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel style={{ fontWeight: "bold" }}>ServiceID</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    {mode === "VIEW" ? (
                      <p className="form-control-static">
                        {serviceSelected.ServiceId}
                      </p>
                    ) : (
                      <CInput
                        id="text-input"
                        name="text-input"
                        value={serviceSelected.ServiceId}
                        placeholder="Text"
                      />
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel style={{ fontWeight: "bold" }}>Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    {mode === "VIEW" ? (
                      <p className="form-control-static">
                        {serviceSelected.name}
                      </p>
                    ) : (
                      <CInput
                        id="text-input"
                        name="text-input"
                        value={serviceSelected.name}
                        placeholder="Text"
                      />
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel style={{ fontWeight: "bold" }}>Supplier</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    {mode === "VIEW" ? (
                      <p className="form-control-static">
                        {serviceSelected.supplier}
                      </p>
                    ) : (
                      <CInput
                        id="text-input"
                        name="text-input"
                        value={serviceSelected.supplier}
                        placeholder="Text"
                      />
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel style={{ fontWeight: "bold" }}>Price</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    {mode === "VIEW" ? (
                      <p className="form-control-static">
                        {serviceSelected.price}
                      </p>
                    ) : (
                      <CInput
                        id="text-input"
                        name="text-input"
                        value={serviceSelected.price}
                        placeholder="Number"
                      />
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel style={{ fontWeight: "bold" }}>Promo Price</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    {mode === "VIEW" ? (
                      <p className="form-control-static">
                        {serviceSelected.promoPrice}
                      </p>
                    ) : (
                      <CInput
                        id="text-input"
                        name="text-input"
                        value={serviceSelected.promoPrice}
                        placeholder="Number"
                      />
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel style={{ fontWeight: "bold" }}>Description</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    {mode === "VIEW" ? (
                      <p className="form-control-static">
                        {serviceSelected.desc}
                      </p>
                    ) : (
                      <CInput
                        id="text-input"
                        name="text-input"
                        type="textarea"
                        value={serviceSelected.desc}
                        placeholder="text"
                      />
                    )}
                  </CCol>
                </CFormGroup>
              </CCol>
            </CRow>
          </CModalBody>
          <CModalFooter>
            {mode === "VIEW" && (
              <>
                <CButton color="primary" onClick={() => setMode("EDIT")}>
                  Edit
                </CButton>

                <CButton
                  color="danger"
                  onClick={() => setShowModalDetail(false)}
                >
                  Delete
                </CButton>
              </>
            )}
            {mode === "EDIT" && (
              <>
                <CButton color="success" onClick={() => console.log("update")}>
                  Update
                </CButton>
              </>
            )}
            {mode === "CREATE" && (
              <>
                <CButton color="success" onClick={() => console.log("update")}>
                  Create
                </CButton>
              </>
            )}
          </CModalFooter>
        </CModal>
      </CCardBody>
    </CCard>
  );
};
export default ServiceManagement;

const fields = [
  { key: "no", label: "No", _style: { width: "5%" } },
  { key: "ServiceId", label: "Service ID", _style: { width: "15%" } },
  { key: "name", label: "Name", _style: { width: "20%" } },
  { key: "supplier", label: "Supplier", _style: { width: "25%" } },
  { key: "price", label: "Price", _style: { width: "15%" } },
  { key: "promoPrice", label: "Promo Price", _style: { width: "15%" } },
  { key: "sale", label: "Sale", _style: { width: "10%" } },
  { key: "actions", _style: { width: "10%" } },
];
const usersData = [
  {
    no: 1,
    ServiceId: "PRO001",
    image: "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Service 01",
    supplier: "ABC",
    price: 1000000,
    promoPrice: 900000,
    desc: "afefefewwfwfefesds",
  },
  {
    no: 2,
    ServiceId: "PRO001",
    image: "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Service 01",
    supplier: "ABC",
    price: 1000000,
    promoPrice: 900000,
    desc: "afefefewwfwfefesds",
  },
  {
    no: 3,
    ServiceId: "PRO001",
    image: "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Service 01",
    supplier: "ABC",
    price: 1000000,
    promoPrice: 900000,
    desc: "afefefewwfwfefesds",
  },
  {
    no: 4,
    ServiceId: "PRO001",
    image: "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Service 01",
    supplier: "ABC",
    price: 1000000,
    promoPrice: 900000,
    desc: "afefefewwfwfefesds",
  },
  {
    no: 4,
    ServiceId: "PRO001",
    image: "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Service 01",
    supplier: "ABC",
    price: 1000000,
    promoPrice: 900000,
    desc: "afefefewwfwfefesds",
  },
  {
    no: 4,
    ServiceId: "PRO001",
    image: "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Service 01",
    supplier: "ABC",
    price: 1000000,
    promoPrice: 900000,
    desc: "afefefewwfwfefesds",
  },
  {
    no: 4,
    ServiceId: "PRO001",
    image: "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Service 01",
    supplier: "ABC",
    price: 1000000,
    promoPrice: 900000,
    desc: "afefefewwfwfefesds",
  },
  {
    no: 4,
    ServiceId: "PRO001",
    image: "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Service 01",
    supplier: "ABC",
    price: 1000000,
    promoPrice: 900000,
    desc: "afefefewwfwfefesds",
  },
  {
    no: 4,
    ServiceId: "PRO001",
    image: "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Service 01",
    supplier: "ABC",
    price: 1000000,
    promoPrice: 900000,
    desc: "afefefewwfwfefesds",
  },
  {
    no: 4,
    ServiceId: "PRO001",
    image: "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Service 01",
    supplier: "ABC",
    price: 1000000,
    promoPrice: 900000,
    desc: "afefefewwfwfefesds",
  },
  {
    no: 4,
    ServiceId: "PRO001",
    image: "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Service 01",
    supplier: "ABC",
    price: 1000000,
    promoPrice: 900000,
    desc: "afefefewwfwfefesds",
  },
  {
    no: 4,
    ServiceId: "PRO001",
    image: "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Service 01",
    supplier: "ABC",
    price: 1000000,
    promoPrice: 900000,
    desc: "afefefewwfwfefesds",
  },
  {
    no: 4,
    ServiceId: "PRO001",
    image: "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Service 01",
    supplier: "ABC",
    price: 1000000,
    promoPrice: 900000,
    desc: "afefefewwfwfefesds",
  },
];