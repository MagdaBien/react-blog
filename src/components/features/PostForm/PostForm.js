import styles from './PostForm.module.scss';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import { useState } from 'react';

const PostForm = ({actionHandle, buttonName, formState}) => {

    const [form, setForm] = useState({
        ...formState
    });

    const updateFields = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const actionHandler = e => {
        e.preventDefault();
        actionHandle(form);     
    }

    return(
        <div  className={styles.smallerForm}>
        <Form onSubmit={actionHandler}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" value={form.title} placeholder="Enter title" onChange={updateFields} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" name="author" value={form.author} placeholder="Enter author" onChange={updateFields}  />
            </Form.Group>   
            <Form.Group className="mb-3">
                <Form.Label>Published</Form.Label>
                <Form.Control type="text"  name="publishedDate" value={form.publishedDate} placeholder="Enter the publication date"  onChange={updateFields} />
            </Form.Group>   
            <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control name="content" as="textarea"  className={styles.longTextarea}  onChange={updateFields} value={form.content} placeholder="Enter full content of the post" />
            </Form.Group>   
            <Form.Group className="mb-3">
                <Form.Label>Short description</Form.Label>
                <Form.Control name="shortDescription" as="textarea" onChange={updateFields} value={form.shortDescription} placeholder="Enter short description" />
            </Form.Group>                      
            <Button variant="primary" type="submit">
                {buttonName}
            </Button>                             
        </Form>
        </div>
    );
};

PostForm.propTypes = { 
    actionHandle: PropTypes.func.isRequired,
    buttonName: PropTypes.string.isRequired, 
  };
    
export default PostForm;
