export const upperCaseWord = (word) => {
  const changeWord = word.split("__")[1];
  return changeWord[0].toUpperCase() + changeWord.slice(1);
};
