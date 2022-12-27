import '../styles/box.css'

export const Box = ({day, icon, temp}) =>{
    return(
        <div className='boxBody'>
            <div className="nombre">{day}nombre</div>
            <div className="icono">{icon}icono</div>
            <div className="footer">{temp}footer</div>
        </div>
    )
}