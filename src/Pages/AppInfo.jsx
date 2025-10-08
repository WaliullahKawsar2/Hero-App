import AppDescription from '../Components/AppDetails/AppDescription';
import AppPreview from '../Components/AppDetails/AppPreview';
import AppRatings from '../Components/AppDetails/AppRatings';

const AppInfo = () => {
    return (
       <div className='bg-[#f9f9f9] px-6'>
        <AppPreview/>
        <AppRatings/>
        <AppDescription/>
       </div>
    );
};

export default AppInfo;