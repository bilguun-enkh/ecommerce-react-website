import { Dropdown } from "react-bootstrap";


const BrowseCatSubMenu = (props) => {
    return (
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">{BrowseCatSubMenu}</Dropdown.Item>
            <Dropdown.Item href="#/action-2">{BrowseCatSubMenu}</Dropdown.Item>
            <Dropdown.Item href="#/action-3">{BrowseCatSubMenu}</Dropdown.Item>
        </Dropdown.Menu>
    )
}
