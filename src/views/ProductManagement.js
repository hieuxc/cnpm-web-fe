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

const ProductManagement = () => {
  const [product, setProduct] = useState(usersData);
  const [productSelected, setProductSelected] = useState({});
  const [productType, setProductType] = useState(PRODUCTTYPE[0]);
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [mode, setMode] = useState("VIEW");
  useEffect(() => { }, [productType]);
  return (
    <CCard accentColor="success">
      <CCardHeader>
        <CRow>
          <CCol>
            <h3>Product Management</h3>
          </CCol>
          <CCol>
            <CButton
              color="success"
              className="card-header-actions"
              onClick={() => {
                setMode("CREATE");
                setShowModalDetail(true);
              }}
            >
              Create
            </CButton>
          </CCol>
        </CRow>
      </CCardHeader>
      <CCardBody>
        <CTabs>
          <CNav variant="tabs">
            {PRODUCTTYPE.map((p) => (
              <CNavItem>
                <CNavLink onClick={() => setProductType(p)}>{p}</CNavLink>
              </CNavItem>
            ))}
          </CNav>
        </CTabs>
        <CRow>
          <CCol xs="12">
            <CDataTable
              items={product}
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
                          Math.random() * 100
                        ) + "%"}
                      </CBadge>
                    </h4>
                  </td>
                ),
                amount: (item) => (
                  <td>
                    {(function () { return Math.floor(Math.random() * 1000) })()}
                  </td>
                ),
                price: (item) => (
                  <td>
                    {Math.floor(Math.random() * 1000) * 1000}
                  </td>
                ),
                promoPrice: (item) => (
                  <td>
                    {Math.floor(Math.random() * 1000) * 1000}
                  </td>
                ),
                actions: (item) => (
                  <td>
                    <CButton
                      onClick={() => {
                        setProductSelected(item);
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
            <h3>Product Detail</h3>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                setShowModalDetail(false);
                setMode("VIEW");
                setProductSelected({});
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
                  style={{
                    border: "1px solid #bbb",
                    boxShadow: "0px 0px 5px #888",
                    maxHeight: "400px",
                  }}
                  src={
                    mode !== "CREATE"
                      ? productSelected.image
                      : "https://thailamlandscape.vn/wp-content/uploads/2017/10/no-image.png"
                  }
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
                    <CLabel style={{ fontWeight: "bold" }}>ProductID</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    {mode === "VIEW" ? (
                      <p className="form-control-static">
                        {productSelected.productId}
                      </p>
                    ) : (
                      <CInput
                        id="text-input"
                        name="text-input"
                        value={productSelected.productId}
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
                        {productSelected.name}
                      </p>
                    ) : (
                      <CInput
                        id="text-input"
                        name="text-input"
                        value={productSelected.name}
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
                        {productSelected.price}
                      </p>
                    ) : (
                      <CInput
                        id="text-input"
                        name="text-input"
                        value={productSelected.price}
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
                        {productSelected.promoPrice}
                      </p>
                    ) : (
                      <CInput
                        id="text-input"
                        name="text-input"
                        value={productSelected.promoPrice}
                        placeholder="Number"
                      />
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel style={{ fontWeight: "bold" }}>Amount</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    {mode === "VIEW" ? (
                      <p className="form-control-static">
                        {productSelected.amount}
                      </p>
                    ) : (
                      <CInput
                        id="text-input"
                        name="text-input"
                        value={productSelected.amount}
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
                        {productSelected.desc}
                      </p>
                    ) : (
                      <CInput
                        id="text-input"
                        name="text-input"
                        value={productSelected.desc}
                        placeholder="Text"
                      />
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel style={{ fontWeight: "bold" }}>Type</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">
                      {mode !== "CREATE" ? productSelected.type : productType}
                    </p>
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
export default ProductManagement;

const fields = [
  { key: "no", label: "No", _style: { width: "5%" } },
  { key: "productId", label: "Product ID", _style: { width: "15%" } },
  { key: "name", label: "Name", _style: { width: "20%" } },
  { key: "price", label: "Price", _style: { width: "20%" } },
  { key: "promoPrice", label: "Promo Price", _style: { width: "20%" } },
  { key: "sale", label: "Sale", _style: { width: "10%" } },
  { key: "amount", label: "Amount", _style: { width: "10%" } },
  { key: "actions", _style: { width: "10%" } },
];
const PRODUCTTYPE = ["Dog Foot", "Cat Foot", "ABC"];

const usersData = [
  {
    no: 1,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 20,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 2,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 20,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 3,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 20,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
  {
    no: 4,
    productId: "PRO001",
    image:
      "https://dizibrand.com/wp-content/uploads/2019/07/product-marketing-la-gi-dizibrand-1.jpg",
    name: "Product 01",
    price: 1000000,
    promoPrice: 900000,
    amount: 0,
    desc: "afefefewwfwfefesds",
    type: "Dog Food",
  },
];