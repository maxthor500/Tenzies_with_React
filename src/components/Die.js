import "../dice.css"

export default function Die(props) {
    const styleHeldDie = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <div 
            className={`die-face dice dice-${props.value}`} 
            style={styleHeldDie}
            onClick={props.holdDice}>
        </div>
    )
}