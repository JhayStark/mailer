const profile = () => {
  return (
    <div className=" h-full flex flex-col  gap-3 mt-10">
      <div className="flex flex-col gap-6 w-[50%] m-auto justify-center border-2 rounded-lg min-w-fit">
        <h3 className="text-3xl text-gray-600 font-bold mb-4 border-b-2 border-gray-200 ">
          Basic Info
        </h3>
        <p className=" flex gap-10 border-b-2 border-gray-200 font-medium">
          Name <span className="font-normal">John Doe</span>
        </p>
        <p className=" flex gap-10 border-b-2 border-gray-200  font-medium">
          Birthday <span className="font-normal">8th November</span>
        </p>
        <p className=" flex gap-10  font-medium">
          Gender <span className="font-normal">Male</span>
        </p>
      </div>
      <div className=" flex flex-col gap-6 w-[50%] m-auto justify-center border-2 rounded-lg  min-w-fit">
        <h3 className="text-3xl font-bold mb-4 border-b-2 border-gray-200 text-gray-600">
          Contact Info
        </h3>
        <p className=" flex gap-10 border-b-2 border-gray-200  font-medium">
          Alternate emails{" "}
          <span className="font-normal">johnDoe@gmail.com</span>
        </p>
        <p className=" flex gap-10  font-medium">
          Phone numbers<span className="font-normal">+23323789462</span>
        </p>
      </div>
    </div>
  );
};

export default profile;
