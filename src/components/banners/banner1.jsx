import Banner1 from '../../assets/banner1.jpg'
import 'animate.css';

const BannerSection1 = () => {
    return ( 
        <div className="flex items-center px-4 sm:px-16 w-full h-screen relative overflow-hidden select-none" style={{backgroundImage: 'url('+ Banner1 +')'}}>
            <h1 className="text-6xl font-bold text-white sm:max-w-[900px]">WISH YOU MANY MORE HAPPY RETURNS OF THE DAY <br /><span className="text-yellow-400 text-8xl">AFLALI</span></h1>
            <div className='absolute bottom-10 w-full flex'>
                <div className='flex items-center gap-2 px-4 py-2 border-2 rounded-3xl text-white font-bold drop-shadow-2xl animate__animated animate__pulse animate__infinite'>
                    <span>SCROLL DOWN</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16.175l3.9-3.875q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213l-4.6-4.6q-.275-.275-.288-.687T6.7 12.3q.275-.275.7-.275t.7.275zm0-6L15.9 6.3q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213L6.7 7.7q-.275-.275-.288-.687T6.7 6.3q.275-.275.7-.275t.7.275z"></path></svg>
                </div>
            </div>
        </div>
     );
}
 
export default BannerSection1;