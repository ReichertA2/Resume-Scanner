import {useState} from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
import useResume from '../hooks/useResume'
import TextareaAutosize from '@mui/base/TextareaAutosize';

// import useCreateCategory from '../hooks/useCreateCategory';
// import useEditCategory from '../hooks/useEditCategory';
// import useDeleteCategory from '../hooks/useDeleteCategory';


//Defining our yup validation
const FormSchema=Yup.object(
    {
        name:Yup.string().required(),
        desc: Yup.string().required(),
        // resume: Yup.string().required(),
    }
)



export default function JobDescription(resume){
    const [newResume, setNewResume]=useState({})
   
    useResume(newResume)
    // useCreateJob(newJob)
    


    const initialValues={
        name:resume?.name ?? '',
        desc:resume?.desc ?? '',
    }
    
    const handleSubmit=(values, resetForm)=>{
        if (newResume){
            console.log('Resume handleSubmit: ', values)
            setNewResume(values)
        }else{
            console.log('Resume handleSubmit: ', values)
            // setNewJob(values)
        }
        console.log(values)
        resetForm(initialValues)
    }

    // const handleDelete=()=>{
    //     setDeleteCat(job?.id)
    // }

    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values, {resetForm})=>{handleSubmit(values, resetForm)},
        enableReinitialize:true
    })

    return(
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id="name"
                name="name"
                fullWidth
                sx={{mb:2, mt:2}}
                label="name"
                placeholder="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}            
            />
             <TextareaAutosize
                id="desc"
                name="desc"
                // fullWidth
                sx={{mb:2}}
                label="desc"
                placeholder="desc"
                value={formik.values.desc}
                onChange={formik.handleChange}
                error={formik.touched.desc && Boolean(formik.errors.desc)}
                helperText={formik.touched.desc && formik.errors.desc}            
            />

            <Button type="submit" sx={{width:"100%", my:1}}>Submit</Button>
            {/* <Button color="error" onClick={()=>handleDelete()} sx={{width:"100%", my:1}}>Delete</Button> */}

        </form>
    )

}