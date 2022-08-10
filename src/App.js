import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchRequest, loadStackUsers } from './asyncFunctions/loadStackUsers';
import { removeUser } from './store/customerReducer';


function App() {

  const dispatch = useDispatch()


const {users} = useSelector(state => state.users)

  return (
    <div className="App">
      <div className="wrapper">
        <div className="balance">{users.length !== 0? users.map((e, index)=><div onClick={()=> dispatch(removeUser(e.name))} style={{backgroundColor:'#e2e2e2', borderRadius:'12px', margin:'5px 10px', padding:'8px'}} key={index}>{e.name}</div>) : "empty"}</div>
        <button onClick={()=>{dispatch({type:"ADD_USER", payload:{name:prompt()}})}} className="addMoney">Add User</button>
        <button onClick={()=>{dispatch({type:"REMOVE_USER", payload:prompt()})}} className="addMoney">Delete User</button>
        <button onClick={()=>{dispatch(fetchRequest())}} className="addMoney">Load</button>
      </div>
      <div className="maps">
      </div>
    </div>
  );
}

export default App;
