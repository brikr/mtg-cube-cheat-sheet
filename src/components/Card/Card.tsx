import { fetchCard } from "api/scryfall";
import React, { useEffect, useState } from "react";
import { css, styled } from "theme";
import { ScryfallCard } from "types/scryfall-card";
import { oracleTextToHTML } from "util/oracle-text-to-html";

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    @media (max-width: ${theme.device.tablet}) {
      justify-content: center;
    }

    margin: 1em;
  `}
`;

const CardImage = styled.img`
  ${({ theme }) => css`
    width: 300px;
    height: 418px;

    background-color: ${theme.staticColors.cardBorder};
    border-radius: 15px;
  `}
`;

const CardInfo = styled.div`
  ${({ theme }) => css`
    width: 440px;

    margin-left: 10px;

    @media (max-width: ${theme.device.tablet}) {
      margin: 0;
      flex-basis: 100%;
    }
  `}
`;

const TitleLine = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  margin-right: 5px;
`;

const ManaCost = styled.span`
  margin-top: 6px;
`;

const TypeLine = styled.p`
  margin-top: 0;
`;

interface Props {
  scryfallId: string;
}

export const Card: React.FC<Props> = ({ scryfallId }) => {
  const [card, setCard] = useState<ScryfallCard>();

  useEffect(() => {
    (async () => {
      const scryfallCard = await fetchCard(scryfallId);
      setCard(scryfallCard);
    })();
  }, [scryfallId]);

  return (
    <Container>
      <CardImage src={card?.imageUri} />
      {card && (
        <CardInfo>
          <TitleLine>
            <Title>{card.name}</Title>
            <ManaCost
              dangerouslySetInnerHTML={{
                __html: oracleTextToHTML(card.manaCost),
              }}
            />
          </TitleLine>
          <TypeLine>{card.typeLine}</TypeLine>
          <div
            dangerouslySetInnerHTML={{
              __html: oracleTextToHTML(card.oracleText),
            }}
          />
        </CardInfo>
      )}
    </Container>
  );
};
