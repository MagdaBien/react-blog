import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './PostItem.module.scss';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import clsx from 'clsx';

const PostItem = (props) => {
    const url = "/post/" + props.id;
    return(
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <Card className={clsx(styles.cardArticle)}>
        <Card.Body>
            <h5 className={styles.cardTitle}>{props.title}</h5>
            <p className={styles.author}>
                <span className={styles.bold}>Autor:</span> {props.author}<br />
                <span className={styles.bold}>Published:</span> {props.publishedDate}
            </p>
            <p className={styles.description}>{props.shortDescription}</p>
            <Button variant="primary" className={styles.but}>
                    <Nav.Link as={NavLink} to={url} className={styles.butLink}>Read more</Nav.Link>
                </Button>            
        </Card.Body>
    </Card>
    </div>
    );
};
    
export default PostItem;