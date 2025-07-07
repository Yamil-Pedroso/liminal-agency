import { ReactNode } from "react";

type GridBlockProps = {
  width?: string;
  height?: string;
  background?: string;
  children?: ReactNode;
  className?: string;
  boxShadow?: string;
};

const GridBlock = ({
  width = "32rem",
  height,
  background,
  children,
  className = "",
  boxShadow,
}: GridBlockProps) => {
  return (
    <div
      className={`flex overflow-hidden ${background} ${className} ${boxShadow}`}
      style={{
        width: width,
        height: height,
      }}
    >
      {children}
    </div>
  );
};

export default GridBlock;
