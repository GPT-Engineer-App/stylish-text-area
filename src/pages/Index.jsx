import { useState } from 'react';

const Index = () => {
  const [text, setText] = useState("Hi!\nYou're about to make\ngreat friends + support\nwonderful causes!");

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-300">
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-64 h-40 p-4 bg-white border-4 border-black rounded-lg text-2xl font-bold resize-none"
          style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)'
          }}
        />
        <div className="absolute -bottom-4 left-1/2 w-8 h-8 bg-white border-4 border-t-0 border-l-0 border-black transform rotate-45 -translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default Index;
