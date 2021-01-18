import React from 'react';
import './App.css';
import {setUserData} from './store/actions'
import {connect} from "react-redux";
const App = ({children}) => {
    return (
      <React.Suspense className="App" fallback={<div>loading...</div>}>
        {children}
      </React.Suspense>
  )
}
export default connect()(App);
