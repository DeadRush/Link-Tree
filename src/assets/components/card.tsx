import profileIcon from "../images/profile.jpg"
import "../styles/card.scss"
import BtnWrap from "./btnWrap"

const Card = () =>{
    return(
    <>
    <div className="container">
    <img src={profileIcon} alt="Profile Icon"  className="icon"/>
    <h1>Gabrijel Kanjo</h1>
    <h3>Darda, Croatia</h3>
    <p>"Front-end Developer"</p>
    <BtnWrap />
    </div>
    </>
    )
}

export default Card