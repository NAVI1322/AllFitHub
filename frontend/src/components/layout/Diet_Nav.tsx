
  const handleRegister = () => {
    // Implement your registration logic here
    console.log('Navigate to registration page');
  };

  const handleSearch = (event:any) => {
    // Implement search logic here
    const searchTerm = event.target.value;
    console.log('Search term:', searchTerm);
  };

  return (
    <div className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
      <button
        className="text-white text-sm font-semibold flex items-center hover:text-gray-300"
        onClick={handleBack}
      >
        <svg
          className="w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </button>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="py-1 px-2 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleSearch}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-md shadow-md transition duration-300"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Diet_NavBar;