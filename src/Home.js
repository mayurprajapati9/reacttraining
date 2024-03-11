import React from "react";
import { Link } from "react-router-dom";

class Home2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

 
  render() {
    return (
      <>
        
          <ol type="1" className="flex flex-col justify-center items-center mt-10">
         <h2>Task List of React </h2>
         <div className="flex m-10 flex-wrap flex-col  gap-4 bg-slate-300 p-4 rounded-md">
         <li className="border-2 border-black p-2 hover:border-red-500"><Link to ='/loginSignup/'>Login&Signup Page with Local Storage </Link></li>  
         <li className="border-2 border-black p-2 hover:border-red-500"><Link to ='/counterApp'>Counter App with Local Storage </Link></li>
         <li className="border-2 border-black p-2 hover:border-red-500"><Link to = '/minicalc'>Mini Calculator</Link></li>
         <li className="border-2 border-black p-2 hover:border-red-500"><Link to = '/colorpicker'>Colour Picker with Local Storage</Link></li>
         <li className="border-2 border-black p-2 hover:border-red-500"><Link to = '/todoApp'>TODO App</Link></li>
         <li className="border-2 border-black p-2 hover:border-red-500"><Link to = '/todoApp/todowithLS'>TODO App with Local Storage</Link></li>
         <li className="border-2 border-black p-2 hover:border-red-500"><Link to = '/CrudOperation'>User Management with Local Storage </Link></li>
         </div>
        
         </ol>
     
      </>
    );
  }
}
export default Home2;