import React from "react";
import styles from "./PostItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { togglePostFavorite } from "./actions";
const PostItem = ({ post, togglePostFavorite }) => {
  const handleFavoritePost = () => {
    togglePostFavorite({ isLiked: true, postId: post.id });
  };
  const handleUnfavoritePost = () => {
    togglePostFavorite({ isLiked: false, postId: post.id });
  };
  return (
    <div className={styles.card}>
      <header>
        <img src={post.user_photo} />
        <h2>{post.user_name}</h2>
      </header>
      <main>
        <img src={post.image_link} />
        <div className={styles.imageLayover}></div>
        <div className={styles.data}>
          <div>
            <h2>{post.title}</h2>
            <h3>AED {post.price}</h3>
          </div>
          {post.liked ? (
            <FontAwesomeIcon
              icon={faHeart}
              className={styles.favorited}
              onClick={handleUnfavoritePost}
            />
          ) : (
            <FontAwesomeIcon icon={faHeart} onClick={handleFavoritePost} />
          )}
        </div>
      </main>
      <div className={styles.description}>
        <a className={styles.likes}>
          <FontAwesomeIcon icon={faHeart} /> {post.likes}{" "}
          {post.likes === 1 ? "Like" : "Likes"}
        </a>
        <p>{post.description}</p>
        {post.tags.map((tag) => (
          <span key={`tag-${tag}`}>#{tag}</span>
        ))}
        <div>
          <a>
            View {post.comments} {post.comments === 1 ? "comment" : "comments"}
          </a>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      togglePostFavorite,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(PostItem);
