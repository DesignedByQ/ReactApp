import { useState } from "react";

var Hello = () => {
    //npm install bootstrap
    //in app.js import 'bootstrap/dist/css/bootstrap.min.css'

    const [counter, setCounter] = useState(0);
    
    const click=()=>{
        setCounter(counter + 1) ;
    }

    var i = 10;
    var j = 20;

    var names = ["allan", "bob", "james"];

    var namesObj = [{"name": "allan", "age": 14}, {"name": "bob", "age": 52}, {"name": "james", "age": 32}];

    return(<div>

            <h3 style={{color: 'yellow', background: 'green'}}>Hello component...</h3>
            <p style={{"color": "blue"}}>This is my first application...</p>
            {i}
            {i+j}

            <h3 className='display-1'>names</h3>

            {names.map((n) => {
                return <p>{n}</p>
            })}

            {namesObj.map((n) => {
                return <p>{n.name} {n.age}</p>
            })}

            <button className="button">app.css btn</button>
            <button className='btn btn-primary' onClick={click}>bootstrap btn</button>

            {counter}

        </div>)
}   

export default Hello;