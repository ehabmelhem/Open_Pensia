import React from "react";
import MainNavBar from "../Components/MainNavBar";

export default function InfoDirector() {
  let infoDirectorTabs = [
    {
      className: "non-active-nav",
      href: "#",
      content: "סיכום פרטים",
    },
    {
      className: "active-nav",
      href: "#",
      content: "עוד מידע",
    },
    {
      className: "non-active-nav",
      href: "#",
      content: "נתוני הצבעה",
    },
  ];
  return (
    <div>
      <MainNavBar navTabs={infoDirectorTabs} />
    </div>
  );
}
