const VideoCard = (props: any) => {
  return (
    <div className="p-3 cursor-pointer">
      <img className="rounded-xl" src={props.image}></img>
      <div className="grid grid-cols-12 ml-4 my-5">
        <div className="col-span-1 ">
          <img
            className=" w-10 h-10  rounded-full"
            src={props.thumbImage}
            alt=""
          />
        </div>
        <div className="col-span-11 pl-2">
          <div className="text-xl font-semibold ">{props.title}</div>
          <div className="col-span-11 text-gray-400 text-base">
            {props.author}
          </div>
          <div className="col-span-11  text-gray-400 text-base">
            {props.views} Views . {props.timeStamp}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
