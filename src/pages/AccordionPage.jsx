import React from "react";
import Accordion from "../components/Accordion";
const AccordionPage = () => {
  const items = [
    {
      id: "1hjg",
      label: "Can I use react in all of the projects",
      content:
        "Yes you can use it anytime you want.Yes you can use it anytime you want.Yes you can use it anytime you want.Yes you can use it anytime you want.Yes you can use it anytime you want.Yes you can use it anytime you want.Yes you can use it anytime you want.",
    },
    {
      id: "2jhgjh",
      label: "Can I use javascript in all of the projects",
      content:
        "Yes you can use it anytime you want.Yes you can use it anytime you want.Yes you can use it anytime you want.Yes you can use it anytime you want.Yes you can use it anytime you want.Yes you can use it anytime you want.Yes you can use it anytime you want.",
    },
    {
      id: "3hg",
      label: "Can I use angular in all of the projects",
      content:
        "Yes you can use it anytime you want.Yes you can use it anytime you want.Yes you can use it anytime you want.Yes you can use it anytime you want.Yes you can use it anytime you want.Yes you can use it anytime you want.Yes you can use it anytime you want.",
    },
  ];

  return <Accordion items={items} />;
};

export default AccordionPage;
