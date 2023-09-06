import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Button, Link } from "@mui/material";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Superheroes", href: "/superhero" },
  { name: "RQSuperheroes", href: "/rqsuperhero" },
];

function Navbar() {
  return (
    <Box sx={{ display: "flex", textAlign: "center", alignItems: "center" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            {navItems.map((item) => (
              <Link
                sx={{ p: 1 }}
                key={item.name}
                href={item.href}
                style={{ color: "white" }}
              >
                <Button key={item} sx={{ color: "#fff" }}>
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default React.memo(Navbar);
