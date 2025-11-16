export const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return '좋은 아침이에요!';
  } else if (hour >= 12 && hour < 18) {
    return '좋은 오후에요!';
  } else if (hour >= 18 && hour < 22) {
    return '좋은 저녁이에요!';
  } else {
    return '좋은 밤이에요!';
  }
};
