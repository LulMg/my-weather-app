import '../Styles/box.css'

export const Box = (props) => {
    return(
        <div className="container">
            <header>
                <button className="smallButton" id={props.id}>{props.content}</button>
                <h2>{props.title}</h2>
            </header>
                <div className="body">
                    <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis. 
                    </p>
                </div>
                    <footer>
                        <button className="largeButton">Get started</button>
                    </footer>
        </div>

    )
}