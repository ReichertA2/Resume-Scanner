import { useEffect, useState, useContext } from "react";
import apiKeyword from "../api/apiKeyword";
import { CancelToken } from "apisauce";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function useKeyword() {
  const [keywords, setkeywords] = useState([]);
  const { user, setAlert } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const source = CancelToken.source();
    const getKeywords = async () => {
      const response = await apiKeyword.post(user, source.token);
      if (response.status === 500) {
        setAlert({
          msg: `Resume: ${response.data.id} failed to be retrieved`,
          cat: "warning",
        });
        console.log("resume failed", response.status);
        navigate("/UserFormsView");
      } else if (response) {
        setAlert({
          msg: `Resume: ${response.data.id} retrieved`,
          cat: "success",
        });
        console.log("resume failed", response.status);
      } else if (response !== undefined && response === false) {
        setAlert({ msg: `Please Reauthorize Your Account`, cat: "warning" });
        navigate("/UserFormsView");
      }
      setkeywords(response);
      console.log("getKeywords response: ", keywords);
    };

    getKeywords();
    return () => {
      source.cancel();
    };
  }, []);

  return keywords;
}
