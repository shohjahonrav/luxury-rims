import { RimsData } from "@/data/rims/RimsData";
import { RimCard } from "@/features/Rims/components/RimCard";

const ChooseYourRims = () => {
  return (
    <div className="w-full px-5 md:px-6.25 lg:px-10 flex justify-center">
      <div className="pt-25 md:pt-37.5 flex flex-col pb-18.75 gap-10 md:gap-20 max-w-[1830px] w-full mx-auto">
        <span className="md:text-center md:flex items-center justify-center text-[34px] md:text-[54px] font-medium text-white">
          Choose Your Rims
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3.75 gap-y-5">
          {RimsData.slice(0, 4).map((item, i) => (
            <RimCard
              imgSrc={item}
              key={i}
              imgSizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 50vw"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseYourRims;
