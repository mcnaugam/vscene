import axios from "axios";

export const addMeeting = async (meeting, history) => {
  try {
    const res = await axios.post(
      "https://coding-test.ajenta.io/meetings",
      meeting
    );
    // history.push(`/preGame/${res.data._id}`);
  } catch (err) {
    console.log(err);
  }
};

export const getMeetings = async () => {
  try {
    const res = await axios.get("https://coding-test.ajenta.io/meetings");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
