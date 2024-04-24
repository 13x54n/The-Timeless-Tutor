export const BentoGrid = ({ children }) => {
  return (
    <div className="grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ">
      {children}
    </div>
  );
};

export const BentoGridItem = ({ title, description, imageUrl, icon }) => {
  return (
    <div className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 bg-white border border-2 justify-between flex flex-col space-y-4">
      <img
        src={imageUrl}
        alt=""
        className="w-[100%] h-40 object-cover rounded-md"
      />
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs">
          {description}
        </div>
      </div>
    </div>
  );
};
