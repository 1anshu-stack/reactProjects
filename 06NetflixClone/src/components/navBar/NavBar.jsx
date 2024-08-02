import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./navBar.css"

function NavBar() {
    const [show, setShow] = useState(false);
    const navigateTo = useNavigate();

    const transitionNavbar = () => {
        if(window.scrollY > 100){
            setShow(true);
        }
        else{
            setShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <img 
                    onClick={()=>navigateTo("/")} 
                    className="nav_logo" 
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt="" 
                />
                <img 
                    onClick={()=>navigateTo("./profile")} 
                    className="nav_avatar" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmX1IYrleu5pZkTWvD6cBrp4E0knysir8f-A&s" 
                    alt="" 
                />
            </div>
        </div>
    )
}

export default NavBar;