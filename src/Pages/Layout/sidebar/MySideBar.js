// import React from "react";
// import { useLocation } from "react-router";
// import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";
// import {
//   Box,
//   Drawer,
//   useMediaQuery,
//   List,
//   Typography,
//   ListItem,
//   Collapse,
//   ListItemIcon,
//   ListItemText,
//   Avatar,
// } from "@mui/material";
// import FeatherIcon from "feather-icons-react";
// import "../../../css/Layout.css";
// import Menuitems, { GiveIcon, Permission } from "./Menuitems";
// import { SidebarWidth } from "../../../assets/global/Theme-variable";
// import Scrollbar from "../../../components/custom-scroll/Scrollbar";
// // import Logo from "../../../assets/images/LOGO/MY_UI.png";
// import Logo from "../../../assets/images/LOGO/cercles.png"


// const MySideBar = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen }) => {
//   const [open, setOpen] = React.useState(true);
//   const { pathname } = useLocation();
//   const pathDirect = pathname;
//   const pathWithoutLastPart = pathname;
//   // const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf("/"));
//   // console.log(pathname);
//   const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

//   const handleClick = (index) => {
//     if (open === index) {
//       setOpen((prevopen) => !prevopen);
//     } else {
//       setOpen(index);
//     }
//   };

//   // const SidebarContent = (
//   //   <Scrollbar style={{ height: "calc(100vh - 5px)" }}>

      
//   //     <Box sx={{ p: 2 }}>
//   //       <div className="Start_Div">
//   //         <Avatar
//   //           src={Logo}
//   //           // alt={userimg}
//   //           sx={{
//   //             width: "auto",
//   //             // height: "100%",
//   //             borderRadius: "0",
//   //           }}
//   //         />
//   //       </div>
//   //       {/* <div className=" P15 MTB20">
//   //         <span className="logofont blue">MY UI </span>
//   //       </div> */}
//   //       <Box>
//   //         <List>
//   //           {Menuitems
//   //             ? Menuitems.map((item, index) => {
//   //               if (item.subheader) {
//   //                 return (
//   //                   <li key={item.subheader}>
//   //                     <Typography
//   //                       variant="subtabName2"
//   //                       fontWeight="500"
//   //                       sx={{ my: 2, mt: 4, opacity: "0.4" }}
//   //                     >
//   //                       {item.subheader}
//   //                     </Typography>
//   //                   </li>
//   //                 );
//   //               } else if (item.children) {
//   //                 return (
//   //                   <React.Fragment key={item.title}>
//   //                     <ListItem
//   //                       button
//   //                       component="li"
//   //                       onClick={() => handleClick(index)}
//   //                       selected={pathWithoutLastPart === item.route}
//   //                       sx={{
//   //                         mb: 1,
//   //                         ...(pathWithoutLastPart === item.route && {
//   //                           color: "white",

//   //                           backgroundColor: (theme) =>
//   //                             `${theme.palette.primary.main}!important`,
//   //                         }),
//   //                       }}
//   //                     >
//   //                       <ListItemIcon
//   //                         sx={{
//   //                           ...(pathWithoutLastPart === item.route && {
//   //                             color: "white",
//   //                           }),
//   //                         }}
//   //                       >
//   //                         <FeatherIcon
//   //                           icon={item?.icon}
//   //                           width="20"
//   //                           height="20"
//   //                         />
//   //                         {/* item.icon change */}
//   //                       </ListItemIcon>
//   //                       borderRadius: "30px",
//   //                       <ListItemText>{item.tabName}</ListItemText>
//   //                       {index === open ||
//   //                         pathWithoutLastPart === item.route ? (
//   //                         <FeatherIcon icon="chevron-down" size="16" />
//   //                       ) : (
//   //                         <FeatherIcon icon="chevron-right" size="16" />
//   //                       )}
//   //                     </ListItem>
//   //                     <Collapse
//   //                       in={index === open}
//   //                       timeout="auto"
//   //                       unmountOnExit
//   //                     >
//   //                       <List component="li" disablePadding>
//   //                         {item.children.map((child) => {
//   //                           return (
//   //                             <ListItem
//   //                               key={child.tabName}
//   //                               button
//   //                               component={NavLink}
//   //                               to={child.route}
//   //                               onClick={onSidebarClose}
//   //                               selected={pathDirect === child.route}
//   //                               sx={{
//   //                                 mb: 1,
//   //                                 ...(pathDirect === child.route && {
//   //                                   color: "primary.main",
//   //                                   backgroundColor: "transparent!important",
//   //                                 }),
//   //                               }}
//   //                             >
//   //                               <ListItemIcon
//   //                                 sx={{
//   //                                   svg: { width: "14px", marginLeft: "3px" },
//   //                                   ...(pathDirect === child.route && {
//   //                                     color: "primary.main",
//   //                                   }),
//   //                                 }}
//   //                               >
//   //                                 <FeatherIcon
//   //                                   icon={child.icon}
//   //                                   width="20"
//   //                                   height="20"
//   //                                 />
//   //                               </ListItemIcon>
//   //                               <ListItemText>{child.title}</ListItemText>
//   //                             </ListItem>
//   //                           );
//   //                         })}
//   //                       </List>
//   //                     </Collapse>
//   //                   </React.Fragment>
//   //                 );
//   //                 // {/********If Sub No Menu**********/}
//   //               } else {
//   //                 return (
//   //                   item.tabName !== "Organization" && (
//   //                     <List component="li" disablePadding key={item.title}>
//   //                       <ListItem
//   //                         onClick={() => handleClick(index)}
//   //                         button
//   //                         component={NavLink}
//   //                         to={item.route}
//   //                         selected={pathDirect === item.route}
//   //                         sx={{
//   //                           mb: 1,
//   //                           ...(pathDirect === item.route && {
//   //                             color: "white",
//   //                             backgroundColor: (theme) =>
//   //                               `${theme.palette.primary.main}!important`,
//   //                           }),
//   //                           ...(pathDirect === item.sublink && {
//   //                             color: "white",
//   //                             backgroundColor: (theme) =>
//   //                               `${theme.palette.primary.main}!important`,
//   //                           }),
//   //                           ...(pathDirect === item.sublink1 && {
//   //                             color: "white",
//   //                             backgroundColor: (theme) =>
//   //                               `${theme.palette.primary.main}!important`,
//   //                           }),
//   //                         }}
//   //                       > 
//   //                         <ListItemIcon
//   //                           sx={{
//   //                             ...(pathDirect === item.route && {
//   //                               color: "white",
//   //                             }),
//   //                             ...(pathDirect === item.sublink && {
//   //                               color: "white",
//   //                             }),
//   //                             ...(pathDirect === item.sublink1 && {
//   //                               color: "white",
//   //                             }),
//   //                           }}
//   //                         >
//   //                           <FeatherIcon
//   //                             icon={item?.icon}
//   //                             width="20"
//   //                             height="20"
//   //                           />
//   //                           {/* change item.icon */}
//   //                         </ListItemIcon>
//   //                         <ListItemText onClick={onSidebarClose}>
//   //                           {item.title}
//   //                         </ListItemText>
//   //                       </ListItem>
//   //                     </List>
//   //                   )
//   //                 );
//   //               }
//   //             })
//   //             : ""}
//   //         </List>
//   //       </Box>
//   //       {/* <Buynow /> */}
//   //     </Box>
//   //   </Scrollbar>
//   // );
//   if (lgUp) {
//     return (
//       <Drawer
//         anchor="left"
//         open={isSidebarOpen}
//         variant="persistent"
//         PaperProps={{
//           sx: {
//             width: SidebarWidth,
//             border: "0 !important",
//             boxShadow: "0px 7px 30px 0px rgb(113 122 131 / 11%)",
//           },
//         }}
//       >
//         {/* {SidebarContent} */}
//       </Drawer>
//     );
//   }
//   return (
//     <Drawer
//       anchor="left"
//       open={isMobileSidebarOpen}
//       onClose={onSidebarClose}
//       PaperProps={{
//         sx: {
//           width: SidebarWidth,
//           border: "0 !important",
//         },
//       }}
//       variant="temporary"
//     >
//       {/* {SidebarContent} */}
//     </Drawer>
//   );
// };

// MySideBar.propTypes = {
//   isMobileSidebarOpen: PropTypes.bool,
//   onSidebarClose: PropTypes.func,
//   isSidebarOpen: PropTypes.bool,
// };

// export default MySideBar;
