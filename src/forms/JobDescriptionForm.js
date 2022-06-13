import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "../components/Button";
import TextField from "@mui/material/TextField";
import useJobDescription from "../hooks/useJobDescription";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import "../UserForms.css";
import TextareaAutosize from "@mui/base/TextareaAutosize";
// import useCreateCategory from '../hooks/useCreateCategory';
// import useEditCategory from '../hooks/useEditCategory';
// import useDeleteCategory from '../hooks/useDeleteCategory';

//Defining our yup validation
const FormSchema = Yup.object({
  name: Yup.string().required(),
  url: Yup.string().required(),
  // resume: Yup.string().required(),
});

export default function JobDescription(job) {
  const [newJob, setNewJob] = useState({});
  const { user } = useContext(AppContext);

  useJobDescription(newJob);
  // useCreateJob(newJob)

  const initialValues = {
    name: job?.name ?? "",
    url: job?.url ?? "",
  };

  const handleSubmit = (values, resetForm) => {
    if (newJob) {
      values["user"] = user;
      console.log("JobDescription handleSubmit: ", values);

      setNewJob(values);
    } else {
      console.log("JobDescription handleSubmit: ", values);
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
    <div
      style={{
        display: "inline-block",
        width: "45%",
        // backgroundColor: "green",
        padding: "0px 1rem",
        margin: "0px 1rem",

        verticalAlign: "top",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          style={{ width: "200px", marginLeft: "20px" }}
          id="name"
          name="name"
          // fullWidth
          sx={{ mb: 2, mt: 9, backgroundColor: "white" }}
          label="Job Description Name"
          placeholder="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <br />
        <TextareaAutosize
          style={{ mt: "30px", width: "95%", marginLeft: "20px" }}
          aria-label="minimum height"
          minRows={20}
          id="url"
          name="url"
          // fullWidth
          sx={{ backgroundColor: "white", mb: 2 }}
          label="Paste in url Job Description"
          placeholder="Paste in url Job Description"
          value={formik.values.url}
          onChange={formik.handleChange}
          error={formik.touched.url && Boolean(formik.errors.url)}
          helperText={formik.touched.url && formik.errors.url}
        />
        <br />
        <Button type="submit" sx={{ margin: "1rem 40%" }}>
          Submit
        </Button>
        {/* <Button color="error" onClick={()=>handleDelete()} sx={{width:"100%", my:1}}>Delete</Button> */}
      </form>
    </div>
  );
}
