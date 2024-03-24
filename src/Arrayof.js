// import React from 'react';
//  const Arrayof=(props)=>{
//   const  array = [
//         {
//             id:1,
//             name: "John",
//             age:23,
//             city:"blr"
//         },
//         {
//             id:2,
//             name:"hlo",
//             age:24,
//             city:"Blr"
//         },
//         {
//             id:3,
//             name:"hi",
//             age:56,
//             city:"mumbai"
//         }
//     ];
//     return(
        
       
//        <div>
//            {array.map(array=> (
//                <div >
//                 <table>
//                     <tr>
//                     <th>id:</th>
//                     <th>name:</th>
//                     <th>age:</th>

//                     </tr>
//                     <tr>
//                         <td>{array.id}</td>
//                         <td>{array.name}<br/></td>
//                         <td>{array.age}</td>
//                     </tr>
//                 </table>
//                </div>
//            ))}
//         </div>
//     )

// }


import React from 'react';
const Arrayof=()=>{
const Array=[{
        name:"srinu",age:23,city:"Hyderabad",id:1},
        {
            name:"Sai",age:26,city:"Bangalore",id:2
        },
        {
            name:"Sai",age:36,city:"Bangalore",id:3
        }
    ]
    return(
        <div>
        {Array.map(Array=>(
            <div>
                <h1>{Array.age}</h1>
            </div>
        ))}
        
        </div>
    )
}
export default Arrayof;