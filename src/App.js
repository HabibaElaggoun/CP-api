import './App.css';
import UserList from './Components/UserList/UserList';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  
  const [users, setUsers] = useState([])
  
  const getusers  = async()=> {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
  
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
      console.log("component app did mount ")
    getusers()
  }, [])

  return (
    <div className="App">

    <UserList users={users}/> 

    </div>
  );
}

export default App;
