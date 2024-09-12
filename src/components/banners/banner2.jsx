import PhotoFrame from '../../assets/photo-frame.png'

const BannerSection2 = () => {
    return ( 
        <div className="w-full h-[450px] sm:h-[500px] md:h-[700px] xl:h-screen bg-yellow-600 select-none relative overflow-hidden">
            <img src={PhotoFrame} alt="" className='absolute top-14 xl:left-16 w-[1400px]' />
            <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold py-8 z-10">MEMORIES WITH "US🥰"</h1>
            <div className='absolute bottom-5 w-full flex justify-center lg:justify-end px-16'>
                <div className='flex items-center gap-2 px-4 py-2 border-2 rounded-3xl text-white font-bold drop-shadow-2xl'>
                    <span>SCROLL DOWN</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16.175l3.9-3.875q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213l-4.6-4.6q-.275-.275-.288-.687T6.7 12.3q.275-.275.7-.275t.7.275zm0-6L15.9 6.3q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213L6.7 7.7q-.275-.275-.288-.687T6.7 6.3q.275-.275.7-.275t.7.275z"></path></svg>
                </div>
            </div>
        </div>
     );
}
 
export default BannerSection2;