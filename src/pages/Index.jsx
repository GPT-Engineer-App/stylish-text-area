import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from 'lucide-react';

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
      <div className="max-w-md w-full bg-white border-8 border-black shadow-[8px_8px_0_0_#000] p-6 rounded-none">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full bg-transparent text-3xl font-bold resize-none overflow-hidden mb-4"
          style={{ outline: 'none' }}
        />
        <div className="flex justify-between">
          <Button className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-none border-4 border-black shadow-[4px_4px_0_0_#000]">
            <Pencil className="mr-2 h-4 w-4" /> Edit
          </Button>
          <Button className="bg-red-500 hover:bg-red-600 text-black font-bold py-2 px-4 rounded-none border-4 border-black shadow-[4px_4px_0_0_#000]">
            <Trash2 className="mr-2 h-4 w-4" /> Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
