import YouTube from 'react-youtube';

const YouTubeEmbed = ({ videoId }) => {
  const opts = {
    height: '200',
    width: '340',
    playerVars: {
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} className='border-2' />;
};

export default YouTubeEmbed;