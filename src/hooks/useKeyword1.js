// import { useEffect, useContext } from "react";
// import { CancelToken } from "apisauce";
// import apiKeyword from "../api/apiKeyword";
// import { AppContext } from "../context/AppContext";
// import { useNavigate } from "react-router-dom";

// export default function useKeyword(user_info) {
//   const { setAlert } = useContext(AppContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     let response;
//     const source = CancelToken.source();
//     // console.log('useCreateUser useEffect: ',user.token)

//     const createuser_info = async () => {
//       // console.log("useKeyword createuser_info: ", user_info);
//       // console.log('useCreateUser createUsers: ',source.token)

//       response = await apiKeyword.post(user_info, source.token);
//       // console.log("useKeyword createuser_info: ", response);
//       if (response) {
//         setAlert({ msg: `User_info: ${user_info.first_name} Created`, cat: "success" });
//         console.log("user_info success", response);
//         // navigate("/keyword_results");
//       } else if (response !== undefined && response === false) {
//         setAlert({ msg: `Please Reauthorize Your Account`, cat: "warning" });
//         // navigate("/keyword_results");
//         ///redirect to the login page
//       }
//     };
//     if (user_info?.first_name) {
//       createuser_info();
//     }
//     return () => {
//       source.cancel();
//     };
//   }, [user_info]);
// }