import "../styles/btn.scss"

type Props = {
    label : string;
    link: string
}

const Btn = ({label, link}:Props) =>{
    return(
        <>
        <a href={link} target="_blank"><button className="btn">{label}</button></a>
        </>
        )
    }

export default Btn



