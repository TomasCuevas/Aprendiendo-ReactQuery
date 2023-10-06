import { NavLink } from "react-router-dom";

//* NEXTUI *//
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

//* LOGO *//
import { AcmeLogo } from "./AcmeLogo";

//* ROUTES *//
const routes = [
  { to: "/", text: "Todo" },
  { to: "/men", text: "Hombres" },
  { to: "/women", text: "Mujeres" },
];

//* STYLES *//
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {routes.map(({ to, text }) => (
          <NavbarItem key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
            >
              {text}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={NavLink} color="primary" to="/new" variant="flat">
            Nuevo producto
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
