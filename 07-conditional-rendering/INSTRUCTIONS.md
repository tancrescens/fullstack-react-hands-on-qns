# Conditional Rendering

You are given the code that asks the user to enter the current air quality (in PSI), and will be shown whether the air quality is healthy, moderate, unhealthy or hazardous.

1. Fill in the function `getAirQualityText` correctly so that the air quality can be displayed within its containing `<div>`. Use the following numbers:

  * PSI <= 50: healthy
  * PSI between 51 to 150: moderate
  * PSI between 150 to 200: unhealthy
  * PSI greater than 200: hazardous

2. Fill in the function `getAirQualityColor` that will return a color based on the air quality:

  * healthy: green
  * moderate: yellow
  * unhealthy: orange
  * hazardous: red

3. Use the `getAirQualityColor` to format the air quality text color. (That is, if the air quality is moderate, display the text `moderate` in yellow.)