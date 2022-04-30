
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

export default function ShowJob(props){
    // const { id } = useParams()

    // const [job, setJob] = useState([])

    // useEffect(() => {
    //     (async () => {
    //         try{
    //             const res = await axios.get('/api/jobs/')
    //             setJob(res.data)
    //         } catch (err){
    //             console.log(err)
    //         }
    //     })()
    // }, [])

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
                    <h1>
                        {props.company}
                    </h1>
                    <h2>
                        Location: {props.location}
                    </h2>
                    <h2>
                        Position: {props.position}
                    </h2>
                    <h2>
                        Date Applied: {props.date}
                    </h2>
                    <h2>
                        Status: {props.status}
                    </h2>
                    <h2>
                        Application Service Used: {props.applicationService}
                    </h2>
                    <h2>
                        Company Contacts: {props.contacts}
                    </h2>
                    <h2>
                        Meeting History: {props.history}
                    </h2>
                    <h2>
                        Interview Process: {props.interviewProcess}
                    </h2>
                    <h2>
                        Interview Notes: {props.interviewNotes}
                    </h2>
                    <h2>
                        Technical Notes: {props.technicalNotes}
                    </h2>
                </div>      
            </div>
        </>
        )
}
//TODO: Show selected job and have an update button to take to edit route for updates