import 'mobx-react-lite/batchingForReactDom'
import React, { useContext, useState, useEffect } from 'react';
import './index.css';
import { UserStore } from './UserStore';
import { useObserver, Observer, useLocalStore } from 'mobx-react-lite';
import ProductStore from './ProductStore';
import ApiClient from './ApiClient';
import User from './User';
import DropDown from './DropDown';


const userContext = React.createContext(new UserStore());
const productContext = React.createContext(new ProductStore());

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    (new ApiClient()).getUsers()
    .then(u => setUsers(u))
  }, []);
  return users;
}

const UsersDropDown = () =>{
  const users = useUsers();
  const values = users.map(u => ({key: u.dni.toString(), value: u.name}));
  return (
    <DropDown values={values}></DropDown>
  )
}

const UsersProvider = (props: { children: (users: User[]) => any; }) => {
  const users = useUsers();
  return (props.children(users));
}

function App() {

  const userStore = useContext(userContext) as UserStore;
  const productStore = useContext(productContext) as ProductStore;

  // const userStore =  useLocalStore(() => ({
  //   status: "pending...",
  //   getAll() {
  //     this.status = "doneee"
  //   },
  // }))


  console.log("render");

  function handleClick() {
    userStore.getAll();
  }

  function searchProduct() {
    productStore.search((new Date()).toString());
  }

  return useObserver(() =>(
    <div id="root" className="flex justify-center">
      <div>
        <button onClick={handleClick}>Get All</button>
        <p className="text-xl">Cantidad {userStore.users.length}</p>
        <p>Status {userStore.status}</p>
        <button className="btn bg-blue-400" onClick={searchProduct}>Search Product</button>
        <div>
          UserDropDown <UsersDropDown></UsersDropDown>
        </div>
        <div>
          UserProvider
          <UsersProvider>
            {(users) => {
                const values = users.map(u => ({key: u.dni.toString(), value: u.name}));
                return <DropDown values={values}></DropDown> 
              }
            }
          </UsersProvider>
        </div>
      </div>
    </div>
  )
);

  // return useObserver(() =>(
  //     <div className="App">
  //       <button onClick={handleClick}>Get All</button>
  //       {/* <p>Cantidad {userStore.users.length}</p> */}
  //       <p>Status {userStore.status}</p>
  //     </div>
  //   )
  // );

}

export default App;
