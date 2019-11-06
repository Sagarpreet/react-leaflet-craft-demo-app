import {FunctionComponent, useEffect} from 'react';
import React from 'react';


interface TAllProps {
    props: string;
}

const Hooks: FunctionComponent<TAllProps> = (props) => {

    useEffect(() => {
        console.log(props.props);
    }, [props]);

    return (
     <>

        <p>
        Edit <code>src/App.js</code> props.props =    {props.props}
        </p>
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        Learn React
        </a>

     </>
    )
}

export default Hooks;