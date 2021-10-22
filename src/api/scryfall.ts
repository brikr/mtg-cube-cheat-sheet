import { ScryfallCard } from "types/scryfall-card";

export const SCRYFALL_CARD_API_PREFIX = "https://api.scryfall.com/cards/";

export async function fetchCard(scryfallId: string): Promise<ScryfallCard> {
  const response = await fetch(`${SCRYFALL_CARD_API_PREFIX}/${scryfallId}`);
  const body = await response.json();

  if (!response.ok) {
    throw new Error(`Got ${response.status} from Scryfall:\n${body}`);
  }

  return {
    id: body.id,
    name: body.name,
    manaCost: body.mana_cost,
    typeLine: body.type_line,
    oracleText: body.oracle_text,
    scryfallUri: body.scryfall_uri,
    imageUri: body.image_uris.normal,
  };
}
