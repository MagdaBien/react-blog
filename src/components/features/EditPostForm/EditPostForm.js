import { useDispatch } from 'react-redux';
import { editPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getPostById } from '../../../redux/postsRedux';
import { Navigate } from 'react-router-dom';


const EditPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();
    const form = useSelector(state => getPostById(state, id));    
    if(!form) return <Navigate to="/" />;


    const handleSubmit = form => {
        dispatch(editPost(form));     
        navigate("/");
    }

	return (
        <PostForm actionHandle={handleSubmit} buttonName="SAVE POST" formState={form}></PostForm>
	);

};

export default EditPostForm;

