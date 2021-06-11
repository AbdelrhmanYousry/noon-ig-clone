import React, { useEffect } from "react";
import PostItem from "../PostIem/PostItem";
import styles from "./PostsList.module.scss";
import { loadPosts } from "./actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
const PostsList = ({ posts, loadPosts, isFavorites }) => {
  useEffect(() => {
    loadPosts();
  }, []);
  return (
    <main className={styles.posts}>
      {isFavorites
        ? posts.map((post) => {
            if (post.liked) {
              return <PostItem key={"post-" + post.id} post={post} />;
            }
          })
        : posts.map((post) => <PostItem key={"post-" + post.id} post={post} />)}
    </main>
  );
};

const mapStateToProps = ({ posts: { posts } }) => {
  return {
    posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      loadPosts,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
