import { useSelector } from "react-redux";
import NavBar from "../navBar/NavBar";
import { selectUser } from "../../features/userSlice";
import {  signOut } from "firebase/auth";
import { auth } from "../../firebase";
import "./profileScreen.css"


function ProfileScreen(){
    const user = useSelector(selectUser);

    return (
        <div className="profileScreen">
            <NavBar />
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmX1IYrleu5pZkTWvD6cBrp4E0knysir8f-A&s" 
                        alt="" 
                    />
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                            <h3>The subscription plan will be added in a few days...</h3>
                            <button 
                                onClick={()=>signOut(auth)}
                                className="profileScreen_signOut
                            ">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;