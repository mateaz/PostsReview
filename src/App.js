import React, { useEffect } from 'react';

import {BrowserRouter, Route} from 'react-router-dom';
import {Posts, SinglePost} from './Components';
import './App.css';


function App ({propshello, propsname}) {
  propshello= 'Hello From';
  propsname = 'App;'
 
  useEffect(() => {    
    console.log(`${propshello} ${propsname}`);
}, [propshello, propsname]);
  
  return (
    <BrowserRouter>
     <div id="App-component">
        <Route exact  path="/post"  render={(props) => <Posts {...props} propsconsole = {propshello} propsname={"Posts"}/>}/>
        <Route  path="/posts/:id" render={(props) => <SinglePost {...props} propsconsole = {propshello} propsname={"SinglePost"}/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;