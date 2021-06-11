import {
  LOAD_POSTS_SUCCESS,
} from "../components/PostsList/actions";
import {
  TOGGLE_POST_FAVORITE_SUCCESS,
} from "../components/PostIem/actions";
const initial_state = {
  posts: [],
};

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case LOAD_POSTS_SUCCESS:
      return { ...state, posts: action.payload.posts };
    case TOGGLE_POST_FAVORITE_SUCCESS:
      const { isLiked, postId: id } = action.payload;
      if (isLiked) {
        return {
          ...state,
          posts: state.posts.map((post) =>
            post.id === id
              ? { ...post, likes: post.likes + 1, liked: true }
              : post
          ),
        };
      } else {

        return {
          ...state,
          posts: state.posts.map((post) =>
            post.id === id
              ? { ...post, likes: post.likes - 1, liked: false }
              : post
          ),
        };
      }
    default:
      return state;
  }
};

export default reducer;
