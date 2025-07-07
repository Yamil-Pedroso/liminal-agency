import { useCounter } from "@/hooks/useCounter";

type FunFactItemProps = {
  title?: string;
  quantity: number;
  start: boolean;
  className?: string;
  classNameTitle?: string;
  classNameQuantity?: string;
};

const FunFactItem = ({
  title,
  quantity,
  start,
  className,
  classNameTitle,
  classNameQuantity,
}: FunFactItemProps) => {
  const count = useCounter({
    to: quantity,
    duration: 2000,
    start,
  });

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <h3 className={classNameTitle}>{title}</h3>
      <span className={classNameQuantity}>{count}</span>
    </div>
  );
};

export default FunFactItem;
