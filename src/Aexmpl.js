// Props Drilling Example

// import React from 'react';

// function A(){
//     const parent="A Component data";
//     return(
//         <div>
//             <h1>A-COMPONENT</h1>
//             <B value={parent}/>
//         </div>
//     )
// }

// function B({value}){
//     return(
//         <div>
//             <C value={value}/>
//         </div>
//     )
        

// }

// function C({value}){
//     return(
//         <div>
//             <D value={value}/>
//         </div>
//     )
// }
// function D({value}){
//     return(
//         <div>
//            <E value={value}/>
//         </div>
//     )
// }
// function E({value}){
//     return(
//         <div>
//             <p>Finally,we get the :{value} </p>
//         </div>
//     )
// }
// export default A;


// USE CONTEXT EXAMPLE:
import React,{useContext} from 'react';
const context=React.createContext();
function provider(){
const data=20;
return(
    <div>
<context.Provider value={data}>
<E/>
<A/>
</context.Provider>
</div>
)
}
function A(){
    return(<div><h1>A- component</h1></div>);
      
    
}
function E(){
    const data=useContext(context);
    return(
        <h1>Data:{data}</h1>
    )
}
export default provider;