// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import { faUser } from "@fortawesome/free-regular-svg-icons";
// import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

// import { faTableList } from "@fortawesome/free-solid-svg-icons";


import { ManageUser, ManageListing, ManageAdmin, ManageBooking, Location, Nodification, Message, Amenity } from "../../../assets/svgs/Svg";

 


const Menuitems = [
  { 
    title: "Dashboard",
    icon: ManageUser,
    // icon: <AccountCircleOutlinedIcon />,
    route: "/dashboard",
    // sublink: "/user-verification-detail",
    sublink: [{
      title: "Users",
      icon: "circle",
      route: "/admin/users",
    },{
      title: "Summary Metrics",
      icon: "circle",
      route: "/admin/users/summary-metrics",
    },{
      title: "Summary List",
      icon: "circle",
      route: "/admin/users/summary-list",
    }
    ,{
      title: "Add Privileges",
      icon: "circle",
      route: "/admin/users/add-privileges",
    }
  ]
  },


  // {
  //   title: "Manage Listings",
  //   // icon: "circle",
  //   icon: ManageListing,
  //   route: "/admin/listings",
  //   sublink: [{
  //     title: "Listing",
  //     icon: "circle",
  //     route: "/admin/listings",
  //   },{
  //     title: "Summary Metrics",
  //     icon: "circle",
  //     route: "/admin/listings/summary-metrics",
  //   },{
  //     title: "Summary List",
  //     icon: "circle",
  //     route: "/admin/listings/summary-list",
  //   }],
  // },



  // {
  //   title: "Manage Admin",
  //   icon: ManageAdmin,
  //   route: "/admin/manage-admin",
  //    sublink: [{
  //     title: "Admins",
  //     icon: "circle",
  //     route: "/admin/manage-admin",
  //   }
  // ],
  // },


  // {
  //   title: "Manage Bookings",
  //   icon: ManageBooking,
  //   route: "/admin/bookings",
  //    sublink: [{
  //     title: "Bookings",
  //     icon: "circle",
  //     route: "/admin/bookings",
  //   },{
  //     title: "Summary Metrics",
  //     icon: "circle",
  //     route: "/admin/bookings/summary-metrics",
  //   }
  //   // ,{
  //   //   title: "Summary List",
  //   //   icon: "circle",
  //   //   route: "/summary-list",
  //   // }
  // ],
  //   // sublink: "/user-verification-detail",
  // },


  // {
  //   title: "Travel Plans",
  //   icon: Location,
  //   route: "/travel-plan",
  //    sublink: [{
  //     title: "Travel Plans",
  //     icon: "circle",
  //     route: "/users",
  //   }
  //   // ,{
  //   //   title: "Summary Metrics",
  //   //   icon: "circle",
  //   //   route: "/summary-metrics",
  //   // },{
  //   //   title: "Summary List",
  //   //   icon: "circle",
  //   //   route: "/summary-list",
  //   // }
  // ],
  //   // sublink: "/user-verification-detail",
  // },

  // {
  //   title: "Notifications",
  //   icon: Nodification,
  //   route: "/admin/notifications",
  //    sublink: [{
  //     title: "Notifications",
  //     icon: "circle",
  //     route: "/admin/notifications",
  //   }
  //   // ,{
  //   //   title: "Summary Metrics",
  //   //   icon: "circle",
  //   //   route: "/admin/notifications/summary-metrics",
  //   // },{
  //   //   title: "Summary List",
  //   //   icon: "circle",
  //   //   route: "/admin/notifications/summary-list",
  //   // }
  // ],
  //   // sublink: "/user-verification-detail",
  // },


  // {
  //   title: " Amenity",
  //   icon: Amenity,
  //   route: "/admin/amenity",
  //    sublink: [{
  //     title: "Amenity",
  //     icon: "circle",
  //     route: "/admin/amenity",
  //   }
  //   // ,{
  //   //   title: "Summary Metrics",
  //   //   icon: "circle",
  //   //   route: "/summary-metrics",
  //   // },{
  //   //   title: "Summary List",
  //   //   icon: "circle",
  //   //   route: "/summary-list",
  //   // }
  // ],
  //   // sublink: "/user-verification-detail",
  // },

  // {
  //   title: "Messages",
  //   icon: Message,
  //   route: "/message",
  //    sublink: [{
  //     title: "Messages",
  //     icon: "circle",
  //     route: "/users",
  //   }
  //   // ,{
  //   //   title: "Summary Metrics",
  //   //   icon: "circle",
  //   //   route: "/summary-metrics",
  //   // },{
  //   //   title: "Summary List",
  //   //   icon: "circle",
  //   //   route: "/summary-list",
  //   // }
  // ],
  //   // sublink: "/user-verification-detail",
  // },




];

export const Settingitems = [];

export default Menuitems;

export function GiveIcon(name, give) {
  const menuItem = Menuitems.find(
    (data) => data.title.toLowerCase() === name.toLowerCase()
  );
  if (menuItem) {
    return menuItem[give];
  }
  return "circle";
}
export function GiveSubs(arr, name, give) {
  const menuItem = arr.find(
    (data) => data.tabName.toLowerCase() === name.toLowerCase()
  );
  if (menuItem) {
    return menuItem[give];
  }
  // return [];
}
export const Permission = [
  {
    route: "/dashboard",
    tabName: "Dashboard",
    subs: [
      {
        api: "/dashboard",
        name: "View",
        route: "/dashboard",
        _id: "64919d37b5ef262abf9ee3b0",
      },
    ],
    _id: "64919d37b5ef262abf9ee3af",
  },
  {
    route: "/user-management",
    tabName: "User",
    subs: [
      {
        api: "/user/retrive/all",
        name: "View",
        route: "/user-management",
        _id: "64919d37b5ef262abf9ee3b2",
      },
      {
        api: "/user/retrive/all",
        name: "Edit",
        route: "/user-management",
        _id: "64919d37b5ef262abf9ee3b3",
      },
      {
        api: "/user/retrive/all",
        name: "Delete",
        route: "/user-management",
        _id: "64919d37b5ef262abf9ee3b4",
      },
    ],
    _id: "64919d37b5ef262abf9ee3b1",
  },
  {
    route: "/team-management",
    tabName: "Team",
    subs: [
      {
        api: "/team/retrive/all",
        name: "View",
        route: "/team-management",
        _id: "64919d37b5ef262abf9ee3b6",
      },
      {
        api: "/team/retrive/all",
        name: "Delete",
        route: "/team-management",
        _id: "64919d37b5ef262abf9ee3b7",
      },
      {
        api: "/team/retrive/all",
        name: "Edit",
        route: "/team-management",
        _id: "64919d37b5ef262abf9ee3b8",
      },
    ],
    _id: "64919d37b5ef262abf9ee3b5",
  },
  {
    route: "/organization",
    tabName: "Organization",
    subs: [
      {
        api: "/2FADetails",
        name: "View",
        route: "/organization",
        _id: "64919d37b5ef262abf9ee3ba",
      },
      {
        api: "/2FADetails",
        name: "Edit",
        route: "/organization",
        _id: "64919d37b5ef262abf9ee3bb",
      },
    ],
    _id: "64919d37b5ef262abf9ee3b9",
  },
  {
    route: "/subscription",
    tabName: "Subscription",
    subs: [
      {
        api: "/payHistory",
        name: "Edit",
        route: "/subscription",
        _id: "64919d37b5ef262abf9ee3bd",
      },
      {
        api: "/payHistory",
        name: "View",
        route: "/subscription",
        _id: "64919d37b5ef262abf9ee3be",
      },
    ],
    _id: "64919d37b5ef262abf9ee3bc",
  },
  {
    route: "/data-retention",
    tabName: "Data retention",
    subs: [
      {
        api: "/update/retentionPeriod",
        name: "View",
        route: "/data-retention",
        _id: "64919d37b5ef262abf9ee3c0",
      },
      {
        api: "/update/retentionPeriod",
        name: "Edit",
        route: "/data-retention",
        _id: "64919d37b5ef262abf9ee3c1",
      },
    ],
    _id: "64919d37b5ef262abf9ee3bf",
  },
  {
    route: "/api-setting",
    tabName: "Api Settings",
    subs: [
      {
        api: "/URL",
        name: "View",
        route: "/api-setting",
        _id: "64919d37b5ef262abf9ee3c3",
      },
      {
        api: "/URL",
        name: "Edit",
        route: "/api-setting",
        _id: "64919d37b5ef262abf9ee3c4",
      },
      {
        api: "/URL",
        name: "Delete",
        route: "/api-setting",
        _id: "64919d37b5ef262abf9ee3c5",
      },
    ],
    _id: "64919d37b5ef262abf9ee3c2",
  },
  {
    route: "/roles-management",
    tabName: "Roles management",
    subs: [
      {
        api: "",
        name: "Delete",
        route: "/roles-management",
        _id: "64919d37b5ef262abf9ee3c7",
      },
      {
        api: "",
        name: "Edit",
        route: "/roles-management",
        _id: "64919d37b5ef262abf9ee3c8",
      },
      {
        api: "",
        name: "View",
        route: "/roles-management",
        _id: "64919d37b5ef262abf9ee3c9",
      },
    ],
    _id: "64919d37b5ef262abf9ee3c6",
  },
  {
    route: "/API-documentation",
    tabName: "Api Documentation",
    subs: [
      {
        api: "",
        name: "View",
        route: "/API-documentation",
      },
      {
        api: "",
        name: "Edit",
        route: "/API-documentation",
      },
      {
        api: "",
        name: "Delete",
        route: "/API-documentation",
      },
    ],
    _id: "64919d37b5ef262abf9ee3ca",
  },
];
