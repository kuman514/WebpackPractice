const intervalIds = new Set();
const intervals = {
  addIntervalId: (intervalId) => {
    intervalIds.add(intervalId);
  },
  stopInterval: (intervalId) => {
    clearInterval(intervalId);
    intervalIds.delete(intervalId);
  },
  clearAllIntervals: () => {
    console.log(intervalIds);
    intervalIds.forEach((intervalId) => {
      clearInterval(intervalId);
    });
    intervalIds.clear();
  }
};

export default intervals;
