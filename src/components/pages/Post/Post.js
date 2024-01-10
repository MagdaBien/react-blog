import { useParams } from 'react-router';
import styles from './Post.module.scss';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { getPostById } from '../../../redux/postsRedux';
import { getCategoryById } from '../../../redux/categoriesRedux';
import { Navigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removePost } from '../../../redux/postsRedux';
import date2string from '../../../utils/dateToStr';

const Post = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const post = useSelector(state => getPostById(state, id));
    const category = useSelector(state => getCategoryById(state, post.categoryId));
  
    const url = "/post/edit/" + id;

    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false);  }
    const handleShow = () => setShow(true);

    if(!post) return <Navigate to="/" />;

    return(
    <div className={styles.postContent}>
        <div className="row">
            <div className="col">
                <h1 className={styles.title}>{post.title}</h1>
            </div>
            <div className="col">
                <Button variant="outline-danger" className={styles.right} onClick={handleShow}>
                    <Nav.Link as={NavLink} className={styles.butLinkRed}>Delete</Nav.Link>
                </Button>
                <Button variant="outline-success" className={styles.right}>
                    <Nav.Link as={NavLink} to={url} className={styles.butLinkGreen}>Edit post</Nav.Link>
                </Button>                
            </div>
        </div>
        <div>
            <p className={styles.author}>
                <span className={styles.bold}>Autor:</span> {post.author}<br />
                <span className={styles.bold}>Published: </span> {date2string(post.publishedDate, '-')}<br />
                <span className={styles.bold}>Category:</span> {category.categoryName}
            </p>
            <p dangerouslySetInnerHTML={{ __html: post.content }} className={styles.description} />
        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This operation will completely remove the post from the database. Are you sure you want to do this?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={e => dispatch(removePost(id))}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
    
    );
};
    
export default Post;