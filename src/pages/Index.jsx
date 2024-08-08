import { useState, useEffect, useRef } from 'react';

const Index = () => {
  const [text, setText] = useState("Hi!\nYou're about to make\ngreat friends + support\nwonderful causes!");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-300 p-4">
      <div className="relative max-w-md w-full">
        <div className="bg-white border-4 border-black rounded-lg p-4 pb-12">
          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full bg-transparent text-2xl font-bold resize-none overflow-hidden"
            style={{ outline: 'none' }}
          />
        </div>
        <div className="absolute -bottom-4 left-8 w-8 h-8 bg-white border-4 border-t-0 border-r-0 border-black transform -rotate-45"></div>
      </div>
    </div>
  );
};

export default Index;
