import React, { useEffect } from 'react';

import {BrowserRouter, Route, Redirect} from 'react-router-dom';
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
        <Route exact path="/">
          <Redirect to="/posts" />
        </Route>
        <Route exact path="/posts" render={(props) => <Posts {...props} propsconsole = {propshello} propsname={"Posts"}/>}/>
        <Route  path="/post/:id" render={(props) => <SinglePost {...props} propsconsole = {propshello} propsname={"SinglePost"}/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;