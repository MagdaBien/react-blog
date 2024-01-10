import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';

const AddPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();
    const today = new Date();

    const form = {
        title: "",
        author: "",
        categoryId: id,
        publishedDate: today,
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

