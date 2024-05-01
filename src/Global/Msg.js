import Swal from "sweetalert2"

export const SWAL_SUCCESS_MSG = (MSG) => {
    return (
        Swal.fire({
            title: MSG,
            text: "",
            icon: 'success',
            confirmButtonColor: '#558c55',
          })
    )
}


export const SWAL_ERROR_MSG = (MSG) => {
    return (
        Swal.fire({
            title: MSG,
            icon: 'error',
            confirmButtonColor: '#d33',
          })
    )
}


// Swal.fire({
//     title: Listing?.addListFailed?.message[0],
//     text: "",
//     // icon: 'warning',
//     icon: 'error',
//     showCancelButton: false,
//     confirmButtonColor: '#558c55',
//     // cancelButtonColor: '#d33',
//     // confirmButtonText: 'Yes, delete it!'
//   }).then((result) => {
//     if (result.isConfirmed) {
//       // Table_Data()
//       // navigate("/users")
//       navigate("/manage-listings/add-listing")
//     }
//   })