import Pill from "@/app/_components/ui/pill";

import { COLORS } from "@/app/constants";

type TRenderPills = {
  values: string | string[] | undefined;
  colorIndex: number;
};

const colorKeys = Object.keys(COLORS) as Array<keyof typeof COLORS>;
const blackFontColors = ['yellow', 'orange', 'cyan'];

export default function RenderPills({ values, colorIndex }: Readonly<TRenderPills>) {
  return (
    <div className="flex flex-wrap gap-2">
      {Array.isArray(values) && values.map((value) => {
        const colorKey = colorKeys[colorIndex % colorKeys.length];
        const textColor = blackFontColors.includes(colorKey) ? 'text-black' : 'text-white';

        return (
          <Pill
            key={value}
            style={{ backgroundColor: COLORS[colorKey] }}
            className={textColor}
            text={value}
          />
        );
      })}
    </div>
  );
}
