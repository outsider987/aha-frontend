import PersonIcon from "@mui/icons-material/Person";
import { useEffect } from "react";
import { store } from "~/store";
import { getCookie } from "~/utils/cookie";

const Profile = () => {
  const accessToken = getCookie("accessToken") as any;
  const profile = getCookie("profile") as any;
  const onGoogleLogin = () => {
    window.location.href = `${process.env.API_URL}/auth/google`;
  };

  useEffect(() => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      // store.dispatch(setToken(accessToken));
    }
  }, []);

  return (
    <div>
      {accessToken ? (
        <div className="">
          <img
            className="w-full rounded-full "
            // src={accessToken.user.image}
          />
          <span className="flex justify-center text-center font-bold text-orange-400">
            {/* {session.data.user.name} */}
          </span>
        </div>
      ) : (
        <div className="flex  flex-col justify-center items-center">
          <PersonIcon
            className=" rounded-full bg-gray-400"
            style={{ width: "500px", height: "500px", color: "white" }}
          ></PersonIcon>
          <div
            className=" text-orange-400 font-bold cursor-pointer pt-3"
            onClick={onGoogleLogin}
          >
            Google Login
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
