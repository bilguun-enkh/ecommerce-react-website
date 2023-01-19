import React from "react"
import SubMenu from "./SubMenu"
import { Navbar } from "react-bootstrap"
import menus from "../data/menus"

export default function MainMenu() {
    const subMenus = menus.map((subMenu) => {
        return (
            <SubMenu
                title={subMenu.title}
                position={subMenu.position}
                children={subMenu.children}
            />
        )
    })
    return (
        <>
            <div className="menu-div">
                <Navbar expand="lg">{subMenus}</Navbar>
            </div>
            <div className="browse-free-return">
                <p>
                    <a href="#">30 Days Free Return</a>
                </p>
            </div>
        </>
    )
}
