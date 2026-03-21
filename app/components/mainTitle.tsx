import asset from "../content/static";

export default function Title() {
  const {mainTitle, mainSubtitle} = asset;
  return (
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold">
        {mainTitle}
      </h1>
      <p className="text-sm md:text-lg font-regular mt-4 w-full md:w-[80%] mx-auto">
        {mainSubtitle}
      </p>
    </div>
  );
}
