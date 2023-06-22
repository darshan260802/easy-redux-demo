import { useDispatch, useSelector } from "react-redux";
import "./form.css";
import { updateAge, updateName } from "../../Store/user/userSlice";

export default function Form() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const updateUser = (mode) => {
    if(mode === 'name'){
        const newName = document.querySelector("#inpName").value;
        dispatch(updateName(newName));
    }else{
        const newAge = document.querySelector("#inpAge").value;
        dispatch(updateAge(newAge));
    }
  }

  return (
    <div className="form">

      <div className="name">
        <h2>Update Name</h2>
        <h3>Current Name : {user.name}</h3>
        <h3>Name : <input type="text"  id="inpName" defaultValue={user.name} /></h3>
        <button onClick={() => updateUser('name')} > Update Name </button>
      </div>

      <div className="age">
        <h2>Update Age</h2>
        <h3>Current Age : {user.age}</h3>
        <h3>Name : <input type="number" defaultValue={user.age}  id="inpAge" /></h3>
        <button onClick={() => updateUser('age')}> Update Age </button>
      </div>

    </div>
  );
}
