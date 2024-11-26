import VideoCard from "./VideoCard";

const VIDEOS = [
  {
    title: "How to learn coding in 30 dAYS | 30 day plan | code with me",
    image: "thumbnail1.jpg",
    thumbImage: "logo1.jpg",
    author: "Abhishek",
    views: "75M",
    timeStamp: "2 years Ago",
  },
  {
    title: "How to learn coding in 70 dAYS | 70 day plan | code with me",
    image: "thumbnail1.jpg",
    thumbImage: "logo1.jpg",
    author: "Abhishek",
    views: "75M",
    timeStamp: "2 years Ago",
  },
  {
    title: "How to learn coding in 100 dAYS | 100 day plan | code with me",
    image: "thumbnail1.jpg",
    thumbImage: "logo1.jpg",
    author: "Abhishek",
    views: "75M",
    timeStamp: "2 years Ago",
  },
  {
    title: "How to learn coding in 130 dAYS | 130 day plan | code with me",
    image: "thumbnail1.jpg",
    thumbImage: "logo1.jpg",
    author: "Abhishek",
    views: "75M",
    timeStamp: "2 years Ago",
  },
];

const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            image={video.image}
            thumbImage={video.thumbImage}
            author={video.author}
            views={video.views}
            timeStamp={video.timeStamp}
          />
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
