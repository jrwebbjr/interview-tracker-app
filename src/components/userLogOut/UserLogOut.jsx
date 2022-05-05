import { logOut } from '../../utilities/users-service';

export default function UserLogOut({ user, setUser }) {
function handleLogOut() {
  logOut();
  setUser(null);
}

return (
  <div className="">
    <div>{user.name}</div>
    <div className="">{user.email}</div>
    <button className="" onClick={handleLogOut}>LOG OUT</button>
  </div>
);
}