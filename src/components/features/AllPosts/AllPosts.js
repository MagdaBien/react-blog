import PostItem from "../../views/PostItem/PostItem";
import styles from './AllPosts.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getAllPosts } from "../../../redux/postsRedux";
 
const AllPosts = () => {

    const posts = useSelector(getAllPosts);

    return(
    <div className={clsx('row', styles.postContainer)}>
        { posts.map(post => <PostItem key={post.id} {...post} />) }      
    </div>
    );
};
    
export default AllPosts;
