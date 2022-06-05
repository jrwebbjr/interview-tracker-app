import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Delete({ user, didDelete ,setDidDelete }){
    let { id } = useParams()

    const Navigate = useNavigate({ user });

    const handleClick = async () => {
        try{ 
            //TODO: Change your url routes to be correct like below...pass user.id in as props to work
            await axios.delete(`http://localhost:3001/api/jobs/${user._id}/delete/${id}`).then(() => {
                Navigate('/index')
            })
            setDidDelete(!didDelete)
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