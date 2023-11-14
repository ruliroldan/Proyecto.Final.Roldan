import logo from "./image/img1.png";


const NavBar = () => {
    return (
        <nav>
            <img src={logo} alt="Logo" />
             <div>
                <button>Inicio</button>
                <button>Indumentaria</button>
                <button>Novedades</button>
                <button>Información</button>
                
             </div>
        </nav>
    )
}

export default NavBar