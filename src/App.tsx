import React, { useContext } from 'react';
import './App.css';
import { UserStore } from './UserStore';
import { useObserver } from 'mobx-react-lite';

const userContext = React.createContext(new UserStore());

function App() {

  const userStore = useContext(userContext) as UserStore;

  console.log("render");

  return useObserver(() =>(
      <div className="App">
        <button onClick={() => userStore.getAll()}>Get All</button>
        <p>Cantidad {userStore.users.length}</p>
        <p>Status {userStore.status}</p>
      </div>
    )
  );

}

export default App;
