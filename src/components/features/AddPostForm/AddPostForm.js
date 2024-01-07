import styles from './AddPostForm.module.scss';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        author: "",
        publishedDate: "",
        shortDescription: "",
        content: "",
    });

    const UpdateFields = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addPost(form));     
        // console.log("wysłano formularz: ", form);
        navigate("/");
    }



	return (
        <div  className={styles.smallerForm}>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" placeholder="Enter title" onChange={UpdateFields} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" name="author" placeholder="Enter author" onChange={UpdateFields}  />
            </Form.Group>   
            <Form.Group className="mb-3">
                <Form.Label>Published</Form.Label>
                <Form.Control type="text"  name="publishedDate" placeholder="Enter the publication date"  onChange={UpdateFields} />
            </Form.Group>   
            <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control name="content" as="textarea"  className={styles.longTextarea}  onChange={UpdateFields} placeholder="Enter full content of the post" />
            </Form.Group>   
            <Form.Group className="mb-3">
                <Form.Label>Short description</Form.Label>
                <Form.Control name="shortDescription" as="textarea" onChange={UpdateFields} placeholder="Enter short description" />
            </Form.Group>                      
            <Button variant="primary" type="submit">
                Add post
            </Button>                             
        </Form>
        </div>
	);

};

export default AddPostForm;
