"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SwapTextProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * Whether to disable the click interaction.
   */
  disableClick?: boolean;

  /**
   * The final text to display.
   */
  finalText: string;

  /**
   * The class name for the final text.
   */
  finalTextClassName?: string;

  /**
   * The initial text to display.
   */
  initialText: string;

  /**
   * The class name for the initial text.
   */
  initialTextClassName?: string;

  /**
   * Whether the component should toggle on hover as well as click.
   */
  supportsHover?: boolean;

  /**
   * The class name for the text.
   */
  textClassName?: string;
}

export default function SwapText({
  initialText,
  finalText,
  className,
  supportsHover = true,
  textClassName,
  initialTextClassName,
  finalTextClassName,
  disableClick,
  // The rest of the props are passed to the container div.
  ...props
}: SwapTextProps) {
  const [active, setActive] = useState(false);
  const common = "block transition-all duration-1000 ease-slow";

  const longWord = finalText.length > initialText.length ? finalText : null;

  return (
    <div
      {...props}
      className={cn("text-foreground relative z-0 overflow-hidden", className)}
    >
      <div
        className={cn("group cursor-default text-3xl font-bold", textClassName)}
        onClick={() => !disableClick && setActive((current) => !current)}
      >
        <span
          className={cn(common, initialTextClassName, {
            "flex flex-col": true,
            "-translate-y-full": active,
            "group-hover:-translate-y-full": supportsHover,
          })}
        >
          {initialText}
          {
            /* Trick to make sure it can always fit all available words after transition as the second word is set to absolute*/
            Boolean(longWord?.length) && (
              <span className="invisible h-0">{longWord}</span>
            )
          }
        </span>
        <span
          className={cn(
            `${common} absolute top-full w-full`,
            finalTextClassName,
            {
              "-translate-y-full": active,
              "group-hover:-translate-y-full": supportsHover,
            }
          )}
        >
          {finalText}
        </span>
      </div>
    </div>
  );
}
