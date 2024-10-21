import SubHeading from "@/app/_components/ui/sub-heading";

type TData = {
  [key: string]: string | string[] | TData;
}

type TRecursiveComponent = {
  object: TData;
  level?: number;
}

export default function DisplayData({ object, level = 0 }: Readonly<TRecursiveComponent>) {
  return (
    <div>
      {Object.entries(object).map(([key, value]) => (
        <div key={key} className={`md:flex md:items-start ml-[${level * 20}px] md:ml-0`}>
          <div className={`md:w-[30%] lg:w-[20%] ${level === 0 && "py-5"}`}>
            <SubHeading text={`${key.charAt(0).toUpperCase() + key.slice(1)}`} />
          </div>
          <div className="md:flex-1">
            {typeof value === 'object' && !Array.isArray(value) ? (
              <DisplayData object={value} level={level + 1} />
            ) : Array.isArray(value) ? (
              <ul>
                {value.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <div>{value}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
