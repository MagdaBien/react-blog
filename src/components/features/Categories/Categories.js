import { getAllCategories } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './Categories.module.scss';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


const Categories = () => {
    const categoriesList = useSelector(getAllCategories); 

    return(
    <>
    <div>
        <h1>Categories</h1>
    </div>
    <div className={styles.content}>
        <ListGroup >
            {categoriesList.map(category => <ListGroup.Item>
                                                <Nav.Link as={NavLink} to={"/category/" + category.id}>{category.categoryName}</Nav.Link>
                                            </ListGroup.Item>
                                            )}
        </ListGroup>
    </div>
    </>
    );
};
    
export default Categories;
