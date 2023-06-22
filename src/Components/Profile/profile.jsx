import { useSelector } from "react-redux";
import "./prfile.css";

export default function Profile() {
  const user = useSelector((state) => state.user);

  return (
    <div className="profile">
      <h1>Welcome User, This is Profile Page</h1>
      <br />
      <h2>Name: {user.name} </h2>
      <h2>Age: {user.age} </h2>
    </div>
  );
}
