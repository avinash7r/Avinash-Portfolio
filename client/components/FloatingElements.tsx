"use client";

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-15%] right-[5%] w-[550px] h-[550px] rounded-full bg-[#E07838] opacity-[0.06] blur-[130px]" />
      <div className="absolute bottom-[5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#C05820] opacity-[0.05] blur-[110px]" />
    </div>
  );
};

export default FloatingElements;
