import * as React from 'react';
import Tile from './components/Tile/index.tsx';
import {SymbolMapType, OverworldProps} from './types';
import './styles.css';

const validateTiles = ({
  len,
  symbolMap,
  tiles
}: {
  len: number,
  symbolMap: SymbolMapType,
  tiles: string,
}) => {
  if (tiles.length !== len) {
    throw new Error('Tiles length must match rows * columns');
  }
  const symbols = Object.keys(symbolMap);
  for(let i = 0; i < tiles.length; i++) {
    if (!symbols.includes(tiles[i])) {
      throw new Error(`Invalid tiles symbol, "${tiles[i]}" found at ${i} index`);
    }
  }
}

const getGridStyle = ({rows, columns}: {rows: number, columns: number}) => {
  return {
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };
}


export default class Overworld extends React.Component<OverworldProps> {
  render() {
    const {
      className = null,
      rows,
      columns,
      symbolMap,
      tiles,
    } = this.props;

    validateTiles({
      len: rows * columns,
      symbolMap,
      tiles,
    });

    return (
      <div className={`overworld${className !== null ? ` ${className}`: ''}`}
        style={getGridStyle({rows, columns})}>
        {
          tiles
            .split('')
            .map((c: string, i: number) =>
              <Tile key={i} src={symbolMap[c]} />
            )
        }
      </div>
    );
  }
}
