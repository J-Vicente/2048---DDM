import { createContext, ReactNode, useContext, useState } from "react";

interface GameContextControls{
    score: number;
    grid : number [][]; 
    newBlock:()=> void; 
    moveBlocks:(direction:number)=> void;
    canMerge: boolean;
}

const GameContext = createContext<GameContextControls>({} as GameContextControls);

export function GameProvider({children}:{children: ReactNode }){
    const [score, setScore] = useState(12840);
    const [grid, setGrid] = useState(Array.from({ length: 4 }, () =>Array(4).fill(2)));
    const [canMerge, setCanMerge] = useState(false);
  

    function newBlock(){

      const emptyCells: { row: number; col: number }[] = [];

      grid.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
          if (value === 0) {
            emptyCells.push({ row: rowIndex, col: colIndex });
          }
        });
      });

      if (emptyCells.length === 0) return;

      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const { row, col } = emptyCells[randomIndex];

      const newGrid = grid.map((row) => [...row]);
      newGrid[row][col] = Math.random() < 0.9 ? 2 : 4;

      setGrid(newGrid);
    }

    function moveBlocks(direction: number){

      if(direction == 1){
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {

              if((grid[i][j] != 0) && (grid[i][j+1] == 0)){

                grid[i][j+1] = grid[i][j];
                grid[i][j] = 0;

              }else if(grid[i][j] == grid[i][j+1]){

                grid[i][j+1] += grid[i][j];
                grid[i][j] = 0;
                setScore(score + grid[i][j+1]);

              }

          }
        }
      }

      if(direction == 2){
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {

              if((grid[i][j] != 0) && (grid[i][j-1] == 0)){

                grid[i][j-1] = grid[i][j];
                grid[i][j] = 0;

              }else if(grid[i][j] == grid[i][j-1]){

                grid[i][j-1] += grid[i][j];
                grid[i][j] = 0;
                setScore(score + grid[i][j-1]);

              }
          }
        }
      }

      if(direction == 3){
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {

              if((grid[i][j] != 0) && (grid[i-1][j] == 0)){

                grid[i-1][j] = grid[i][j];
                grid[i][j] = 0;

              }else if(grid[i][j] == grid[i-1][j]){

                grid[i-1][j] += grid[i][j];
                grid[i][j] = 0;
                setScore(score + grid[i-1][j]);

              }

          }
        }
      }

      if(direction == 4){
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {

              if((grid[i][j] == 0) && (grid[i+1][j] != 0)){

                grid[i+1][j] = grid[i][j];
                grid[i][j] = 0;

              }else if(grid[i][j] == grid[i+1][j]){

                grid[i+1][j] += grid[i][j];
                grid[i][j] = 0;
                setScore(score + grid[i+1][j]);

              }

          }
        }
      }
    }

  return(
    <GameContext.Provider value={{
      score,
      grid ,
      newBlock,
      moveBlocks,
      canMerge,
    }}>
      {children}
    </GameContext.Provider>
  );
}

export function UseGame(){
  const context = useContext(GameContext);

  if(!context){
    throw new Error("useGame deve ser usado dentro de GameProvider");
  }
  return context;
}