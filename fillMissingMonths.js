const fillMissingMonths = (data) => {
  const allMonths = Array.from({ length: 12 }, (_, i) => ({
    month: i + 1,
    value: 0,
  }));

  data.forEach((item) => {
    const index = allMonths.findIndex(
      (monthObj) => monthObj.month === item.month
    );
    if (index !== -1) {
      allMonths[index] = item;
    }
  });
  return allMonths;
};

const data = [
  { month: 4, value: 80 },
  { month: 6, value: 10 },
  { month: 9, value: 20 },
  { month: 12, value: 50 },
];

console.log(fillMissingMonths(data));

