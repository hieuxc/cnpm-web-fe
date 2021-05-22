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

const ServiceOrder = () => {
  const [serviceOrder, setserviceOrder] = useState(usersData);
  const [serviceOrderSelected, setserviceOrderSelected] = useState({});
  return (
    <CCard accentColor="success">
      <CCardHeader>
        <CRow>
          <CCol>
            <h3>Service Order</h3>
          </CCol>
        </CRow>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol xs="12">
            <CDataTable
              items={serviceOrder}
              fields={fields}
              striped
              border
              itemsPerPage={5}
              pagination
              scopedSlots={{
                actions: (item) => (
                  <td>
                    <CButton
                      onClick={() => {
                        // setserviceOrderSelected(item);
                        // setShowModalDetail(true);
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
      </CCardBody>
    </CCard>
  );
};
export default ServiceOrder;

const fields = [
  { key: "no", label: "No", _style: { width: "5%" } },
  { key: "proOrderId", label: "Order ID", _style: { width: "10%" } },
  { key: "customerId", label: "Customer ID", _style: { width: "10%" } },
  { key: "phone", label: "Phone", _style: { width: "10%" } },
  { key: "name", label: "Name", _style: { width: "10%" } },
  { key: "address", label: "Address", _style: { width: "20%" } },
  { key: "totalPrice", label: "Total Price", _style: { width: "10%" } },
  { key: "orderDate", label: "Order Date", _style: { width: "10%" } },
  // { key: "actions", _style: { width: "5%" } },
];

const usersData = [
  {
    no: 1,
    proOrderId: "SerOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
  {
    no: 1,
    proOrderId: "SerOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
  {
    no: 1,
    proOrderId: "SerOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
  {
    no: 1,
    proOrderId: "SerOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
  {
    no: 1,
    proOrderId: "SerOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
  {
    no: 1,
    proOrderId: "SerOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
  {
    no: 1,
    proOrderId: "SerOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
  {
    no: 1,
    proOrderId: "SerOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
  {
    no: 1,
    proOrderId: "SerOrder001",
    customerId: "Customer001",
    phone: "0987654321",
    name: "le duong hung",
    address: "jaeghrufyqefeyqfuddddddddddd vvfvfvf frfrfrfr frfr ddqeifgufuge",
    totalPrice: 3000000,
    orderDate: "22/2/2020",
  },
];