import { useHistory } from "react-router-dom"



export const CarrotButtons = () => {

    const history = useHistory()


    return (
        <>
            <div id="top-left-buttons">
                <button className="button-green"
                onClick={(e) => history.goBack()}>-</button>
                <button className="button-green"
                onClick={(e) => history.goForward()}>+</button>
            </div>
        </>
    )
}
