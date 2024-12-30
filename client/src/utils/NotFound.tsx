const NotFound = () => {
    return (
      <div className="w-[90%] mx-auto h-[40vh] flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="text-6xl font-extrabold text-red-500">404</h1>
        <p className="text-2xl text-gray-700">Page Not Found</p>
        <a
          href="/"
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg"
        >
          Go Back Home
        </a>
      </div>
    );
  };
  
  export default NotFound;
  