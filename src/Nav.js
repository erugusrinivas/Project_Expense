// import {sum,Add} from "./header.js";

// let sum_val = sum(10,20,19);
// console.log(sum_val);

// let int_val=Add(10,20);
// console.log(int_val);


import {Link} from "react-router-dom";
const Nav=()=>{
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
        </div>
    );
};
export default Nav;