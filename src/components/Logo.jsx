import React, { useContext } from "react";
import { useRouter } from "next/router";
const Logo = ({ ...props }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  const imagePath =
    currentPath === "/" ? "/images/logo.svg" : "/images/black_logo.svg";

  return (
    <img
      src={imagePath}
      alt="Logo"
      {...props}
      width="100%"
      onClick={() => router.push("/")}
      style={{ maxWidth: "120px", cursor: "pointer" }}
    />
  );
};

export default Logo;
