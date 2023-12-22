const ManageTaskCard = ({ data }) => {
  const { title, description, category } = data || {};
  return (
    <div>
      <div className="flex flex-col min-h-full cursor-move">
        <div className="bg-white p-2 rounded flex flex-col justify-between h-full">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-bold text-[#2c2a37]">
              {title}
            </h2>

            <h2 className="text-lg md:text-xl  font-bold text-[#76757a]">
              <span className="text-red-500">Priority:</span> {category}
            </h2>

            <p className="text-base text-[#76757a] flex-grow">
              {description?.length > 30
                ? `${description.slice(0, 30)}...`
                : description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTaskCard;
