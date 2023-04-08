import React from "react";
// Css files
import "./Grid.css";
import "animate.css";
// Components
import { Node } from "../index";

interface Props {
  grid: any;
  handleCellClick:any
}

const Grid = ({ grid, handleCellClick }:Props) => {
  return (
    <table className="grid-table">
      <tbody>
        {grid &&
          grid?.map((row:any, rowIndex:number) => {
            return (
              <tr className="row" key={rowIndex}>
                {row.map((cell:any, columnIndex: number) => {
                  return (
                    <Node
                      key={rowIndex + "-" + columnIndex}
                      cell={cell}
                      handleClickCallback={handleCellClick}
                    />
                  );
                })}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Grid;
