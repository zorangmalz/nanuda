import axios from "axios";

const googleLogin = async (accesstoken) => {
    let res = await axios.post(
      "https://api.1n1n.io/rest-auth/google/",
      {
        access_token: accesstoken,
      }
    );
    return await res.status;
  };

export default googleLogin;