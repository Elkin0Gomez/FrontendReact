import React from "react";
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import { cilBell, cilLockLocked } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

import avatar8 from "./../../assets/images/avatars/8.jpg";
import { useAuth } from "../../context/AuthContext.js";


const AppHeaderDropdown = () => {

  const { logout, user } = useAuth();
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Bienvenido
        </CDropdownHeader>
        <CDropdownItem>
          {user.username}
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem
          href="/login"
          onClick={() => {
            logout();
          }}
        >
          <CIcon icon={cilLockLocked} className="me-2" />
          Cerrar sesión
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
