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
    <div className="min-h-screen flex items-center justify-center bg-yellow-400 p-4">
      <div className="relative max-w-md w-full">
        <div className="bg-white border-8 border-black shadow-[8px_8px_0_0_#000] p-6 rounded-none">
          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full bg-transparent text-3xl font-bold resize-none overflow-hidden"
            style={{ outline: 'none' }}
          />
        </div>
        <div className="absolute -bottom-6 left-6 w-0 h-0 
                        border-l-[20px] border-l-transparent
                        border-t-[30px] border-t-black
                        border-r-[20px] border-r-transparent">
          <div className="absolute -top-[26px] -left-[14px] w-0 h-0 
                          border-l-[14px] border-l-transparent
                          border-t-[22px] border-t-white
                          border-r-[14px] border-r-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
