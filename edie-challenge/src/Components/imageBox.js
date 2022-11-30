import '../Styles/imageBox.css'

export const ImageBox = (props) => {
    return(
        <div className="fullBox">
            <div className="imagenBox">
                <img src={props.img} alt="imagenBox" />
            </div>
            <footer className="footer">
                <label>{props.label}</label>
                <h2>{props.name}</h2>
            </footer>
        </div>
    )
}