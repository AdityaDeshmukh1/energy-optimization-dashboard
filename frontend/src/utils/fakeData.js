// src/utils/fakeData.js

export const generateFakeData = () => {
    const data = [];
    for (let i = 1; i <= 12; i++) {
      data.push({
        month: `Month ${i}`,
        value: Math.floor(Math.random() * 100) + 1,
      });
    }
    return data;
  };
  