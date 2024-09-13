import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ThaheeImage from '../../assets/thahee.jpeg'

const BannerSection3 = () => {

    const responsive = {
        abovexl: {
            breakpoint: { max: 4000, min: 1536 },
            items: 4
        },
        xl: {
            breakpoint: { max: 1536, min: 1280 },
            items: 3
        },
        lg: {
            breakpoint: { max: 1280, min: 1024 },
            items: 3
        },
        md: {
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        sm: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };

    return ( 
        <div className='bg-blue-950 pb-12'>
            <h1 className="text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold py-8 z-10">WISHES OF "US🥰"</h1>
            <div className='w-full flex justify-center items-center mt-10'>
                <Carousel responsive={responsive} infinite={true}  centerMode={false} autoPlay={true} autoPlaySpeed={7500} transitionDuration={1000} className='max-sm:px-8 max-lg:px-14 max-xl:px-4 px-12'>               
                    <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0' style={{backgroundImage: 'url(' + ThaheeImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>HATHIL THAHEE</h1>
                        <q className='text-gray-400 text-center text-sm'>Happy Birthday mcn 🎉, Aflali! Even though we only spent 10 days together, those days were truly unforgettable. You&apos;ve been such a caring and kind friend, and I&apos;m so grateful for the time we shared. Wishing you a birthday filled with love, laughter, and all the happiness you deserve. May this year bring you endless joy and wonderful memories! 🥳🎂 Stay amazing, my friend!</q>
                    </div>
                    <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0' style={{backgroundImage: 'url(' + ThaheeImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>HATHIL THAHEE</h1>
                        <q className='text-gray-300 text-center text-sm'>Happy Birthday mcn 🎉, Aflali! Even though we only spent 10 days together, those days were truly unforgettable. You&apos;ve been such a caring and kind friend, and I&apos;m so grateful for the time we shared. Wishing you a birthday filled with love, laughter, and all the happiness you deserve. May this year bring you endless joy and wonderful memories! 🥳🎂 Stay amazing, my friend!</q>
                    </div>
                    <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0' style={{backgroundImage: 'url(' + ThaheeImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>HATHIL THAHEE</h1>
                        <q className='text-gray-300 text-center text-sm'>Happy Birthday mcn 🎉, Aflali! Even though we only spent 10 days together, those days were truly unforgettable. You&apos;ve been such a caring and kind friend, and I&apos;m so grateful for the time we shared. Wishing you a birthday filled with love, laughter, and all the happiness you deserve. May this year bring you endless joy and wonderful memories! 🥳🎂 Stay amazing, my friend!</q>
                    </div>
                    <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0' style={{backgroundImage: 'url(' + ThaheeImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>HATHIL THAHEE</h1>
                        <q className='text-gray-300 text-center text-sm'>Happy Birthday mcn 🎉, Aflali! Even though we only spent 10 days together, those days were truly unforgettable. You&apos;ve been such a caring and kind friend, and I&apos;m so grateful for the time we shared. Wishing you a birthday filled with love, laughter, and all the happiness you deserve. May this year bring you endless joy and wonderful memories! 🥳🎂 Stay amazing, my friend!</q>
                    </div>
                    <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0' style={{backgroundImage: 'url(' + ThaheeImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>HATHIL THAHEE</h1>
                        <q className='text-gray-300 text-center text-sm'>Happy Birthday mcn 🎉, Aflali! Even though we only spent 10 days together, those days were truly unforgettable. You&apos;ve been such a caring and kind friend, and I&apos;m so grateful for the time we shared. Wishing you a birthday filled with love, laughter, and all the happiness you deserve. May this year bring you endless joy and wonderful memories! 🥳🎂 Stay amazing, my friend!</q>
                    </div>
                    <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0' style={{backgroundImage: 'url(' + ThaheeImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>HATHIL THAHEE</h1>
                        <q className='text-gray-300 text-center text-sm'>Happy Birthday mcn 🎉, Aflali! Even though we only spent 10 days together, those days were truly unforgettable. You&apos;ve been such a caring and kind friend, and I&apos;m so grateful for the time we shared. Wishing you a birthday filled with love, laughter, and all the happiness you deserve. May this year bring you endless joy and wonderful memories! 🥳🎂 Stay amazing, my friend!</q>
                    </div>               
                </Carousel>
            </div>
        </div>
     );
}
 
export default BannerSection3;