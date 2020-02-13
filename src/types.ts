export type SymbolMapType = {
  [symbol: string]: string,
};

export type OverworldProps = {
  className: null | string,
  rows: number,
  columns: number,
  symbolMap: SymbolMapType,
  tiles: string,
};
