import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  experimentalStyled,
  Container,
  Box,
  Switch,
  Button,
  useMediaQuery,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { TopbarHeight } from "../../assets/global/Theme-variable";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";




// import MySideBar from "./sidebar/MySideBar";

import Footer from "./footer/Footer";
const MainWrapper = experimentalStyled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  overflow: "hidden",
  width: "100%",
}));
const PageWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",

  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("lg")]: {
    paddingTop: TopbarHeight,
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: "64px",
  },
}));

const FullLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // let token = getToken();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const stateBar = useSelector(state => state.BarIcon)


  // const handleClick = () => {
  //   GETACCESSROUTES(token)
  //     .then((res) => dispatch(SetAccess(res)))
  //     .catch((error) => dispatch(SetAccess(error)));
  // };

  useEffect(() => {
    // let Token = JSON.parse(sessionStorage.getItem("Token"));
    // if (!Token) {
    //   navigate("auth/login", { replace: true });
    // }
    // handleClick();
  }, []);

  const headSideBarFun = () => {
    setSidebarOpen(!isSidebarOpen)
    dispatch({type: "barIcon", payload: !stateBar.burger })
    // console.log("run headSideBarFun")
  }

  const headMobileSidebarFun = () => {
    setMobileSidebarOpen(true)
    // console.log("run headMobileSidebarFun")
    dispatch({type: "barIcon", payload: !stateBar.mobileBurger })
  }

  const sideMobileSidebarFun  = () => {
    setMobileSidebarOpen(false)
    // console.log("run sideMobileSidebarFun")
    dispatch({type: "barIcon", payload: !stateBar.mobileBurger })

  }

  return (
    // <MainWrapper className={customizer.activeMode === "dark" ? "darkbg" : ""}>
    <MainWrapper className={"darkbg"}>
      <Header
        sx={{
          paddingLeft: isSidebarOpen && lgUp ? "265px" : "",
          backgroundColor: "#fafbfb",
        }}
        toggleSidebar={headSideBarFun}
        toggleMobileSidebar={headMobileSidebarFun}
      />
      <Sidebar
        isSidebardir={"left"}
        isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={sideMobileSidebarFun}
        toggleSidebar={headSideBarFun}
        toggleMobileSidebar={sideMobileSidebarFun}
      />

      {/* <MySideBar
      isSidebardir={"left"}
      isSidebarOpen={isSidebarOpen}
      isMobileSidebarOpen={isMobileSidebarOpen}
      onSidebarClose={() => setMobileSidebarOpen(false)}
       /> */}
      <PageWrapper>
        <Container
          maxWidth={false}
          sx={{
            paddingTop: "20px",
            paddingLeft: isSidebarOpen && lgUp ? "280px!important" : "",
          }}
        >
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
            <Outlet />
          </Box>
          {/* <Customizer /> */}
          <Footer />
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
};

export default FullLayout;
