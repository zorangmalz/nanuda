import axios from "axios";

const googleLogin = async (accesstoken) => {
    console.log("google")
    let res = await axios.post(
      "https://haulfree.link/rest-auth/google/",
      {
        access_token: accesstoken,
      }
    );
    console.log(res);
    return await res.status;
  };

export default googleLogin;