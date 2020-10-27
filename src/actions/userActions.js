import axios from "axios";

export const getUsers = async (gameId, history) => {
  try {
    const res = await axios.get("https://coding-test.ajenta.io/users");
    // dispatch({
    //   type: GET_GAME,
    //   payload: res.data,
    // });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
