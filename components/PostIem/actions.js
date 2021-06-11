import axios from "axios";

export const TOGGLE_POST_FAVORITE = "TOGGLE_POST_FAVORITE";
export const TOGGLE_POST_FAVORITE_SUCCESS = "TOGGLE_POST_FAVORITE_SUCCESS";

export const togglePostFavorite = ({ isLiked, postId }) => async (dispatch) => {
    try {
      const { status } = await axios.put(
        "https://noon-api.herokuapp.com/api/post",
        {
          postId,
          liked: `${isLiked}`,
        }
      );
      if (status === 200) {
        dispatch({
          type: TOGGLE_POST_FAVORITE_SUCCESS,
          payload: {
            isLiked,
            postId,
          },
        });
      }
    } catch (error) {}
  };
  