// functional component
const MyApp = () => {
    //state declaration with hook
    const [title_1, setTittle1] = React.useState ("wahr are you studying ");
    const [title_2, setTittle2] = React.useState ("learn what else ?") ;

    //Arrow function
    const handleButtonClick = () => {
        // change the state value
        setTittle1("learn javascript");
        setTittle2("learn react");

    }

    return(
        <div>
            <h3>{title_1}</h3>
            <h3>{title_2}</h3>
            <button onClick={handleButtonClick} Ayo belajar pemograman></button>
        </div>
    )

}

const myElement = <myApp />;
const myApp = myElement;

reactDOM.createRoot(document.getElementById('root')).render(myApp);