import PhotoFrame from '../../assets/photo-frame.png'

const BannerSection2 = () => {
    return ( 
        <div className="w-full h-screen bg-yellow-600 select-none relative overflow-hidden">
            <img src={PhotoFrame} alt="" className='absolute top-14 left-16 w-[1400px]' />
            <h1 className="text-center text-7xl font-bold py-8 z-10">MEMORIES WITH "US🥰"</h1>
        </div>
     );
}
 
export default BannerSection2;