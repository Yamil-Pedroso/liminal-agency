import { useLocation } from "@tanstack/react-router";

const UseCurrentPath = () => {
  const { pathname } = useLocation();
  return {
    pathname,
    isAbout: location.pathname === "/about",
    isWork: location.pathname === "/work",
  };
};

const CurrentPath = () => {
  const { isAbout, isWork } = UseCurrentPath();

  if (!isAbout && !isWork) return null;

  return (
    <div className="flex justify-center items-center mt-[-3rem]">
      <h1 className="text-5xl font-bold text-[var(--color-orange-accent)]">
        Liminal
      </h1>
    </div>
  );
};

export default CurrentPath;
