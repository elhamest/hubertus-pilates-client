import Link from "next/link";

const MobileNavbar = ({ navigations, setIsOpen }) => {
  return (
    <>
      {navigations?.map((item, index) => (
        <Link
          key={index}
          href={item?.path}
          className="w-full px-4 py-2 -ml-4 rounded-md dark:text-pureWhiteColor hover:text-primaryColor hover:bg-pureWhiteColor dark:hover:text-primaryColor focus:text-primaryColor focus:outline-none hover:tracking-wide transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {item?.title}
        </Link>
      ))}
    </>
  );
};

export default MobileNavbar;
