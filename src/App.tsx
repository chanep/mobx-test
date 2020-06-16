import 'mobx-react-lite/batchingForReactDom'
import React, { useContext } from 'react';
import './App.css';
import { UserStore } from './UserStore';
import { useObserver, Observer, useLocalStore } from 'mobx-react-lite';


//const userContext = React.createContext(new UserStore());

function App() {

  //const userStore = useContext(userContext) as UserStore;

  const userStore =  useLocalStore(() => ({
    status: "pending...",
    getAll() {
      this.status = "doneee"
    },
  }))

  console.log("render");

  function handleClick() {
    userStore.getAll();
  }

  return useObserver(() =>(
    <div className="App">
      <button onClick={handleClick}>Get All</button>
      {/* <p>Cantidad {userStore.users.length}</p> */}
    <p>Status {userStore.status}</p>
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
