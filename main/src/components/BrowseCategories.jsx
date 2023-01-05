import { Button, Dropdown, Navbar } from 'react-bootstrap'


export function BrowseCategories() {
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className='my-btn'>
                Browse categories
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}