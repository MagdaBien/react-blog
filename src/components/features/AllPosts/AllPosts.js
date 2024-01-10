import PostItem from "../../views/PostItem/PostItem";
import styles from './AllPosts.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getAllPosts } from "../../../redux/postsRedux";
import { getPostByCategoryId } from "../../../redux/postsRedux";
 
const AllPosts = ({categoryId}) => {

    let posts;
    const postsAll = useSelector(getAllPosts);
    const postsCategory = useSelector(state => getPostByCategoryId(state, categoryId));

    if(categoryId === "" || categoryId === "all") { 
        posts =  postsAll;
    }
    else {
        posts = postsCategory;
    }

    return(
    <div className={clsx('row', styles.postContainer)}>
        { posts.map(post => <PostItem key={post.id} {...post} />) }      
    </div>
    );
};
    
export default AllPosts;
