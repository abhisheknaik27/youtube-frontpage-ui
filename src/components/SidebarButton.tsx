const SidebarButton = (props: any) => {
  return (
    <button
      type="button"
      className="w-full flex items-start pr-4 py-2.5 px-5 me-2 mb-2 text-white  text-[15px] font-medium hover:border-none hover:rounded-lg hover:outline-none  focus:outline-none hover:bg-gray-800 hover:text-gray-100  "
    >
      {props.btnName}
    </button>
  );
};

export default SidebarButton;
