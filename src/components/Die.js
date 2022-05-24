/**
 * Challenge 1:
 * 
 * - Create a Die component that takes a `value` prop
 * - Render 10 instances of the Die component (manually)
 *      - Provide a number between 1-6 for the value on each
 *        for now
 * - Style the <main> and <Die> components 
 *   to look like they do in the slide
 */

export default function Die(props) {
    const styleHeldDie = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div className="die-face" style={styleHeldDie}>
            <h2 className="text-die" >{props.value}</h2>
        </div>
    )
}