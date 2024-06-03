const removeDuplicates = (arr) => {
  const unique = arr.reduce((acc, current) => {
    const x = acc.find((item) => item.id === current.id);
    if (!x) {
      acc.push(current);
    }
    return acc;
  }, []);
  return unique;
};

const arr = [
  { id: 1, value: "xyz" },
  { id: 2, value: "abc" },
  { id: 1, value: "xyz" },
  { id: 3, value: "pqr" },
  { id: 3, value: "pqr" },
];

console.log(removeDuplicates(arr));
