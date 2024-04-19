import React, { useState, createContext } from 'react';

    const Context = createContext();

    const ContextProvider = (props) => {
        
    const myUpdateFunc = (val) => { setMyValue(val); }
    const [myValue, setMyValue] = useState('start value');
  return (
    <Context.Provider value={{ myValue, myUpdateFunc }}>
        {props.children}
    </Context.Provider>
    );
}

export default ContextProvider;