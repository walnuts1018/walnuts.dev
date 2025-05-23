import SwapText from "./SwapText";

export const ContentHeader = ({
  initialText,
  finalText,
}: {
  finalText: string;
  initialText: string;
}) => {
  return (
    <SwapText
      textClassName="cursor-default text-4xl text-center lg:text-left"
      initialText={initialText}
      initialTextClassName="font-Nunito"
      finalText={finalText}
      finalTextClassName="font-ZenMaruGothic font-semibold"
      disableClick={false}
    />
  );
};
