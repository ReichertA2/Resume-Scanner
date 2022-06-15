import {useEffect, useState, useContext} from 'react';
import apiKeyword from '../api/apiKeyword';
import {CancelToken} from 'apisauce';
import { AppContext } from "../context/AppContext";


export default function useKeyword(){
    const [keywords, setkeywords]=useState([])
    const { user,setAlert } = useContext(AppContext);


    useEffect(
        ()=>{
            const source=CancelToken.source();
            const getKeywords=async()=>{
                const response = await apiKeyword.post(user,source.token)
                setkeywords(response)
                console.log('getKeywords response: ',keywords)
            }
            getKeywords()
            return ()=>{source.cancel();}

        },
        []
    )

    return keywords
}