#Kickstart_Project

##Football and Weather 

Background: Football is one of the most popular American sports. Some of the most memorable and epic matchups were played outside in the elements. This project aim is to look at all the games that were played outdoors in different weather conditions and elements from 2008 - 2015.

# Resources:
* Webscraping: to pull Geographic Locations of each NFL stadium (https://sites.google.com/site/32nflteamsabsoluteandrelative/)
* CSV: data of every single NFL Game sheduled since 1967 (https://www.kaggle.com/kamilorszulak/nfl-schedule-by-week)
* World Weather Online to get free historical data from 07/2008 onwards (https://www.worldweatheronline.com/developer/api/docs/historical-weather-api.aspx)
* Python Flask - MongoDB
* D3 library to show geographic points of the stadiums based on location
* Google Library to display charts
* https://bootswatch.com/morph/ for bootstrap

# Python:
* webscraped data for stadium locations
* imported NFL Schedule from Kaggle CSV file. Created and cleaned DataFrame. Manipulate column date data so that it can be used later for API
* Used World Wide Weather Online to get free historical weather data from July 2008 - February 2019 (NFL Seasons 2008/09 - 2018/19)
* Issues with the city of Tennessee in original API pull, a later update will be required to rerun API loop specifically for the Titans team.
* Exported data into csv and json
* Python Flask to be set up in a later update

# Javascript
* config.js -> API Key
* map.js -> load map and click event functionalities on 'Map.html' page
* datatable.js -> load entire dataset to 'DataTabel.html' using CSV that was exported from Python
* data.js -> team information that is used to be loaded into 'Map.html', the script is called upon when click event is intiated
* jquery.csv.min.js -> used to parse csv information so Google library can read the data once it is converted into an Array
* rain_teams.js / snow_teams.js / snow_months.js / rain_months.js -> all used to load google powered charts
