import React from "react";
import "./style.css"
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Box,
  Drawer,
  useMediaQuery,
  List,
  Typography,
  ListItem,
  Collapse,
  ListItemIcon,
  ListItemText,
  Avatar,
  Button
} from "@mui/material";
// import FeatherIcon from "feather-icons-react";
import "../../../css/Layout.css";
import Menuitems, { GiveIcon, Permission } from "./Menuitems";
import { SidebarWidth } from "../../../assets/global/Theme-variable";
import Scrollbar from "../../../components/custom-scroll/Scrollbar";
// import Logo from "../../../assets/images/LOGO/MY_UI.png";
import Logo from "../../../assets/images/LOGO/cercles.png"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSelector } from "react-redux";
import {IconButton} from "@mui/material";
import FeatherIcon from "feather-icons-react";
import logo from "../../../assets/images/RSFP-logo.png"




const Sidebar = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen, toggleMobileSidebar, toggleSidebar }) => {
  const [open, setOpen] = React.useState(true);
  const { pathname } = useLocation();
  const pathDirect = pathname;
  const pathWithoutLastPart = pathname;
  // const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf("/"));
  // console.log(pathname);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const showIcon = useSelector(state => state.BarIcon)


  // console.log({showIcon})

  const CheckSubLink = (pathDirect, item) =>  item?.sublink?.find((curElem, index) => {
    return pathDirect === curElem.route
  } )


  const handleClick = (index) => {
    if (open === index) {
      setOpen((prevopen) => !prevopen);
    } else {
      setOpen(index);
    }
  };

  const SidebarContent = (
    <Scrollbar style={{ height: "calc(100vh - 5px)" }}>
      <Box sx={{ p: 2 }}>
        <div className="Space_Between_Div">
          <Avatar
            src={logo}
            // alt={userimg}
            sx={{
              width: "auto",
              // height: "100%",
              borderRadius: "0",
            }}
          />
          <h2 style={{ color: "green", fontWeight: 600 }}>
          RSFP
          </h2> 

          {/* <Button onClick={onSidebarClose}>cross</Button> */}

          {showIcon.mobileBurger && <IconButton
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
        
        {showIcon.burger  && <IconButton
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
         }}>
         <FeatherIcon
            icon="menu"
            width="20"
            height="20"
            className="Black_Icon"
          /> 
         </IconButton>

        </div>
        {/* <div className=" P15 MTB20">
          <span className="logofont blue">MY UI </span>
        </div> */}
        <Box>
          <List
            sx={{
              my: 2,

            }}
          >

            {Menuitems && Menuitems.map((item, index) => {
              return (
                item.tabName !== "Organization" && (
                  <List component="li" disablePadding key={item.title}>
                    <ListItem
                      onClick={() => handleClick(index)}
                      button
                      component={NavLink}
                      to={item.route}
                      selected={pathDirect === item.route}
                      sx={{
                        padding: 0,
                        mb: 1,
                        ...(pathDirect === item.route && {
                          // color: "black",
                          backgroundColor: `transparent !important`,
                          // boxShadow: "0px 0px 8px -6px",
                          // borderRadius: "12px",
                        }),
                        //   backgroundColor: (theme) =>
                        //     `${theme.palette.primary.main}!important`,
                        // }),
                        ...(pathDirect === item.sublink && {
                          color: "white",
                          backgroundColor: (theme) =>
                            `${theme.palette.primary.main}!important`,
                        }),
                        ...(pathDirect === item.sublink1 && {
                          color: "white",
                          backgroundColor: (theme) =>
                            `${theme.palette.primary.main}!important`,
                        }),
                      }}
                    >

                          <ListItemIcon
                          className="sideBarIcon"
                            sx={{
                              minWidth: "30px",
                              ...(pathDirect === item.route && {
                                color: "#F04B28",
                              }),
                              ...(pathDirect === item.sublink && {
                                color: "white",
                              }),
                              ...(pathDirect === item.sublink1 && {
                                color: "white",
                              }),
                            }}

                          > 

                             
                             {item?.icon(pathDirect === item.route || CheckSubLink(pathDirect, item)   ? "#F04B28" : "#0E062E")}
                          </ListItemIcon>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: "500"
                            }}
                          >{item.title}</Typography>
{/*                           
                        </AccordionSummary>
                      </Accordion> */}



                    </ListItem>
                  </List>
                )
              );
            })}
          </List>
        </Box>
        {/* <Buynow /> */}
      </Box>
    </Scrollbar >
  );
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        variant="persistent"
        PaperProps={{
          sx: {
            width: SidebarWidth,
            border: "0 !important",
            boxShadow: "0px 7px 30px 0px rgb(113 122 131 / 11%)",
          },
        }}
      >
        {SidebarContent}
      </Drawer>
    );
  }
  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      PaperProps={{
        sx: {
          width: SidebarWidth,
          border: "0 !important",
        },
      }}
      variant="temporary"
    >
      {SidebarContent}
    </Drawer>
  );
};

Sidebar.propTypes = {
  isMobileSidebarOpen: PropTypes.bool,
  onSidebarClose: PropTypes.func,
  isSidebarOpen: PropTypes.bool,
};

export default Sidebar;





// {Menuitems
//   ? Menuitems.map((item, index) => {
//     if (item.subheader) {
//       return (
//         <li key={item.subheader}>
//           <Typography
//             variant="subtabName2"
//             fontWeight="500"
//             sx={{ my: 2, mt: 4, opacity: "0.4" }}
//           >
//             {item.subheader}
//           </Typography>
//         </li>
//       );
//     } else if (item.children) {
//       return (
//         <React.Fragment key={item.title}>
//           <ListItem
//             button
//             component="li"
//             onClick={() => handleClick(index)}
//             selected={pathWithoutLastPart === item.route}
//             sx={{
//               mb: 1,
//               ...(pathWithoutLastPart === item.route && {
//                 color: "white",
//                 backgroundColor: (theme) =>
//                   `${theme.palette.primary.main}!important`,
//               }),
//             }}
//           >
//             <ListItemIcon
//               sx={{
//                 ...(pathWithoutLastPart === item.route && {
//                   color: "white",
//                 }),
//               }}
//             >
//               <FeatherIcon
//                 icon={item?.icon}
//                 width="20"
//                 height="20"
//               />
//             </ListItemIcon>
//             borderRadius: "30px",
//             <ListItemText>{item.tabName}</ListItemText>
//             {index === open ||
//               pathWithoutLastPart === item.route ? (
//               <FeatherIcon icon="chevron-down" size="16" />
//             ) : (
//               <FeatherIcon icon="chevron-right" size="16" />
//             )}
//           </ListItem>
//           <Collapse
//             in={index === open}
//             timeout="auto"
//             unmountOnExit
//           >
//             <List component="li" disablePadding>
//               {item.children.map((child) => {
//                 return (
//                   <ListItem
//                     key={child.tabName}
//                     button
//                     component={NavLink}
//                     to={child.route}
//                     onClick={onSidebarClose}
//                     selected={pathDirect === child.route}
//                     sx={{
//                       mb: 1,
//                       ...(pathDirect === child.route && {
//                         color: "primary.main",
//                         backgroundColor: "transparent!important",
//                       }),
//                     }}
//                   >
//                     <ListItemIcon
//                       sx={{
//                         svg: { width: "14px", marginLeft: "3px" },
//                         ...(pathDirect === child.route && {
//                           color: "primary.main",
//                         }),
//                       }}
//                     >
//                       <FeatherIcon
//                         icon={child.icon}
//                         width="20"
//                         height="20"
//                       />
//                     </ListItemIcon>
//                     <ListItemText>{child.title}</ListItemText>
//                   </ListItem>
//                 );
//               })}
//             </List>
//           </Collapse>
//         </React.Fragment>
//       );
//       // {/********If Sub No Menu**********/}
//     } else {
//       return (
//         item.tabName !== "Organization" && (
//           <List component="li" disablePadding key={item.title}>
//             <ListItem
//               onClick={() => handleClick(index)}
//               button
//               component={NavLink}
//               to={item.route}
//               selected={pathDirect === item.route}
//               sx={{
//                 padding: 0,
//                 mb: 1,
//                 ...(pathDirect === item.route && {
//                   // color: "black",
//                   backgroundColor: `transparent !important`,
//                   // boxShadow: "0px 0px 8px -6px",
//                   // borderRadius: "12px",
//                 }),
//                 //   backgroundColor: (theme) =>
//                 //     `${theme.palette.primary.main}!important`,
//                 // }),
//                 ...(pathDirect === item.sublink && {
//                   color: "white",
//                   backgroundColor: (theme) =>
//                     `${theme.palette.primary.main}!important`,
//                 }),
//                 ...(pathDirect === item.sublink1 && {
//                   color: "white",
//                   backgroundColor: (theme) =>
//                     `${theme.palette.primary.main}!important`,
//                 }),
//               }}
//             >

//               {/* <ListItemText onClick={onSidebarClose}>
//                 {item.title} 
//               </ListItemText> */}


//               <Accordion 
//               // onClick={onSidebarClose}
//                sx={{
//                 padding: 0,
//                 // border: "none",
//                 boxShadow: "none",
//                 background: "none",
//                 width: "100%"
//               }} >
//                 <AccordionSummary
//                   expandIcon={<ExpandMoreIcon />}
//                   aria-controls="panel1a-content"
//                   id="panel1a-header"
//                   sx={{
//                     padding: "0px 10px",
//                     border: "none",
//                     boxShadow: "none",
//                     // minWidth : "30px"
//                     mb: 1,
//                     ...(pathDirect === item.route && {
//                       color: "black",
//                       backgroundColor: `transparent !important`,
//                       boxShadow: "0px 0px 8px -6px",
//                       borderRadius: "12px",
//                     }),
//                   }}
//                 >
//                   <ListItemIcon
//                   className="sideBarIcon"
//                     sx={{
//                       minWidth: "30px",
//                       ...(pathDirect === item.route && {
//                         color: "#F04B28",
//                       }),
//                       ...(pathDirect === item.sublink && {
//                         color: "white",
//                       }),
//                       ...(pathDirect === item.sublink1 && {
//                         color: "white",
//                       }),
//                     }}

//                   > 
//                     {/* <FeatherIcon
//                       icon={item?.icon}
//                       width="20"
//                       height="20"
//                     /> */}

//                     {/* {<>{item.icon}</>} */}

//                     {/* <FontAwesomeIcon icon={item?.icon} style={{ height: "16px" }}/> */}

//                      {/* {console.log("Routes ==>", pathDirect, item.route, pathDirect === item.route )} */}
                     
//                      {item?.icon(pathDirect === item.route || CheckSubLink(pathDirect, item)   ? "#F04B28" : "#0E062E")}
//                   </ListItemIcon>


//                   <Typography
//                     sx={{
//                       fontSize: "16px",
//                       fontWeight: "500"
//                     }}
//                   >{item.title}</Typography>
//                 </AccordionSummary>

//                 <AccordionDetails>


//                   <Box>
//                     <List
//                       sx={{
//                         // my: 2,
//                       }}>
//                       {item.sublink.map((ele, ind) => {
//                         return <List component="li" disablePadding key={ele.title}>
//                           <ListItem
//                             onClick={() => handleClick(ind)}
//                             button
//                             component={NavLink}
//                             to={ele.route}
//                             selected={pathDirect === ele.route}
//                             sx={{
//                               // padding: 0,
//                               padding: "10px 0px 10px 8px",
//                               borderRadius: "7px",
//                               mb: 2,
//                               ...(pathDirect === ele.route && {
//                                 // color: "black",
//                                 backgroundColor: `#F8F8F8 !important`,
//                                 // boxShadow: "0px 0px 8px -6px",
//                                 // borderRadius: "12px",
//                               }),
//                               //   backgroundColor: (theme) =>
//                               //     `${theme.palette.primary.main}!important`,
//                               // }),
//                               ...(pathDirect === ele.sublink && {
//                                 color: "white",
//                                 backgroundColor: (theme) =>
//                                   `${theme.palette.primary.main}!important`,
//                               }),
//                               ...(pathDirect === ele.sublink1 && {
//                                 color: "white",
//                                 backgroundColor: (theme) =>
//                                   `${theme.palette.primary.main}!important`,
//                               }),
//                             }}
//                           >


//                             <ListItemIcon
//                               sx={{
//                                 minWidth: "30px",
//                                 ...(pathDirect === ele.route && {
//                                   // color: "#F04B28",
//                                   // backgroundColor: "#F04B28"
//                                 }),
//                                 ...(pathDirect === ele.sublink && {
//                                   color: "white",
//                                 }),
//                                 ...(pathDirect === ele.sublink1 && {
//                                   color: "white",
//                                 }),
//                               }}
//                             >
//                               <FeatherIcon
//                                 icon={ele?.icon}
//                                 width="8"
//                                 height="8"
//                                 // color="#979797"
//                                 style={{
//                                   backgroundColor: pathDirect === ele.route ? "#F04B28" : "#979797",
//                                   color: pathDirect === ele.route ? "#F04B28" : "#979797",
//                                   borderRadius: "50%"
//                                 }}
//                               />

//                               {/* change item.icon */}
//                             </ListItemIcon>


//                             <Typography
//                               sx={{
//                                 fontSize: "16px",
//                                 fontWeight: "500",
//                                 color: pathDirect === ele.route ? "black" : "#979797"
//                               }}
//                             >{ele.title}</Typography>


//                           </ListItem>
//                         </List>

//                         // <div key={index}>
//                         //   <h1>{ele.title}</h1>
//                         // </div>
//                       })}


//                     </List>
//                   </Box>




//                   {/* <List component="li" disablePadding key={item.title}>
//                     <ListItem
//                       onClick={() => handleClick(index)}
//                       button
//                       component={NavLink}
//                       to={item.route}
//                       selected={pathDirect === item.route}
//                       sx={{
//                         padding: 0,
//                         mb: 1,
//                         ...(pathDirect === item.route && {
//                           // color: "black",
//                           backgroundColor: `transparent !important`,
//                           // boxShadow: "0px 0px 8px -6px",
//                           // borderRadius: "12px",
//                         }),
//                         //   backgroundColor: (theme) =>
//                         //     `${theme.palette.primary.main}!important`,
//                         // }),
//                         ...(pathDirect === item.sublink && {
//                           color: "white",
//                           backgroundColor: (theme) =>
//                             `${theme.palette.primary.main}!important`,
//                         }),
//                         ...(pathDirect === item.sublink1 && {
//                           color: "white",
//                           backgroundColor: (theme) =>
//                             `${theme.palette.primary.main}!important`,
//                         }),
//                       }}
//                     >

//                     </ListItem>
//                   </List> */}


//                   {/* <Typography>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                     malesuada lacus ex, sit amet blandit leo lobortis eget.
//                   </Typography> */}
//                 </AccordionDetails>

//               </Accordion>



//             </ListItem>
//           </List>
//         )
//       );
//     }
//   })
//   : ""}
