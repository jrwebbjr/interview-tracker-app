import axios from 'axios';

export default function Delete(){
    const handleClick = async () => {
        try{
            const res = await axios.delete(`/api/jobs/${_id}`)
            Navigate('/jobs')
        } catch(err){
            console.error(err)
        }
    }
    return (
        <>
            <h1>Are you sure you want to Permanently Delete this Job?</h1>
            <button onClick={handleClick}>Delete</button>
        </>
    )
}