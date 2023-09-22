import PersonIcon from "@mui/icons-material/Person";
import { getCookie } from "~/utils/cookie";

const Profile = () => {
  const accessToken = getCookie("accessToken");
  const onGoogleLogin = () => {
    window.location.href = `${process.env.API_URL}/auth/google`;
  };

  return (
    <div className={`${accessToken ? "" : " rounded-full bg-gray-400"}`}>
      {accessToken ? (
        <>
          <img
            className="w-full rounded-full bg-gray-400"
            // src={accessToken.user.image}
          />
          <span className="flex justify-center text-center font-bold text-orange-400">
            {/* {session.data.user.name} */}
          </span>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <PersonIcon
            style={{ width: "500px", height: "500px", color: "white" }}
          ></PersonIcon>
          <div className=" cursor-pointer" onClick={onGoogleLogin}>
            Google Login
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
