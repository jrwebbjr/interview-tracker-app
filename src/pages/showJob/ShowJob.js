
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ShowJob(){
    const { id } = useParams()

    const [job, setJob] = useState(null)

    useEffect(() => {
        (async () => {
            try{
                const res = await axios.get(`/api/jobs/${id}`)
                setJob(res.data)
            } catch (err){
                console.log(err)
            }
        })()
    }, [])

    // const getJob = async() => {
    //     const res = await axios.get('/api/jobs')
    //     setJob(res.data)
    // }

    // useEffect(() => {
    //     getJob()
    // }, []) 

    return(
        <>
            <div>
                <div>
                    { job ? ( 
                    <div>
                        <h1>
                            {job.company}
                        </h1>
                        <h2>
                            Location: {job.location}
                        </h2>
                        <h2>
                            Position: {job.position}
                        </h2>
                        <h2>
                            Date Applied: {job.date}
                        </h2>
                        <h2>
                            Status: {job.status}
                        </h2>
                        <h2>
                            Application Service Used: {job.applicationService}
                        </h2>
                        <h2>
                            Company Contacts: {job.contacts}
                        </h2>
                        <h2>
                            Meeting History: {job.history}
                        </h2>
                        <h2>
                            Interview Process: {job.interviewProcess}
                        </h2>
                        <h2>
                            Interview Notes: {job.interviewNotes}
                        </h2>
                        <h2>
                            Technical Notes: {job.technicalNotes}
                        </h2> 
                    </div>
                    ) 
                        : 
                        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                            <div class="animate-pulse flex space-x-4">
                                <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                                <div class="flex-1 space-y-6 py-1">
                                    <div class="h-2 bg-slate-700 rounded"></div>
                                    <div class="space-y-3">
                                        <div class="grid grid-cols-3 gap-4">
                                        <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                        <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                    </div>
                                    <div class="h-2 bg-slate-700 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    
                </div>      
            </div>
        </>
        )
}
//TODO: Show selected job and have an update button to take to edit route for updates