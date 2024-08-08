import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="relative max-w-2xl w-full">
        <div className="bg-white border-[16px] border-black p-8 rounded-none">
          <h1 className="text-7xl font-bold mb-6">Hi!</h1>
          <p className="text-4xl font-semibold leading-tight">
            You're about to make<br />
            great friends + support<br />
            wonderful causes!
          </p>
        </div>
        <div className="absolute -bottom-12 left-12 w-0 h-0 
                        border-l-[40px] border-l-transparent
                        border-t-[60px] border-t-black
                        border-r-[40px] border-r-transparent">
        </div>
      </div>
    </div>
  );
};

export default Index;
