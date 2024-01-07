import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';

const AddPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const form = {
        title: "",
        author: "",
        publishedDate: "",
        shortDescription: "",
        content: "",
    };

    const handleSubmit = form => {
        dispatch(addPost(form));     
        navigate("/");
    }

	return (
        <PostForm actionHandle={handleSubmit} buttonName="ADD POST" formState={form}></PostForm>
	);

};

export default AddPostForm;

