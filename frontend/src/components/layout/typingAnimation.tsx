const TypingAnimation = () => {
    return (
        <div className="flex items-center space-x-2">
        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 animate-bounce"></div>
        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 animate-bounce delay-75"></div>
        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 animate-bounce delay-150"></div>
      </div>
    );
  };
  
  export default TypingAnimation;