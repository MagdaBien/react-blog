import Button from 'react-bootstrap/Button';
import AllPosts from '../../features/AllPosts/AllPosts';
import styles from './Home.module.scss';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const Home = () => {
    return(
    <div>
        <div class="row">
            <div class="col">
                <h1>All posts</h1>
            </div>
            <div class="col">
                <Button variant="outline-info" className={styles.right}>
                    <Nav.Link as={NavLink} to="/post/add" className={styles.butLink}>Add post</Nav.Link>
                </Button>
            </div>
        </div>
        <div>
            <AllPosts></AllPosts>
        </div>
    </div>
    );
};
    
export default Home;