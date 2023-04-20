import { Box, Button, styled, Typography } from "@mui/material";

import { Link } from "react-scroll";
import reactImg from "../media/react_svg.svg";

import React from "react";

const Hero = () => {
  const CustomButton = styled(Button)(({theme}) =>({
    border: "3px solid transparent",
    backgroundColor: "#00C7FF",
    color:"white",
    width: "20%",
    borderRadius: "25px",
    "&.hover":{
      border: "3px solid white",
      backgroundColor:"transparent",
    },
    [theme.breakpoints.down("5m")]: {
      width: "35%",
    },
  }));
  const CustomTitle = styled(Typography)(({theme}) =>({
    color:"white",
    textAlign:"center",
    [theme.breakpoints.down("md")]: {
      fontSize:"3.5rem",
    },
    [theme.breakpoints.down("5m")]: {
      fontSize:"2.5rem"
    },
  }));
  return(
    <Box 
        sx={{mt: 8,mb: 12, p: 2, maxWidth: "1200px", mx:"auto"}}
        id="home">
          <Typography sx={{color: "white", textAlign: "center", mb:2}} variant="h4">HELLO! I AM DEEPAKARTHIKA</Typography>
          <CustomTitle variant="h2">
            I enjoy <span style={{color: "black"}}>building</span>{" "}
            and<span style={{color:"black"}}> designing</span> for the web.
          </CustomTitle>
          <Box component={{display: "flex", flexDirection: "column" ,alignItems: "center" ,justifyContent: "center", gap: "1rem"}}></Box>
          {/* <Box 
          component="img" sx={{height: 150,width: 150,mt: 4,mb: 4}} src={reading}/> */}
        </Box>
  ) 
};

export default Hero;

