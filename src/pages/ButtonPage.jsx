import React from "react";
import { GoBell } from "react-icons/go";
import Button from "../components/Button";

const ButonPage = () => {
  return (
    <div>
      <Button primary rounded>
        <GoBell />
        New
      </Button>
      <Button secondary outline rounded>
        New
      </Button>
      <Button success outline>
        New
      </Button>
      <Button warning>New</Button>
      <Button danger>New</Button>
    </div>
  );
};

export default ButonPage;
