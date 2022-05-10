/**
 * Challenge:
 * 
 * - Create a Die component that takes a `value` prop
 * - Render 10 instances of the Die component (manually)
 *      - Provide a number between 1-6 for the value on each
 *        for now
 * - Style the <main> and <Die> components 
 *   to look like they do in the slide
 */

export default function Die(props) {
    return (
        <div className="die-face">
            <h2 className="text-die">{props.value}</h2>
        </div>
    )
}