import { useEffect, useContext } from "react";
import { CancelToken } from "apisauce";
import apiResume from "../api/apiResume";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function useDeleteResume(resume) {
  const {user, setAlert } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    let response;
    const source = CancelToken.source();
    // console.log('useCreateUser useEffect: ',user.token)

    const DeleteResume = async () => {
      console.log("useDeleteResume deleteResume: ", resume);
      // console.log('useCreateUser createUsers: ',source.token)

      response = await apiResume.del(user.token,resume["id"], source.token);
      console.log("useDeleteResume deleteResume: ", response);
      if (response) {
        setAlert({ msg: `Resume: ${resume.name} Deleted`, cat: "success" });
        console.log("resume success", response);
        navigate("/");
      } else if (response !== undefined && response === false) {
        setAlert({ msg: `Please Reauthorize Your Account`, cat: "warning" });
        navigate("/");
        ///redirect to the login page
      }
    };
    if (resume?.name) {
      DeleteResume();
    }
    return () => {
      source.cancel();
    };
  }, [resume]);
}
