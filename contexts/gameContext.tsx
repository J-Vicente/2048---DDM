import { useRouter } from "expo-router";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface GameContextControls{
    score: number;
    grid : number [][]; 
    newBlock:()=> void; 
    moveBlocks:(direction:number)=> void;
    canMerge: boolean;
    loseGame:()=> void;
    restartGame:()=> void;
    newGame: ()=> void;
    continueGame: ()=> void;
}

const GameContext = createContext<GameContextControls>({} as GameContextControls);

export function GameProvider({children}:{children: ReactNode }){
  
    const [score, setScore] = useState(0);
    const [grid, setGrid] = useState(Array.from({ length: 4 }, () =>Array(4).fill(0)));
    const [canMerge, setCanMerge] = useState(true);
    const [emptyGrid, setEmptyGrid] = useState(false);
    
    const router = useRouter();

    function newGame() {
      setGrid(prevGrid => {
        const newGrid = Array.from({ length: 4 }, () =>Array(4).fill(0));
        return newGrid;
      });              
      newBlock();
      newBlock();
    }

      
    function continueGame() {
      loadGame();
    }

    async function loseGame(){
      setCanMerge(!canMerge);
      try {
        await AsyncStorage.removeItem('score');
        await AsyncStorage.removeItem('grid');
        console.log("Jogo resetado!");
      } catch (error) {
        console.error("Erro ao resetar o jogo", error);
      }
      return;
    }

    async function saveGame(score:number, grid:number[][]) {
      try {
        await AsyncStorage.setItem('score', score.toString()); 
        await AsyncStorage.setItem('grid', JSON.stringify(grid)); 
        console.log("Jogo salvo!");
      } catch (error) {
        console.error("Erro ao salvar o jogo", error);
      }
    }

    async function loadGame() {
        try {
          const scoreSalvo = await AsyncStorage.getItem('score');
          const gridSalvo = await AsyncStorage.getItem('grid');

          if (scoreSalvo !== null && gridSalvo !== null) {      
              setScore(parseInt(scoreSalvo, 10));
              setGrid(JSON.parse(gridSalvo));
              return;    
          }
          return null; 
        } catch (error) {
          console.error("Erro ao carregar o jogo", error);
          return null;
        }
    }

    function restartGame() {
      setCanMerge(true);
      setEmptyGrid(true);
      router.push('/game')
    }

    function newBlock(){

      const emptyCells: { row: number; col: number }[] = [];

      grid.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
          if (value === 0) {
            emptyCells.push({ row: rowIndex, col: colIndex });
          }
        });
      });

      if (emptyCells.length === 0) {
        loseGame();
        return;
      }  
      

      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const { row, col } = emptyCells[randomIndex];

      const newGrid = grid.map((row) => [...row]);
      newGrid[row][col] = Math.random() < 0.9 ? 2 : 4;

      
      setGrid(prevGrid => {
        const newGrid = prevGrid.map(row => [...row]);
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const { row, col } = emptyCells[randomIndex];  
        newGrid[row][col] = Math.random() < 0.9 ? 2 : 4;

        return newGrid;
      });
      

    }

    function moveBlocks(direction: number){
      //direita
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

      //esquerda
      if(direction == 2){
        for (let i = 3; i >= 0; i--) {
            for (let j = 3; j >= 0; j--) {

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

      //cima
      if(direction == 3){
        for (let j = 3; j >= 0; j--) {
            for (let i = 3; i > 0; i--) {

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

        //baixo
      if(direction == 4){
        for (let j = 0; j <= 3; j++) {
            for (let i = 0; i < 3; i++) {

              if((grid[i][j] != 0) && (grid[i+1][j] == 0)){

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

      newBlock();
    }

    useEffect(() => {
      saveGame(score,grid)
    }, [grid]);

  return(
    <GameContext.Provider value={{
      score,
      grid ,
      newBlock,
      moveBlocks: (a) => moveBlocks(a),
      canMerge,
      loseGame,
      restartGame,
      newGame,
      continueGame,
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