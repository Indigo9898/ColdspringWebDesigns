import Navbar from "./Navbar";

const InterorPageHeading = (props) => {
  return (
    <header className="flex flex-col items-center w-full interior-page-heading-h gradiant-green-background-interior p-8 md:pr-32 md:pl-32  2xl:pr-96 2xl:pl-96">
      {/* Nav Menu */}
      <Navbar activePage={props.activePage} />

      <p className="text-4xl mt-8 text-white font-bold">{props.pageName}</p>
    </header>
  );
};


export default InterorPageHeading;