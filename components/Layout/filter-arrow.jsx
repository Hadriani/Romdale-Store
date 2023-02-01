import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai"

function Filter() {
    const [arrowDirection, setArrowDirection] = useState("up")
    function handleSelectChange(event) {
        Router.push(`/collections/hats/${event.target.value}`)
    }
    function toggleArrow() {
        if (arrowDirection === 'up') {
            setArrowDirection("down")
        } else {
            setArrowDirection("up")
        }
    }

    return (
        <div className={styles.sidebar} >
            <h2>Shop by Category</h2>
            <div className={styles.selectbar} onClick={toggleArrow}>
                <select onChange={handleSelectChange}>
                    <option value="all">All</option>
                    <option value="caps">Caps</option>
                    <option value="beanie">Beanie</option>
                    <option value="cowboy-hats">Cowboy Hats</option>
                    <option value="fisherman-cap">Fisherman Cap</option>
                    <option value="winter-hats">Winter Hats</option>
                    <option value="children-winter-hats">Children Winter Hats</option>
                    <option value="golf-hats">Golf Hats</option>
                    <option value="beret-hats">Beret Hats</option>
                </select>
                {arrowDirection === 'up' ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
            </div>
        </div>
    )
}

export default Filter;
