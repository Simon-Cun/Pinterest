const SearchIdea = () => {
  return (
    <div className="flex h-screen bg-yellow-200">
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="h-[12vh] w-[20vw] rounded-full bg-white">
          <div></div>
          <p className="flex h-full items-center justify-center text-2xl font-semibold text-red-950">
            easy chicken dinner
          </p>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-red-700">Search for an idea</h1>
        <p className="pt-[2vh] pr-[12vw] pb-[4vh] pl-[12vw] text-2xl text-red-700">
          What do you want to try next? Think of something you&apos;re into—like
          &quot;easy chickent dinner&quot;—and see what you find.
        </p>
        <div className="flex h-12 w-22 items-center justify-center rounded-4xl bg-red-700 text-white">
          Explore
        </div>
      </div>
    </div>
  );
};

export default SearchIdea;
