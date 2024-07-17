import Image from "next/legacy/image";

const Category = () => {
  return (
    <section className="my-12 mx-4 sm:mx-10">
      <h2 className="text-2xl font-bold mb-6">Categories</h2>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-6 flex items-center justify-between w-full sm:w-1/3">
          <div className="text-white text-xl font-semibold ml-10">Toys</div>
          <div className="w-24 h-24 relative mr-5">
            <Image
              src="/images/toy.png"
              alt="Toys"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-lg p-6 flex items-center justify-between w-full sm:w-1/3">
          <div className="text-white text-xl font-semibold ml-10">
            Home Decor
          </div>
          <div className="w-24 h-24 relative mr-5">
            <Image
              src="/images/home_decor.png"
              alt="Home Decor"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg p-6 flex items-center justify-between w-full sm:w-1/3">
          <div className="text-white text-xl font-semibold ml-10">Fashion</div>
          <div className="w-24 h-24 relative mr-5">
            <Image
              src="/images/fashion.png"
              alt="Fashion"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
