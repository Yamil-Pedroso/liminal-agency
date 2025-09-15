type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
};

const SectionHeader = ({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) => {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div
      className={`flex flex-col-reverse md:flex-row gap-5 ${alignment[align]} ${className}`}
    >
      <h2 className="text-[2.1rem] font-bold text-[#848a91]">{title}</h2>

      <span className="w-[1px] h-[3rem] bg-[#8d8d8d] hidden md:block"></span>
      {subtitle && (
        <p className="text-[1.0625rem] text-muted-foreground max-w-xl underline underline-offset-14 decoration-1 decoration-accent  md:no-underline">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
