import Button from 'react-bootstrap/Button';
import AllPosts from '../../features/AllPosts/AllPosts';
import styles from './Home.module.scss';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const Home = () => {
    return(
    <div>
        <div className="row">
            <div className="col">
                <h1>All posts</h1>
            </div>
            <div className="col">
                <Button variant="outline-info" className={styles.right}>
                    <Nav.Link as={NavLink} to={"/post/add/all"} className={styles.butLink}>Add post</Nav.Link>
                </Button>
            </div>
        </div>
        <div>
            <AllPosts categoryId="all"></AllPosts>
        </div>
    </div>
    );
};
    
export default Home;