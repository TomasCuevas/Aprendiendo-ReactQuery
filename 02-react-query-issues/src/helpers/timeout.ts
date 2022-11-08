export const timeout = async (miliseconds: number): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, miliseconds);
  });
};
