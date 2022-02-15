import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const NavBar = () => {
  const [value, setValue] = useState(() =>{
    
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if(window.location.pathname === "/"){
    setValue(0);
  }
  else

  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Home" value={0} href="/"/>
        <Tab label="Favorites" value={1} href="/Favorites"/>
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
