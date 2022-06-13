import {useState} from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
import useJobDescription from '../hooks/useJobDescription'
import { AppContext } from '../context/AppContext'
import {  useContext } from 'react'
// import useCreateCategory from '../hooks/useCreateCategory';
// import useEditCategory from '../hooks/useEditCategory';
// import useDeleteCategory from '../hooks/useDeleteCategory';


//Defining our yup validation
const FormSchema=Yup.object(
    {
        name:Yup.string().required(),
        url: Yup.string().required(),
        // resume: Yup.string().required(),
    }
)



export default function JobDescription(job){
    const [newJob, setNewJob]=useState({})
    const { user} =useContext(AppContext)

    useJobDescription(newJob)
    // useCreateJob(newJob)
    


    const initialValues={
        name:job?.name ?? '',
        url:job?.url ?? '',
    }
    
    const handleSubmit=(values, resetForm)=>{
        if (newJob){
            values["user"] = user
            console.log('JobDescription handleSubmit: ', values)
            
            setNewJob(values)
        }else{
            console.log('JobDescription handleSubmit: ', values)
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
             <TextField
                id="url"
                name="url"
                fullWidth
                sx={{mb:2}}
                label="url"
                placeholder="url"
                value={formik.values.url}
                onChange={formik.handleChange}
                error={formik.touched.url && Boolean(formik.errors.url)}
                helperText={formik.touched.url && formik.errors.url}            
            />

            <Button type="submit" sx={{width:"100%", my:1}}>Submit</Button>
            {/* <Button color="error" onClick={()=>handleDelete()} sx={{width:"100%", my:1}}>Delete</Button> */}

        </form>
    )

}