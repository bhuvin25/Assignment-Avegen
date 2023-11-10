export const winAction = () => {
    return {
      type: 'WIN',
      payload: 100,
    };
  };
  
  export const loseAction = () => {
    return {
      type: 'LOSE',
      payload: 50,
    };
  };
  