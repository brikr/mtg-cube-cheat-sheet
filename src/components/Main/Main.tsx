import Card from "components/Card";
import { CARDS } from "constants/cards";
import React from "react";

export const Main: React.FC = () => {
  return (
    <>
      {CARDS.map((scryfallId, idx) => (
        <>
          {idx > 0 && <hr />}
          <Card key={idx} scryfallId={scryfallId} />
        </>
      ))}
    </>
  );
};
