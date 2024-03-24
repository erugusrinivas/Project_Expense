// import React, {  useEffect, useState } from "react";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ReactPaginate from 'react-paginate';
// import { useRef } from "react";
// export default function AdminHome({ userData }) {

//   //setting state
//   const [data, setData] = useState([]);
//   const [limit,setLimit]=useState(5);
//   const [pageCount,setPageCount]=useState(1);
//   const currentPage=useRef();



//   useEffect(() => {
//     currentPage.current=1;
//     // getAllUser();
//     getPaginatedUsers();
//   }, []);


//   //fetching all user
//   const getAllUser = () => {
//     fetch("http://localhost:3050/getAllUser", {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data, "userData");
//         setData(data.data);
//       });
//   };
// //logout
//   const logOut = () => {
//     window.localStorage.clear();
//     window.location.href = "./Login";
//   };


//   //deleting user
//   const deleteUser = (id, name) => {
//     if (window.confirm(`Are you sure you want to delete ${name}`)) {
//       fetch("http://localhost:3050/deleteUser", {
//         method: "POST",
//         crossDomain: true,
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           "Access-Control-Allow-Origin": "*",
//         },
//         body: JSON.stringify({
//           userid: id,
//         }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           alert(data.data);
//           getAllUser();
//         });
//     } else {
//     }
//   };

//   //pagination
//   function handlePageClick(e) {
//     console.log(e);
//    currentPage.current=e.selected+1;
//     getPaginatedUsers();
   

//   }
//   function changeLimit(){
//     currentPage.current=1;
//     getPaginatedUsers();
//   }

//   function getPaginatedUsers(){
//     fetch(`http://localhost:3050/paginatedUsers?page=${currentPage.current}&limit=${limit}`, {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data, "userData");
//         setPageCount(data.pageCount);
//         setData(data.result)
        
       
//       });

//   }

//   return (
//     <div className="auth-wrapper" style={{ height: "auto" }}>
//       <div className="auth-inner" style={{ width: "auto" }}>
//         <h3>Welcom Admin</h3>
//         <table style={{ width: 500 }}>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>User Type</th>
//             <th>Delete</th>
//           </tr>
//           {data.map((i) => {
//             return (
//               <tr>
//                 <td>{i.name}</td>
//                 <td>{i.Email}</td>
//                 <td>{i.userType}</td>
//                 <td>
//                   <FontAwesomeIcon
//                     icon={faTrash}
//                     onClick={() => deleteUser(i._id, i.fname)}
//                   />
//                 </td>
//               </tr>
//             );
//           })}
//         </table>
//         <ReactPaginate
//           breakLabel="..."
//           nextLabel="next >"
//           onPageChange={handlePageClick}
//           pageRangeDisplayed={5}
//           pageCount={pageCount}
//           previousLabel="< previous"
//           renderOnZeroPageCount={null}
//           marginPagesDisplayed={2}
//           containerClassName="pagination justify-content-center"
//           pageClassName="page-item"
//           pageLinkClassName="page-link"
//           previousClassName="page-item"
//           previousLinkClassName="page-link"
//           nextClassName="page-item"
//           nextLinkClassName="page-link"
//           activeClassName="active"
//           forcePage={currentPage.current-1}
//         />
//         <input placeholder="Limit" onChange={e=>setLimit(e.target.value)}/>
//         <button onClick={changeLimit}>Set Limit</button>
//         <button onClick={logOut} className="btn btn-primary">
//           Log Out
//         </button>
//       </div>
//     </div>
//   );
// }


import{Link} from "react-router-dom";
import React from "react";
import { CircleUserRound} from 'lucide-react';
// import "firebase/compat/auth";
import Google from "./Google";
import Swal from "sweetalert2";
const AdminHome =()=>{
    const handleClick=()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, LOGOUT!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    
    }
    return(
        <div>
            <h1>WELCOME Mr...</h1>
        <marquee> WELCOME TO Dashboard Mr.....!<CircleUserRound></CircleUserRound></marquee> 
       
        <button onClick={handleClick}>  <Link to="/SignUp"><Google></Google></Link> </button>
        {/* <div>mr.{e.info.username}</div> */}
       
        <h1>WELCOME Mr...</h1>
        </div>
    )
}
export default AdminHome;