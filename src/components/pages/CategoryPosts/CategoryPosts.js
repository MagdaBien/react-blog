import Button from 'react-bootstrap/Button';
import AllPosts from '../../features/AllPosts/AllPosts';
import styles from './CategoryPosts.module.scss';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useParams } from 'react-router-dom';
import { getCategoryById } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';

const CategoryPosts = () => {
    const { id } = useParams();

    const category = useSelector(state => getCategoryById(state, id));
    console.log("category", category, id, typeof(id))  ;

    return(
    <div>
        <div className="row">
            <div className="col">
                <h1>Category/{category.categoryName}</h1>
            </div>
            <div className="col">
                <Button variant="outline-info" className={styles.right}>
                    <Nav.Link as={NavLink} to={"/post/add/" + id} className={styles.butLink}>Add post</Nav.Link>
                </Button>
            </div>
        </div>
        <div>
            <AllPosts categoryId={id}></AllPosts>
        </div>
    </div>
    );
};
    
export default CategoryPosts;