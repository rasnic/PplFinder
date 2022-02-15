import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const NavBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
useEffect(() =>{
  if (window.location.pathname ==="/") {
    setValue(0)
  }
  else setValue(1)
})
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
