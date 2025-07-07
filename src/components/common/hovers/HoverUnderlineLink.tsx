interface HoverUnderlineLinkProps {
  text: string | string[];
  classNameText?: string;
}

const HoverUnderlineLink = ({
  text,
  classNameText,
}: HoverUnderlineLinkProps) => {
  return (
    <div className="relative inline-block group mb-1.5">
      <span
        className={`text-3xl group-hover:text-[var(--color-orange-accent)] ${classNameText}`}
      >
        {text}
      </span>
      <span className="absolute left-0 bottom-[-6px] h-[4px] w-[1.2rem] bg-[var(--color-orange-accent)] transition-all duration-300 group-hover:w-full" />
    </div>
  );
};

export default HoverUnderlineLink;
