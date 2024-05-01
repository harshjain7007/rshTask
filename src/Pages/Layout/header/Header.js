import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import "./style.css"
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Menu,
  Typography,
  Avatar,
  Button,
  TextField
} from "@mui/material";
import "../../../css/App.css";

import PropTypes from "prop-types";
import ProfileDropdown from "./ProfileDropdown";
import { isObjectEmpty } from "../../../components/Const";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useLocation } from "react-router-dom";
import { searchText } from "../../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { txt, clearSearchText } from "../../../redux/Slice/stateSlice";
import { Auth_Token } from "../../../Global/Const";
import { resetLoginState } from "../../../redux/Slice/authSlice";


const Header = ({ sx, customClass, toggleSidebar, toggleMobileSidebar }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [adminData, setAdminData] = React.useState({});
  const [checkSearch, setCheckSearch] = React.useState(false)
  const stateBar = useSelector(state => state.BarIcon)
  const selectorStateSearch = useSelector(state => state.searchText.searchTxt)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const userimg = "dfs";
  const location = useLocation()

  // console.log({stateBar})

  // console.log("selectorState===>", selectorStateSearch);

  // console.log({location})

  // console.log("text==>", text)

  useEffect(()=> {
        if (location.pathname === '/admin/users' || location.pathname === '/manage-listings' || location.pathname === '/admin/listings' || location.pathname === '/admin/manage-admin' || location.pathname === '/admin/listings/summary-list') {
          setCheckSearch(true);
        } else {
          setCheckSearch(false);
        }

        dispatch(clearSearchText());


  }, [location?.pathname])


  // useEffect(() => {
  //   console.log('Session_token==>', Session_token, sessionStorage.getItem("token"));
  // },[])


  // console.log("checkSearch", checkSearch);



  const [Token, setToken] = useState(
    JSON.parse(sessionStorage.getItem("Token"))
  );
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogutExecutive = () => {
    sessionStorage.clear()
    localStorage.clear();
    dispatch(resetLoginState())
    navigate("/login"); 
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // 2
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  // 4
  const [anchorEl4, setAnchorEl4] = React.useState(null);

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  // drawer
  const [showDrawer, setShowDrawer] = useState(false);

  const handleDrawerClose = () => {
    setShowDrawer(false);
  };

  // drawer top
  const [showDrawer2, setShowDrawer2] = useState(false);

  const handleDrawerClose2 = () => {
    setShowDrawer2(false);
  };
  // const token = getToken();
  // function GetAdminData() {
  //   GETADMINDATA("retrive/profile", setAdminData, token);
  // }
  // useEffect(() => {
  //   GetAdminData();
  // }, [isProfileChange]);
  // console.log("location.pathname== >", location.pathname)
  return (
    <AppBar sx={sx} elevation={0} className={customClass}>
      <Toolbar
        style={{
          width: "93%",
          alignSelf: "center",
          borderRadius: "10px",
          marginTop: "2%",
          boxShadow: "0px 7px 30px 0px rgb(90 114 123 / 11%)",
        }}
      >

        {stateBar.burger && <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
          size="large"
          sx={{
            display: {
              lg: "flex",
              xs: "none",
            },
          }}
        > 
          <FeatherIcon icon="menu" className="Black_Icon" />
          </IconButton>}
          {stateBar.mobileBurger && <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "flex",
            },
          }}
        >
          <FeatherIcon
            icon="menu"
            width="20"
            height="20"
            className="Black_Icon"
          /> 
        </IconButton> }
        {/* { location.pathname !== "/users/create-user" && location.pathname !== "/users/admin-permission" ? <Box> */}
        { checkSearch ? <Box>
          <div className="headSearchDiv">
            <input type="search" className="headSearch" placeholder="Search" 
            // onChange={(e) => dispatch({type: "txt", payload: e.target.value})}
            onChange={(e) => dispatch(txt(e.target.value))}
            value={selectorStateSearch}
             />
            <SearchRoundedIcon sx={{
              color: "black", ml: 1, backgroundColor: "#F04B28",
              borderRadius: "50%",
              color: "white",
              padding: "5px"
            }} />
          </div>
        </Box> : ""}
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "flex",
            },
          }}
        ></IconButton>

        <Box flexGrow={1} />

        <Button
          aria-label="menu"
          color="inherit"
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={handleClick4}
        >
          <Box display="flex" alignItems="center">
            {isObjectEmpty(adminData?.team) ? (
              <Avatar
                sx={{
                  width: "40px",
                  height: "40px",
                }}
              >
                {adminData?.team?.name.charAt(0).toUpperCase()}
              </Avatar>
            ) : (
              <Avatar
                src={adminData?.admin?.logo}
                alt={userimg}
                sx={{
                  width: "40px",
                  height: "40px",
                }}
              />
            )}
          </Box>
        </Button>
        <Menu
          id="profile-menu"
          anchorEl={anchorEl4}
          keepMounted
          open={Boolean(anchorEl4)}
          onClose={handleClose4}
          sx={{
            "& .MuiMenu-paper": {
              width: "385px",
              right: 0,
              top: "70px !important",
            },
            "& .MuiList-padding": {
              p: "30px",
            },
          }}
        > 
          <Box
            sx={{
              mb: 1,
            }}
          >
            <Box display="flex" alignItems="center">
              <Typography variant="h4" fontWeight="500">
                Profile
              </Typography>
            </Box>
          </Box>

          <ProfileDropdown adminData={adminData} toggle={handleClose4} />
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/auth/login"
          >
            <Button
              sx={{
                mt: 2,
                display: "block",
                width: "100%",
              }}
              variant="contained"
              color="primary"
              onClick={handleLogutExecutive}
            >
              Logout
            </Button>
          </Link>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
  customClass: PropTypes.string,
  toggleSidebar: PropTypes.func,
  toggleMobileSidebar: PropTypes.func,
};

export default Header;
