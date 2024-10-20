import SubHeading from "@/app/_components/ui/sub-heading";

type TRecursiveComponent = {
  object: Object;
  level?: number;
}

export default function DisplayData({ object, level = 0 }: TRecursiveComponent) {
  return (
    <div className="py-2">
      {Object.entries(object).map(([key, value]) => (
        <div key={key} style={{ marginLeft: `${level * 20}px` }}>
          <SubHeading text={`${key.charAt(0).toUpperCase() + key.slice(1)} :`} />
          {typeof value === 'object' && !Array.isArray(value) ? (
            <DisplayData object={value} level={level + 1} />
          ) : Array.isArray(value) ? (
            <>
              <ul>
                {value.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          ) : (
            <>{value}</>
          )}
        </div>
      ))}
    </div>
  )
}
