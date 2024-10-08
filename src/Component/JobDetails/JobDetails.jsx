import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs= useLoaderData()
    const {id}= useParams()
    const idInt= parseInt(id)
    const job= jobs.find(job=>job.id==idInt)
    console.log(job)
    console.log(id,jobs)
    return (
        <div>

            <h2>Job Detail:{id}</h2>
            <div>
                <h3>{job.job_description}</h3>
            </div>
            
        </div>
    );
};

export default JobDetails;