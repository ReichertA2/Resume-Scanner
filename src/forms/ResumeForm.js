import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "../components/Button";
import TextField from "@mui/material/TextField";
import useResume from "../hooks/useResume";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import "../UserForms.css";
import Typography from "@mui/material/Typography";

// import useCreateCategory from '../hooks/useCreateCategory';
// import useEditCategory from '../hooks/useEditCategory';
// import useDeleteCategory from '../hooks/useDeleteCategory';

//Defining our yup validation
const FormSchema = Yup.object({
  name: Yup.string().required(),
  desc: Yup.string().required(),
  // resume: Yup.string().required(),
});

export default function JobDescription(resume) {
  const [newResume, setNewResume] = useState({});
  const { user } = useContext(AppContext);

  // newResume["user_id"] = user.id
  // console.log(user)

  useResume(newResume);
  // useCreateJob(newJob)

  const initialValues = {
    name: resume?.name ?? "",
    desc: resume?.desc ?? "",
  };

  const handleSubmit = (values, resetForm) => {
    if (newResume) {
      // console.log('Resume handleSubmit: ', values)
      values["user"] = user;
      console.log("Resume handleSubmit: ", values);

      setNewResume(values);
    } else {
      console.log("Resume handleSubmit: ", values);
      // setNewJob(values)
    }
    console.log(values);
    resetForm(initialValues);
  };

  // const handleDelete=()=>{
  //     setDeleteCat(job?.id)
  // }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: FormSchema,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values, resetForm);
    },
    enableReinitialize: true,
  });

  return (
    <div style={{ display: "inline-block", width:'300px' , backgroundColor: 'red'}}>
      <Typography variant="h6"></Typography>
      <form onSubmit={formik.handleSubmit} >
        <TextField
          style={{ width: "200px", marginLeft: "20px" }}
          id="name"
          name="name"
          sx={{ mb: 2, mt: 9, backgroundColor: "white" }}
          label="Resume Name"
          placeholder="Resume Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <br />
        <TextareaAutosize
          style={{ mt: "30px", width: 200, marginLeft: "20px" }}
          aria-label="minimum height"
          minRows={20}
          id="desc"
          name="desc"
          // fullWidth
          sx={{ mb: 2 }}
          label="Paste Resume Here"
          placeholder="Paste Resume Here"
          value={formik.values.desc}
          onChange={formik.handleChange}
          error={formik.touched.desc && Boolean(formik.errors.desc)}
          helperText={formik.touched.desc && formik.errors.desc}
        />
        <br />
        <Button type="submit" sx={{ marginLeft: "70px", marginBottom: "4px" }}>
          Submit
        </Button>
        {/* <Button color="error" onClick={()=>handleDelete()} sx={{width:"100%", my:1}}>Delete</Button> */}
      </form>
    </div>
  );
}
