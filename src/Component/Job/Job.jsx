import {  MdLocationOn } from "react-icons/md";
import {  AiOutlineDollar } from "react-icons/ai";

const Job = ({job}) => {
    const {logo ,job_title,company_name, remote_or_onsite,location,job_type,salary}=job
    return (
        <div>
          <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={logo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="px-4 py-3 font-semibold border-r-indigo-400 text-indigo-300">{ remote_or_onsite}</button>
        <button className="px-4 py-3 font-semibold border-r-indigo-400 text-indigo-300">{job_type}</button>
    </div>
    <div>
       <h2><MdLocationOn></MdLocationOn>{location}</h2>
    </div>
    <div className="card-actions ">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Job;