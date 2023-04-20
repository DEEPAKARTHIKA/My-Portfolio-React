import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import navIcon from "../media/react_logo.png";
import { Link } from "react-scroll";
import { styled } from "@mui/system";



const Navbar = () => {
  const CustomBox =styled(Box)(({theme})=>({ 
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    gap:"1rem",
    [theme.breakpoints.down("5m")]: {
       marginTop:"2rem",
    },
  }));

  const CustomToolbar =styled(Box)(({theme})=>({ 
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    gap:"1rem",
    [theme.breakpoints.down("5m")]: {
       flexDirection:"column"
    },
  }));
  return <Box sx={{flexGrow: 1,px:5, py: 2, maxWidth: "1200px", mx:"auto"}}>
    <AppBar position="static" style={{background: "transparent", boxShadow: "none"}}>
      <CustomToolbar>
        <Box sx={{display:"flex",justifyContent: "center",alignItems: "center",gap:"1rem"}}>
          <Box component="img" sx={{maxHeight :"45px", maxWidth:"45px",objectFit:"cover"}} src={navIcon}></Box>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            My Portfolio
          </Typography>
        </Box>
        <CustomBox>
          <Link to="home" className="link" >Home</Link>
          <Link to="about" className="link" >About</Link>
          <Link to="contact" className="link" >Contact</Link>
        </CustomBox>
      </CustomToolbar>

    </AppBar>
  </Box>;
};

export default Navbar;
