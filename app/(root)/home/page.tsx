import OfferCard from "@/components/offer-card";

const categories = ["All", "Healthcare", "Lifestyle", "Resturants"];

export default async function Blogs() {
  return (
    <>
      <div className="home w-full text-center flex items-center justify-center gap-3 flex-col h-60  ">
        <p>Hi Hemanth , Here is your Social Credit ! </p>
        {<span className="text-4xl font-bold ">₹3,304</span>}
      </div>
      <div className=" p-2">
        <ul className="flex flex-wrap gap-2 items-center justify-center">
          {categories.map((category) => (
            <li
              key={category}
              className="bg-gray-200 rounded-full px-2 py-1 text-black"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="offers flex flex-col gap-2 my-4">
        <OfferCard/>
        <OfferCard/>
        <OfferCard/>
      </div>
    </>
  );
}
