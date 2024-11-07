import "./Sidebar.css"

import Home from "../assets/Home.tsx"
import Shelf from "../assets/Shelf.tsx"
import Message from "../assets/Message.tsx"
import Create from "../assets/Create.tsx"
import Profile from "../assets/Profile.tsx"
import Setting from "../assets/Setting.tsx"

export default function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="SidebarTop">
                <div className="SidebarItem">
                    <Home className="SidebarSVG" viewBox="0 0 25 25"/>
                    <p>Home</p>
                </div>
                <div className="SidebarItem">
                    <Shelf className="SidebarSVG" viewBox="0 0 25 25"/>
                    <p>Shelf</p>
                </div>
                <div className="SidebarItem">
                    <Message className="SidebarSVG" viewBox="0 0 25 25"/>
                    <p>Message</p>
                </div>
                <div className="SidebarItem">
                    <Create className="SidebarSVG" viewBox="0 0 25 25"/>
                    <p>Create</p>
                </div>
                <div className="SidebarItem">
                    <Profile className="SidebarSVG" viewBox="0 0 25 25"/>
                    <p>Profile</p>
                </div>
            </div>
            <div className="SidebarBottom">
                <div className="SidebarItem">
                    <Setting className="SidebarSVG" viewBox="0 0 25 25"/>
                    <p>Setting</p>
                </div>
            </div>
        </div>
    );
}
