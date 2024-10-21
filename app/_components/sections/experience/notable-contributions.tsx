import { TContributions } from "@/app/_components/sections/experience/types";

export default function NotableContributions({ contributions }: Readonly<{ contributions: TContributions }>)  {
  return (
    <>
      <p className="font-bold">Notable Contributions:</p>
      <ul className="list-disc pl-5">
        {contributions.map((contribution, index) => (
          <li key={index}>{contribution}</li>
        ))}
      </ul>
    </>
  );
};
