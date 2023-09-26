/* eslint-disable @typescript-eslint/no-explicit-any */
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { getCookie } from "~/utils/cookie";

export const useUserInformation = () => {
  const [userName, setUserName] = useState<string>("");
  const [accessToken, setAccessToken] = useState("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      const jwtUser = jwtDecode(accessToken) as any;

      setUserName(jwtUser.userName);
      setAccessToken(accessToken);
      setEmail(jwtUser.email);
    }
  }, []);
  return { userName, accessToken ,email};
};
