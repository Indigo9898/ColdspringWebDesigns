const CirclesSection = () => {
  return (
    <div class="circles  grid grid-cols-1 lg:grid-cols-3 w-full mb-16">
      <div className="flex flex-col items-center mb-10 lg:mb-0">
        <div className="circle mb-8 z-10">
          <span className="text-white z-20">1</span>
        </div>
        <p className="font-bold mb-8">No Pre-Written Content</p>
        <p className="w-4/6 text-center text-gray">
          We write unique and engaging content around your company. Everyone is
          unique!
        </p>
      </div>
      <div className="flex flex-col items-center mb-10 lg:mb-0">
        <div className="circle mb-8 z-10">
          <span className="text-white z-20">2</span>
        </div>
        <p className="font-bold mb-8">Unbeatable Customer Service</p>
        <p className="w-4/6 text-center text-gray">
          No automated systems - When you need help the lead developer answers
          your call.
        </p>
      </div>
      <div className="flex flex-col items-center mb-10 lg:mb-0">
        <div className="circle mb-8 z-10">
          <span className="text-white z-20">3</span>
        </div>
        <p className="font-bold mb-8">No Limits On Design</p>
        <p className="w-4/6 text-center text-gray">
          We can edit the design to cater to your tastes. Everything is
          customizable!
        </p>
      </div>
    </div>
  );
};

export default CirclesSection