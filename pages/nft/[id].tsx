import React from "react";
function NFTDroppage() {
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* left */}
      <div className=" bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2">
          <div className=" bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
            <img
              className=" w-44 rounded-xl object-cover lg:w-72"
              src={
                "https://www.themonthly.com.au/sites/default/files/styles/featured_essay/public/Cooke_0322_1140x700.jpg?itok=HlTQ0rju"
              }
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className=" space-y-2 p-5 text-center">
            <h1 className=" text-4xl font-bold text-white">
              Мичин гарагийн бослого
            </h1>
            <h2 className=" text-xl text-gray-300">
              A collection of NFT Apes who live & breathe REACT
            </h2>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* header */}
        <header className="flex  items-center justify-between">
          <h1 className="  cursor-pointer text-xl font-extralight ">
            Market place{" "}
            <span className=" font-extrabold underline decoration-pink-600/50">
              Phill Anderson
            </span>{" "}
            NFT APES
          </h1>
          <button className="rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base">
            Sign in
          </button>
        </header>
        <hr className="my-2 border" />
        {/* content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center">
          <img
            className=" w-80 object-cover pb-10 lg:h-40"
            src="https://cryptopotato.com/wp-content/uploads/2022/01/img1_bayc.jpg"
            alt=""
          />
          <h1 className=" text-3xl font-bold lg:text-5xl lg:font-extrabold">
            The Lorem ipsum dolor set amet | NFT Drop
          </h1>
          <p className=" pt-2 text-green-500 text-xl">13 / 24 NFT's claimed</p>
        </div>
        {/* button */}
        <button className=" h-16 bg-red-600 w-full text-white rounded-full">
          Mint NFT (0.01ETH)
        </button>
      </div>
    </div>
  );
}

export default NFTDroppage;
