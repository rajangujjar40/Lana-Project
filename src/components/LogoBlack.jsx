import React, { useContext } from "react";
import { useRouter } from "next/router";
const LogoBlack = ({ ...props }) => {
  const router = useRouter();
  const imagePath = "/images/black_logo.png";

  return (
    <img
      src={imagePath}
      alt="Logo"
      {...props}
      width="100%"
      onClick={() => router.push("/")}
      className="blackLogo"
      style={{ maxWidth: "149px", cursor: "pointer" }}
    />
  );
};

export default LogoBlack;
