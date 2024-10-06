import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJob = () => {
    const [jobs, setJobs]= useState([]);
    const [dataLength, setdataLength] =useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
        
    
    },[])
    
    
       
    return (
        <div>

            <div>
            <h3 className="text-5xl text-center">Featured Jobs:{jobs.length}</h3>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            
            </div>
            <div className="grid grid-cols-2 ">
                {
                    jobs.slice(0,dataLength).map(job=><Job job={job} key={job.id}></Job>)
                }
            </div>
            <div>
                <button className="mx-auto" onClick={()=>setdataLength(jobs.length)}>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJob;