import { useEffect, useContext } from 'react'
import { CancelToken } from 'apisauce'
import apiJobDescription  from '../api/apiJobDescription';
import { AppContext } from '../context/AppContext'
import {useNavigate} from 'react-router-dom';



export default function useJobDescription(job) {   
    
    const { setAlert} =useContext(AppContext)
    const navigate = useNavigate()

    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            // console.log('useCreateUser useEffect: ',user.token)

            const createJob = async()=>{
                
                console.log('useJobDescription createJob: ',job)
                // console.log('useCreateUser createUsers: ',source.token)

                response = await apiJobDescription.post(job, source.token);
                console.log('useJobDescription createJob: ',response)
                if (response){
                
                    setAlert({msg:`User: ${job.name} Created`, cat:'success'})
                    console.log('register success', response)
                    navigate('/')
                }else if(response!==undefined && response ===false){
                    setAlert({msg:`Please Reauthorize Your Account`, cat:'warning'})
                    navigate('/')
                    ///redirect to the login page
                }
            }
            if(job?.name){
                createJob();
            };
            return ()=>{source.cancel()}
        },[job]
    )
  
}