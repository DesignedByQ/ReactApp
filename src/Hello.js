

var Hello = () => {

    var i = 10;
    var j = 20;

    var names = ["allan", "bob", "james"];

    return(<div>

            <h3>Hello component...</h3>
            <p>This is my first application...</p>
            {i}
            {i+j}

            <h3>names</h3>

            {names.map((n) => {
                return <p>{n}</p>
            })}
        
        </div>)
}   

export default Hello;