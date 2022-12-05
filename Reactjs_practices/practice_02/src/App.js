import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
  const [userslist, setUsersList]=useState([]);

  const addUsersList =(uName,uAge)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,{name: uName , age:uAge, id: Math.random().toString()}
      ];
    });

  };
  return (
    <div>
      <AddUser onAddUser={addUsersList} />
      <UserList users={userslist}/>
    </div>
  );
}

export default App;
