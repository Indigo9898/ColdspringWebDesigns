const DefaultButton = (props) => {
    return (
      <a className="bg-light-green cursor-pointer hover:bg-main-green w-fit h-fit p-5 pr-6 pl-6 text-xs font-bold rounded-md z-10 transition-all">
        {props.text}
      </a>
    );
  };
  
  export default DefaultButton;
  