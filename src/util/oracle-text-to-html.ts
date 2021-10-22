import { data as symbols } from "constants/symbology.json";
import { css } from "theme";

const DEFAULT_SYMBOL_STYLES = css`
  /* Copied from Scryfall */

  display: inline-block;
  margin: 1px 1px -1px 1px;
  border-radius: 500px;
  box-shadow: -1px 1px 0 rgb(0 0 0 / 85%);
  text-indent: -999em;
  overflow: hidden;
  width: 15px;
  height: 15px;
  background-size: 100% 100%;
  background-position: top left;
`;

export function oracleTextToHTML(oracleText: string): string {
  // Start with the base Oracle text
  let html = oracleText;

  // For reminder text, surround parenthesis with <i> tags
  html = html.replaceAll("(", "<i>(");
  html = html.replaceAll(")", ")</i>");

  // Replace symbol text with SVGs;
  symbols.forEach((symbol) => {
    const abbrEl = `<abbr title="${symbol.english}" style="background-image: url(${symbol.svg_uri}); ${DEFAULT_SYMBOL_STYLES}">${symbol.symbol}</abbr>`;

    html = html.replaceAll(symbol.symbol, abbrEl);
  });

  return html;
}
