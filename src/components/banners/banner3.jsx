import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ThaheeImage from '../../assets/thahee.jpeg'
import PirabaImage from '../../assets/prabha.jpg'
import DoncyImage from '../../assets/doncy.jpg'
import SahiImage from '../../assets/sahi.jpg'
import PirashaImage from '../../assets/pirasha.jpg'
import GirlImage from '../../assets/girl.png'

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
        <div className='bg-blue-950 pb-12 select-none'>
            <h1 className="text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold py-8 z-10">WISHES OF "US🥰"</h1>
            <div className='w-full flex justify-center items-center mt-10'>
                <Carousel responsive={responsive} infinite={true}  centerMode={false} autoPlay={true} autoPlaySpeed={5000} transitionDuration={2000} className='max-sm:px-8 max-lg:px-14 max-xl:px-4 px-12'>                                  
                    <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0 shadow-2xl' style={{backgroundImage: 'url(' + GirlImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>PINTHUJA</h1>
                        <q className='text-gray-300 text-center text-sm'>Dear Aflali, தோழிக்கு தோழனாய் இசையின் அன்பில் பிடித்ததை பகிரும் ஓர் உள்ளமாய் நீ இருந்தாய். உன் புன்னகையில் எம்மை மெய் மறக்கச் செய்தாய். அன்பின் தோழனுக்கு என் இனிய பிறந்த நாள் வாழ்த்துக்கள்!</q>
                    </div>
                    <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0 shadow-2xl' style={{backgroundImage: 'url(' + PirabaImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>PIRABA</h1>
                        <q className='text-gray-300 text-center text-sm'>On your birthday I Wish you much pleasure and joy. I hope all of your wishes come true. May each hour and minute be filled with delight, And your birthday be perfect for you..! Happy birthday to the maestro of melodies! May your life be as harmonious and beautiful as your songs. Wish your many more returns of the day Mcn🫂💙</q>
                    </div>
                    <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0 shadow-2xl' style={{backgroundImage: 'url(' + ThaheeImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>HATHIL THAHEE</h1>
                        <q className='text-gray-300 text-center text-sm'>Happy Birthday mcn 🎉, Aflali! Even though we only spent 10 days together, those days were truly unforgettable. You&apos;ve been such a caring and kind friend, and I&apos;m so grateful for the time we shared. Wishing you a birthday filled with love, laughter, and all the happiness you deserve. May this year bring you endless joy and wonderful memories! 🥳🎂 Stay amazing, my friend!</q>
                    </div>
                    <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0 shadow-2xl' style={{backgroundImage: 'url(' + DoncyImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>DONCY</h1>
                        <q className='text-gray-300 text-center text-sm'>🥂Wish you a very happy birthday May life head you to great happiness, success and hope what all your wishes comes tried enjoy your day🎂</q>
                    </div>
                    <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0 shadow-2xl' style={{backgroundImage: 'url(' + SahiImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>SAHI</h1>
                        <q className='text-gray-300 text-center text-sm'>Happy Birthday, Aflali! 🎉 Wishing you a day filled with love, laughter, and all the joy your heart can hold. May this year bring you endless happiness, new adventures, and dreams come true. Celebrate big, because you truly deserve all the best! 🎂🎈🎁</q>
                    </div>
                    <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0 shadow-2xl' style={{backgroundImage: 'url(' + PirashaImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>PIRASHA</h1>
                        <q className='text-gray-300 text-center text-sm'>May your birthday be the start of a year filled with new opportunities,accomplishments,and endless joy. Happy birthday Aflali 🎂🥳!!!</q>
                    </div>               
                </Carousel>
            </div>
        </div>
     );
}
 
export default BannerSection3;