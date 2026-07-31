"use client";

import { ElementType, useMemo, createElement } from "react";

interface TextTypeProps {
  className?: string;
  showCursor?: boolean;
  cursorCharacter?: string | React.ReactNode;
  cursorClassName?: string;
  text: string | string[];
  as?: ElementType;
}

const TextType = ({
  text,
  as: Component = "div",
  className = "",
  showCursor = false,
  cursorCharacter = "|",
  cursorClassName = "",
  ...props
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
  const textArray = useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text],
  );
  const content = textArray[0] ?? "";

  return createElement(
    Component,
    {
      className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
      ...props,
    },
    <span className="inline">{content}</span>,
    showCursor ? (
      <span className={`ml-1 inline-block ${cursorClassName}`}>
        {cursorCharacter}
      </span>
    ) : null,
  );
};

export default TextType;
