import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useApp = () => {
    const [app, setApp] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(null)

    useEffect(() =>{
        setLoading(true)
        axios('/data.json')
        .then(data=>setApp(data.data))
        .catch(err=>setErr(err))
        .finally(()=>setLoading(false))
    },[])

    return ({ app , loading, err});
};

export default useApp;