import styles from './PostForm.module.scss';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { getAllCategories } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';


const PostForm = ({actionHandle, buttonName, formState}) => {

    const { register, handleSubmit: validate, formState: { errors } } = useForm();   
    const categoriesList = useSelector(getAllCategories); 

    const [form, setForm] = useState({
        ...formState
    });
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);

    const updateFields = e => {
        //console.log(e.target.value);
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        });
    }

    const updateContent = e => {
        setForm({
            ...form,
            content: e,
        });
    } 
    
    const updateDate = e => {
        setForm({
            ...form,
            publishedDate: e,
        });
    }     

    const actionHandler = e => {
        console.log(form, form.publishedDate);
        setContentError(!form.content)
        setDateError(!form.publishedDate)
        if(form.content && form.publishedDate) {
        actionHandle(form);
        }
    }
    
    
    

    return(
        <div  className={styles.smallerForm}>
        <Form onSubmit={validate(actionHandler)}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" id="title" 
                {...register("title", { required: true, minLength: 3 })}
                value={form.title} placeholder="Enter title" onChange={updateFields} />
                {errors.title && <small className="d-block form-text text-danger mt-2">This field should be at least 3 characters long</small>}
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" id="author" 
                {...register("author", { required: true, minLength: 3 })}
                value={form.author} placeholder="Enter author" onChange={updateFields}  />
                {errors.author && <small className="d-block form-text text-danger mt-2">This field should be at least 3 characters long</small>}                
            </Form.Group> 
            <Form.Group className="mb-3" >
                <Form.Label>Category</Form.Label>
                <Form.Select id="categoryId" 
                {...register("categoryId", { required: true})}
                value={form.categoryId}  onChange={updateFields} >
                        <option value="">Choose category</option>
                        { categoriesList.map(category => <option value={category.id}>{category.categoryName}</option>) } 
                    </Form.Select>                 
                {errors.categoryId && <small className="d-block form-text text-danger mt-2">This option should be chosen</small>}                
            </Form.Group>             
            <Form.Group className="mb-3">
                <Form.Label>Published &nbsp; </Form.Label>
                <DatePicker dateFormat="yyyy-MM-dd"
                id="publishedDate" selected={form.publishedDate} onChange={(date) => updateDate(date)} />
                {dateError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
            </Form.Group>   
            <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <ReactQuill theme="snow" id="content" value={form.content} onChange={updateContent}   /> 
                {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
            </Form.Group>   
            <Form.Group className="mb-3 clear">
                <Form.Label>Short description</Form.Label>
                <Form.Control id="shortDescription" as="textarea" 
                {...register("shortDescription", { required: true, minLength: 20 })}                
                onChange={updateFields} value={form.shortDescription} placeholder="Enter short description" />
                {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field should be at least 20 characters long</small>}                  
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
