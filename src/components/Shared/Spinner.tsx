const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-500 border-solid rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute top-0 left-0 w-16 h-16 flex justify-center items-center"></div>
      </div>
    </div>
  );
};

export default Spinner;
