import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const JobDetails = () => {
    const jobs= useLoaderData()
    const {id}= useParams()
    const idInt= parseInt(id)
    const job= jobs.find(job=>job.id==idInt)
    console.log(job)
    console.log(id,jobs)
    const handleJob= ()=>{
        toast("You Have successfully Applied")
    }
    return (
        <div>
            <div  className="grid gap-4 md:grid-cols-4">
              <div className="border md:col-span-3">
                <h2 className="text-2xl">Details coming Here</h2>
                <h2>{job.job_title}</h2>
                <p>{job.company_name}</p>
              </div>

              <div className="border">
                <h2>Side Thing</h2>
                <button onClick={handleJob} className="btn btn-primary w-full">Apply Now</button>

              </div>
              <ToastContainer />
            </div>

            
        </div>
    );
};

export default JobDetails;