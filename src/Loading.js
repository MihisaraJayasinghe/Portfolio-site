const LoadingScreen = ({ text }) => (
    <div className="flex justify-center items-center text-left w-3/4 mx-auto h-screen text-black text-7xl">
      <div className="loader">
        <a>Loading</a>
        <p className="mt-20 text-md font-thin bg-gradient-to-t from-blue-700 to-gray-600 bg-clip-text text-transparent">
          {text}
        </p>
      </div>
    </div>
  );
  
  export default   LoadingScreen 

   