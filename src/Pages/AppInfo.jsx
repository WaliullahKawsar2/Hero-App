import { useParams } from 'react-router';
import AppDescription from '../Components/AppDetails/AppDescription';
import AppPreview from '../Components/AppDetails/AppPreview';
import AppRatings from '../Components/AppDetails/AppRatings';
import useApp from '../hooks/useApp';

const AppInfo = () => {
    const { app, loading } = useApp()
    const { id }= useParams()
    const appId = Number(id)
    const data = app.find(data=>data.id === appId)

    if(loading) return <p>Loading...</p>

    return (
       <div className='bg-[#f9f9f9] px-6'>
        <AppPreview data={data}/>
        <AppRatings ratings={data?.ratings}/>
        <AppDescription description={data?.description}/>
       </div>
    );
};

export default AppInfo;