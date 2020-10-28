import axios from "axios";

export const getUsers = async (gameId, history) => {
  try {
    const res = await axios.get("https://coding-test.ajenta.io/users");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
