import 'mobx-react-lite/batchingForReactDom'
import React, { useContext } from 'react';
import './App.css';
import { UserStore } from './UserStore';
import { useObserver, Observer, useLocalStore } from 'mobx-react-lite';
import ProductStore from './ProductStore';


const userContext = React.createContext(new UserStore());
const productContext = React.createContext(new ProductStore());

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
    <div className="App">
      <button onClick={handleClick}>Get All</button>
       <p>Cantidad {userStore.users.length}</p>
      <p>Status {userStore.status}</p>
      <button onClick={searchProduct}>Search Product</button>
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
