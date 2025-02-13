// utils.js
// This file contains utility functions for the weather app.

export function getWeatherIcon(wmoCode) {
  // This function takes a WMO (World Meteorological Organization) weather code and returns the
  // corresponding weather icon as a string. The icons are stored in a Map object, where the keys
  // are arrays of WMO codes and the values are the corresponding icons.

  const icons = new Map([
    // The first array contains the WMO codes for clear skies, and the icon is "☀️".
    [[0], "☀️"],
    // The second array contains the WMO codes for mostly clear skies, and the icon is "🌤".
    [[1], "🌤"],
    // The third array contains the WMO codes for partly cloudy skies, and the icon is "⛅️".
    [[2], "⛅️"],
    // The fourth array contains the WMO codes for overcast skies, and the icon is "☁️".
    [[3], "☁️"],
    // The fifth array contains the WMO codes for fog, and the icon is "🌫".
    [[45, 48], "🌫"],
    // The sixth array contains the WMO codes for light rain showers, and the icon is "🌦".
    [[51, 56, 61, 66, 80], "🌦"],
    // The seventh array contains the WMO codes for moderate rain showers, and the icon is "🌧".
    [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
    // The eighth array contains the WMO codes for heavy rain showers, and the icon is "🌨".
    [[71, 73, 75, 77, 85, 86], "🌨"],
    // The ninth array contains the WMO codes for thunderstorms, and the icon is "🌩".
    [[95], "🌩"],
    // The tenth array contains the WMO codes for heavy thunderstorms, and the icon is "⛈".
    [[96, 99], "⛈"],
  ]);

  // The function finds the first key in the Map object that contains the WMO code, and returns the
  // corresponding icon.
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  return icons.get(arr) || "NOT FOUND";
}

export function convertToFlag(countryCode) {
  // This function takes a country code (e.g. "US") and returns the corresponding flag emoji as a
  // string.

  // The function uses the Unicode code points for the flag emojis, which are stored in the
  // following array.
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());

  // The function uses the String.fromCodePoint() method to create the flag emoji from the code
  // points.
  return String.fromCodePoint(...codePoints);
}

export function formatDay(dateStr) {
  // This function takes a date string (e.g. "2022-07-25") and returns the corresponding day of the
  // week as a string (e.g. "Mon").

  // The function uses the Intl.DateTimeFormat object to format the date string.
  return new Intl.DateTimeFormat("en", { weekday: "short" }).format(
    new Date(dateStr)
  );
}
