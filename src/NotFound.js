import {Link} from "react-router-dom";
const NotFound=()=>{
    return(
        <div>
            <h1>Page not found</h1>
            <p>Click here to go<Link to="./">Home</Link> </p>
        </div>
    )
}
export default  NotFound;