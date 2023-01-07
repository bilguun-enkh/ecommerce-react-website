import { Dropdown } from 'react-bootstrap'
import categories from '../data/categories'


export function BrowseCategories() {

    const categoriesData = categories.map(data => {
        return (
            <Dropdown.Item href="#">{data.title}</Dropdown.Item>
        )
    })

    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className='my-btn'>
                Browse categories
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {categoriesData}
            </Dropdown.Menu>
        </Dropdown>
    )
}