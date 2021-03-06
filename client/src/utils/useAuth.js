import { useEffect, useState } from "react";
import axios from "axios";

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:3001/login", { code: code })
      .then((response) => {

        // If success then cut the code string from the URL and execute the other thing
        window.history.pushState({}, null, "/");

        // console.log(response.data);
        setAccessToken(response.data.accessToken);

      })
      .catch((e) => {
        //   If fail redirect to home page - Login page
        window.location = "/login";
        console.log(e)
      });
  }, [code]);

  return accessToken
}