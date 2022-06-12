import { useEffect, useContext } from 'react'
import { CancelToken } from 'apisauce'
import apiResume  from '../api/apiResume';
import { AppContext } from '../context/AppContext'
import {useNavigate} from 'react-router-dom';



export default function useResume(resume) {   
    
    const { setAlert} =useContext(AppContext)
    const navigate = useNavigate()

    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            // console.log('useCreateUser useEffect: ',user.token)

            const createResume = async()=>{
                
                console.log('useResume createResume: ',resume)
                // console.log('useCreateUser createUsers: ',source.token)

                response = await apiResume.post(resume, source.token);
                console.log('useResume createResume: ',response)
                if (response){
                
                    setAlert({msg:`Resume: ${resume.name} Created`, cat:'success'})
                    console.log('resume success', response)
                    navigate('/')
                }else if(response!==undefined && response ===false){
                    setAlert({msg:`Please Reauthorize Your Account`, cat:'warning'})
                    navigate('/')
                    ///redirect to the login page
                }
            }
            if(resume?.name){
                createResume();
            };
            return ()=>{source.cancel()}
        },[resume]
    )
  
}