import { NavLink } from "react-router-dom";


const ErorPage = () => {
    return (
        <div>

            <h4>OOPS!!!!</h4>
          <button><NavLink to={'/'}>GoBack</NavLink></button>
            
        </div>
    );
};

export default ErorPage;