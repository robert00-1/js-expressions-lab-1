const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;

// Temperature data variables converted to Celsius
const day1TempC = (32 - 32) * 5 / 9; // 0
const day3TempC = (70 - 32) * 5 / 9; // 21.11
const day5TempC = (80 - 32) * 5 / 9; // 26.67
const day7TempC = (72 - 32) * 5 / 9; // 22.22
const day9TempC = (68 - 32) * 5 / 9; // 20
const day11TempC = (75 - 32) * 5 / 9; // 23.89
const day13TempC = (82 - 32) * 5 / 9; // 27.78
const day15TempC = (65 - 32) * 5 / 9; // 18.33
const day17TempC = (77 - 32) * 5 / 9; // 25
const day19TempC = (78 - 32) * 5 / 9; // 25.56
const day21TempC = (73 - 32) * 5 / 9; // 22.78
const day23TempC = (79 - 32) * 5 / 9; // 26.11
const day25TempC = (71 - 32) * 5 / 9; // 21.67
const day27TempC = (74 - 32) * 5 / 9; // 23.33
const day29TempC = (76 - 32) * 5 / 9; // 24.44


// Total temperatures in Celsius
const tot_temperature_in_celsius = day1TempC + day2TempC + day3TempC + day4TempC + day5TempC + day6TempC + day7TempC + day8TempC + day9TempC + day10TempC + day11TempC + day12TempC + day13TempC + day14TempC + day15TempC + day16TempC + day17TempC + day18TempC + day19TempC + day20TempC + day21TempC + day22TempC + day23TempC + day24TempC + day25TempC + day26TempC + day27TempC + day28TempC + day29TempC + day30TempC;


// Convert each day's Celsius temp to Fahrenheit and sum
const dayTempsF = [
(day1TempC * 9/5) + 32,
(day2TempC * 9/5) + 32,
(day3TempC * 9/5) + 32,
(day4TempC * 9/5) + 32,
(day5TempC * 9/5) + 32,
(day6TempC * 9/5) + 32,
(day7TempC * 9/5) + 32,
(day8TempC * 9/5) + 32,
(day9TempC * 9/5) + 32,
(day10TempC * 9/5) + 32,
(day11TempC * 9/5) + 32,
(day12TempC * 9/5) + 32,
(day13TempC * 9/5) + 32,
(day14TempC * 9/5) + 32,
(day15TempC * 9/5) + 32,
(day16TempC * 9/5) + 32,
(day17TempC * 9/5) + 32,
(day18TempC * 9/5) + 32,
(day19TempC * 9/5) + 32,
(day20TempC * 9/5) + 32,
(day21TempC * 9/5) + 32,
(day22TempC * 9/5) + 32,
(day23TempC * 9/5) + 32,
(day24TempC * 9/5) + 32,
(day25TempC * 9/5) + 32,
(day26TempC * 9/5) + 32,
(day27TempC * 9/5) + 32,
(day28TempC * 9/5) + 32,
(day29TempC * 9/5) + 32,
(day30TempC * 9/5) + 32
];


const tot_temperature_in_fahrenheit = dayTempsF.reduce((a, b) => a + b, 0);


// Averages
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;


// Console logs
console.log("Total temperature in Celsius:", tot_temperature_in_celsius);
console.log("Total temperature in Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Average temperature in Celsius:", avg_temperature_in_celsius);
console.log("Average temperature in Fahrenheit:", avg_temperature_in_fahrenheit);