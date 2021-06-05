// Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.
// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
//Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.
// Change code below this line
function calculateMeanTemperature(forecast) {
  // const todayLow = forecast.today.low;
  // const todayHigh = forecast.today.high;
  // const tomorrowLow = forecast.tomorrow.low;
  // const tomorrowHigh = forecast.tomorrow.high;
  const {
    today: {
      low: todayLow,
      high: todayHigh
    },
    tomorrow: {
      low: tomorrowLow,
      high: tomorrowHigh
    }
  } = forecast;  

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}