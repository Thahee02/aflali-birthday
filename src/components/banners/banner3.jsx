import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ThaheeImage from '../../assets/thahee.jpeg'
import PirabaImage from '../../assets/prabha.jpg'
import DoncyImage from '../../assets/doncy.jpg'
import SahiImage from '../../assets/sahi.jpg'
import PirashaImage from '../../assets/pirasha.jpg'
import MahiliniImage from '../../assets/mahilini.jpg'
import NuskiImage from '../../assets/nuski.jpg'
import ShamImage from '../../assets/sham.jpg'
import AbdulRahmanImage from '../../assets/abdul-rahman.jpg'
import SushaImage from '../../assets/susha.jpg'
import VenuImage from '../../assets/venu.jpg'
import PinthujaImage from '../../assets/pinthuja.jpg'
import HamsathImage from '../../assets/hamsath.jpg'
import AsryImage from '../../assets/asry.jpg'
import SanjaiImage from '../../assets/sanjai.jpg'
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
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0 shadow-2xl' style={{backgroundImage: 'url(' + DoncyImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>DONCY</h1>
                        <q className='text-gray-300 text-center text-sm'>🥂Wish you a very happy birthday May life head you to great happiness, success and hope what all your wishes comes tried enjoy your day🎂</q>
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
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0 shadow-2xl' style={{backgroundImage: 'url(' + ShamImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>SHAM</h1>
                        <q className='text-gray-300 text-center text-sm'>Happy Birthday to my Besta Aflali !! ♥️🎉 Your talent for creating beautiful music is truly inspiring, and I feel so lucky to witness your journey. 💥 You bring rhythm and melody to not just your songs, but to the lives of everyone around you. May this year bring you even more opportunities to shine and create masterpieces🎈🥳.. Keep making the world a better place, one note at a time! 🎶 Wishing you a day filled with happiness, creativity, and unforgettable moments!❤️‍🩹🫂</q>
                    </div>
                    <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0 shadow-2xl' style={{backgroundImage: 'url(' + PinthujaImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>PINTHUJA</h1>
                        <q className='text-gray-300 text-center text-sm'>Dear Aflali, தோழிக்கு தோழனாய் இசையின் அன்பில் பிடித்ததை பகிரும் ஓர் உள்ளமாய் நீ இருந்தாய். உன் புன்னகையில் எம்மை மெய் மறக்கச் செய்தாய். அன்பின் தோழனுக்கு என் இனிய பிறந்த நாள் வாழ்த்துக்கள்!</q>
                    </div>
                     <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0 shadow-2xl' style={{backgroundImage: 'url(' + AbdulRahmanImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>ABDUL RAHMAN</h1>
                        <q className='text-gray-300 text-center text-sm'>Candles to blow....✨may your birthday fill with laughter......wish you happy birthday aflalih...🎉🎂</q>
                    </div>
                    <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0 shadow-2xl' style={{backgroundImage: 'url(' + SahiImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>SAHI</h1>
                        <q className='text-gray-300 text-center text-sm'>Happy Birthday, Aflali! 🎉 Wishing you a day filled with love, laughter, and all the joy your heart can hold. May this year bring you endless happiness, new adventures, and dreams come true. Celebrate big, because you truly deserve all the best! 🎂🎈🎁</q>
                    </div>
                    <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0 shadow-2xl' style={{backgroundImage: 'url(' + MahiliniImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>MAHILINI</h1>
                        <q className='text-gray-300 text-center text-sm'>May your birthday be the beginning of a year filled with positivity, hope, and the confidence to overcome any challenge. Happy birthday 🎂🎉🎈 Aflali !</q>
                    </div>
                    <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0 shadow-2xl' style={{backgroundImage: 'url(' + HamsathImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>HAMSATH</h1>
                        <q className='text-gray-300 text-center text-sm'>Wishing you a fabulous year ahead! Happy Birthday Machan!❤️</q>
                    </div>
                    <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0 shadow-2xl' style={{backgroundImage: 'url(' + PirashaImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>PIRASHA</h1>
                        <q className='text-gray-300 text-center text-sm'>May your birthday be the start of a year filled with new opportunities, accomplishments, and endless joy. Happy birthday Aflali 🎂🥳!!!</q>
                    </div>
                    <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0 shadow-2xl' style={{backgroundImage: 'url(' + SushaImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>SUSHA</h1>
                        <q className='text-gray-300 text-center text-sm'>Wishing you a day that’s as fabulous as you are! May all your ❤️🌝 dreams come true 😉💚⛅ this year.</q>
                    </div>
                    <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0 shadow-2xl' style={{backgroundImage: 'url(' + VenuImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>VENU</h1>
                        <q className='text-gray-300 text-center text-sm'>இசையால் உலகை வெல்ல இனிய அகவைத்திருநாள்நாள் நல்வாழ்த்துக்கள்டா Singer 💯🤌❤️</q>
                    </div>
                    <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0 shadow-2xl' style={{backgroundImage: 'url(' + NuskiImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>NUSKI</h1>
                        <q className='text-gray-300 text-center text-sm'>Happy Birthday, Aflali! 🎤 May your voice always hit the high notes, and your birthday hit all the right vibes! 🎶 Wishing you a day filled with music, laughter, and a cake as sweet as your tunes! 🎂🎈 Keep rocking, superstar! 😎</q>
                    </div>
                    <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0 shadow-2xl' style={{backgroundImage: 'url(' + AsryImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>ASRY</h1>
                        <q className='text-gray-300 text-center text-sm'>May the year ahead bring everything you've been working toward! Happy birthday Aflali!💜</q>
                    </div>
                    <div className='w-80  border-2 rounded-xl text-white flex flex-col items-center py-5 px-4'>
                        <div className='w-20 h-20 rounded-full bg-center bg-cover shrink-0 shadow-2xl' style={{backgroundImage: 'url(' + SanjaiImage + ')'}}></div>
                        <h1 className='font-bold my-3 text-yellow-400'>SANJAI</h1>
                        <q className='text-gray-300 text-center text-sm'>நட்பே, நீ எப்போவும் சந்தோஷமா இருக்கணும். உன் எல்லா கனவுகளும் நிறைவேற வாழ்த்துகள்! Happy Birthday!</q>
                    </div>               
                </Carousel>
            </div>
        </div>
     );
}
 
export default BannerSection3;