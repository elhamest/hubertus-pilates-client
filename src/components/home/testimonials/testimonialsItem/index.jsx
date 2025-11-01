import Image from "next/image";

const TestimonialsItem = ({ data }) => {
  return (
    <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-richBlack-800">
      <p className="text-2xl leading-normal ">{data?.description}</p>

      {/* Avatar */}
      <div className="flex items-center mt-8 space-x-3">
        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
          <Image
            src={data?.image}
            width="40"
            height="40"
            alt="Avatar"
            placeholder="blur"
          />
        </div>
        <div>
          <div className="text-lg font-medium">{data?.name}</div>
          <div className="text-gray-600 dark:text-gray-400">{data?.title}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsItem;
