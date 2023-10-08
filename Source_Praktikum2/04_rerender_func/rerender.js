//functional component
const MyApp = () => {
    //state declaration with hook
    const [title, setTitle] = React.useState("learn react");

    //variable declaration
    let foo = "Hei";
    console.log('A:', foo);

    //arrow function inside functional component
    const handleButtonClick = () => {
        console.log('B:', foo);
        foo = "Hello";
        console.log('c:', foo);

        if (title === "learn react") {
            //change the state value
            setTitle('learn Javascript');
        }
        else {
            // Change the state value
            setTitle("Learn React");
        }
    }

    // Arrow Function inside Functional Component
    const handleFooClick = () => {
        console.log(foo);
        alert(foo);
    }

    return (
        <div>
            <h3>Title: {title}</h3>
            <div>
                <p><button onClick={handleButtonClick}>Change Title</button></p>
                <p><button onClick={handleFooClick}>Get Foo Value</button></p>
            </div>
        </div>
    )
}

const myElement = <MyApp />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);
