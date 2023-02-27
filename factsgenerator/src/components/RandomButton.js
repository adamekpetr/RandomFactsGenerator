import "./RandomButton.css" 

const randomButton = (props) => {
    return <button className="btn" onClick={props.clickRB}>GENERATE RANDOM FACT</button>
}

export default randomButton