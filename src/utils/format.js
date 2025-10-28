import numeral from "numeral";

export const fmtInt = (n) => numeral(n).format("0,0").replace(/,/g, ".");
export const pct = (part, total) => (total > 0 ? (part / total) * 100 : 0);

export const calcTotal = (agrupaciones) =>
  agrupaciones.reduce((acc, a) => acc + (a.votos ?? 0), 0);
