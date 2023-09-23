import EditIcon from "@mui/icons-material/Edit";
import { useUserInformation } from "~/hooks/useUserInformation";
import useUserApi from "~/api/user";
import Input from "./Input";
import { useEffect, useState } from "react";
import Button from "./Button";
import LogoutIcon from "@mui/icons-material/Logout";
import Cookies from "js-cookie";

const EditUserName = () => {
  const { userName } = useUserInformation();
  const [newName, setNewName] = useState<string>(userName);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { POST_USER_CHANGE_NAME } = useUserApi();

  const onEditUserName = () => {
    setIsEdit(true);
  };
  const onChangeUserName = async () => {
    const res = await POST_USER_CHANGE_NAME(newName);
    if (res.data.success) setIsEdit(false);
    window.location.reload();
  };

  const onLogout = () => {
    localStorage.removeItem("accessToken");
    Cookies.remove("accessToken");
    window.location.reload();
  };

  useEffect(() => {
    setNewName(userName);
  }, [isEdit]);
  return (
    <div>
      {isEdit ? (
        <div>
          <Input value={newName} onChange={(e) => setNewName(e.target.value)} />
          <Button onClick={onChangeUserName}>change</Button>
        </div>
      ) : (
        <div className="flex justify-center space-x-3">
          <span className="flex justify-center text-center font-bold text-orange-400">
            {userName}
          </span>
          <div onClick={onEditUserName}>
            <EditIcon />
          </div>
          <div
            onClick={onLogout}
            className="flex justify-center space-x-2 cursor-pointer"
          >
            logout
            <LogoutIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default EditUserName;