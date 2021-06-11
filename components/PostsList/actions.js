import axios from "axios";

// Actions Types
export const LOAD_POSTS = "LOAD_POSTS";
export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";


export const loadPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://noon-api.herokuapp.com/api/posts"
    );
    const {
      data: { posts },
      status,
    } = response;
    if (status === 200) {
      dispatch({
        type: LOAD_POSTS_SUCCESS,
        payload: {
          posts,
        },
      });
    }
  } catch (error) {}
};

