import React from "react";
import CIcon from "@coreui/icons-react";
import { cilClipboard, cilPlus, cilUser, cilUserPlus } from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const sidebarnav = [

  
  {
    component: CNavTitle,
    name: "Contenido",
  },
  {
    component: CNavGroup,
    name: "Contratos",
    to: "/",
    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Crear Contrato",
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
        to: "/crearContrato",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Usuarios",
    to: "/base",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Crear Usuario",
        icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
        to: "/register",
      },
    ],
  },
];

export default sidebarnav;
