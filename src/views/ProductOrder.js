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
} from "@coreui/react";

const ProductOrder = () => {
  const [productOrder, setProductOrder] = useState(usersData);
  const [orderDetail, setOrderDetail] = useState(orderDetailData);
  const [productOrderSelected, setProductOrderSelected] = useState({});
  const [productOrderType, setProductOrderType] = useState(PRODUCTORDERTYPE[0]);
  const [showModalDetail, setShowModalDetail] = useState(false);
  useEffect(() => { }, [productOrderType]);
  return (
    <CCard accentColor="success">
      <CCardHeader>
        <CRow>
          <CCol>
            <h3>Product Order</h3>
          </CCol>
        </CRow>
      </CCardHeader>
      <CCardBody>
        <CTabs>
          <CNav variant="tabs">
            {PRODUCTORDERTYPE.map((p) => (
              <CNavItem>
                <CNavLink onClick={() => setProductOrderType(p)}>{p}</CNavLink>
              </CNavItem>
            ))}
          </CNav>
        </CTabs>
        <CRow>
          <CCol xs="12">
            <CDataTable
              items={productOrder}
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
                          100 - (item.promoPrice / item.price) * 100
                        ) + "%"}
                      </CBadge>
                    </h4>
                  </td>
                ),
                actions: (item) => (
                  <td>
                    <CButton
                      onClick={() => {
                        setProductOrderSelected(item);
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
                setProductOrderSelected({});
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </CModalHeader>
          <CModalBody style={{ padding: "20px" }}>
            <CRow>
              <CCol xs="0" lg="3"></CCol>
              <CCol xs="12" lg="8">
                <CFormGroup row style={{ margin: "0px" }}>
                  <CCol md="3">
                    <CLabel style={{ fontWeight: "bold" }}>Order ID</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">
                      {productOrderSelected.proOrderId}
                    </p>
                  </CCol>
                </CFormGroup>
                <CFormGroup row style={{ margin: "0px" }}>
                  <CCol md="3">
                    <CLabel style={{ fontWeight: "bold" }}>Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">
                      {productOrderSelected.name}
                    </p>
                  </CCol>
                </CFormGroup>
                <CFormGroup row style={{ margin: "0px" }}>
                  <CCol md="3">
                    <CLabel style={{ fontWeight: "bold" }}>phone</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">
                      {productOrderSelected.phone}
                    </p>
                  </CCol>
                </CFormGroup>
                <CFormGroup row style={{ margin: "0px" }}>
                  <CCol md="3">
                    <CLabel style={{ fontWeight: "bold" }}>Address</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">
                      {productOrderSelected.address}
                    </p>
                  </CCol>
                </CFormGroup>
                <CFormGroup row style={{ margin: "0px" }}>
                  <CCol md="3">
                    <CLabel style={{ fontWeight: "bold" }}>Total Price</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">
                      {productOrderSelected.totalPrice}
                    </p>
                  </CCol>
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="12">
                <CDataTable
                  items={orderDetail}
                  fields={productFields}
                  striped
                  border
                  itemsPerPage={20}
                  pagination
                  scopedSlots={{
                    address: (item) => {
                      <td style={{ maxWidth: "400px" }}>
                        {item}
                      </td>
                    },
                    actions: (item) => (
                      <td>
                        <CButton
                          onClick={() => {
                            setProductOrderSelected(item);
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
          </CModalBody>
          <CModalFooter>
            {productOrderType === "Unconfirmed" && (
              <>
                <CButton color="info" onClick={() => setShowModalDetail(false)}>
                  Confirmed
                </CButton>
                <CButton
                  color="danger"
                  onClick={() => setShowModalDetail(false)}
                >
                  Canceled
                </CButton>
              </>
            )}
          </CModalFooter>
        </CModal>
      </CCardBody>
    </CCard>
  );
};
export default ProductOrder;


const orderDetailData = [
  {
    no: 1,
    productId: "PRO001",
    name: "Product 01",
    price: 1000000,
    amount: 20,
    type: "Dog Food",
  },
  {
    no: 1,
    productId: "PRO001",
    name: "Product 01",
    price: 1000000,
    amount: 20,
    type: "Dog Food",
  },
  {
    no: 1,
    productId: "PRO001",
    name: "Product 01",
    price: 1000000,
    amount: 20,
    type: "Dog Food",
  },
  {
    no: 1,
    productId: "PRO001",
    name: "Product 01",
    price: 1000000,
    amount: 20,
    type: "Dog Food",
  },
];
const productFields = [
  { key: "no", label: "No", _style: { width: "5%" } },
  { key: "productId", label: "Product ID", _style: { width: "20%" } },
  { key: "name", label: "Product Name", _style: { width: "20%" } },
  { key: "price", label: "Price", _style: { width: "20%" } },
  { key: "amount", label: "Amount", _style: { width: "20%" } },
  { key: "type", label: "Product Type", _style: { width: "15%" } },
];
const fields = [
  { key: "no", label: "No", _style: { width: "5%" } },
  { key: "proOrderId", label: "Order ID", _style: { width: "10%" } },
  { key: "customerId", label: "Customer ID", _style: { width: "10%" } },
  { key: "phone", label: "Phone", _style: { width: "10%" } },
  { key: "name", label: "Name", _style: { width: "10%" } },
  { key: "address", label: "Address", _style: { width: "20%" } },
  { key: "totalPrice", label: "Total Price", _style: { width: "10%" } },
  { key: "orderDate", label: "Order Date", _style: { width: "10%" } },
  { key: "actions", _style: { width: "5%" } },
];
const PRODUCTORDERTYPE = ["Unconfirmed", "Confirmed", "Canceled"];

const usersData = [
  {
    no: 1,
    proOrderId: "ProOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
  {
    no: 1,
    proOrderId: "ProOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
  {
    no: 1,
    proOrderId: "ProOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
  {
    no: 1,
    proOrderId: "ProOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
  {
    no: 1,
    proOrderId: "ProOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
  {
    no: 1,
    proOrderId: "ProOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
  {
    no: 1,
    proOrderId: "ProOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
  {
    no: 1,
    proOrderId: "ProOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
  {
    no: 1,
    proOrderId: "ProOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
  {
    no: 1,
    proOrderId: "ProOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
  {
    no: 1,
    proOrderId: "ProOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
  {
    no: 1,
    proOrderId: "ProOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
  {
    no: 1,
    proOrderId: "ProOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
  {
    no: 1,
    proOrderId: "ProOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
];