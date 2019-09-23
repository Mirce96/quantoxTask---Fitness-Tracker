 $.getJSON('https://api.myjson.com/bins/1gwnal', function(data) //data is the JSON string
 {
 	var oneStepBurner = 0.05;
	var oneStepDuration = 0.5; //Value in seconds
	var oneStepDistance = 0.762; //Vaue in meters
	var timestampArray = [];
	var stepsArray = [];
	var dataLength = data.length;

	for(var i=0;i<dataLength;i++)
	{
			timestampArray[i] = data[i].timestamp;
			stepsArray[i] = data[i].steps;

	}
	// THURSDAY DATA ****************************************

	var daysArray = [];
	var dates = [];
	for(var i=0; i<timestampArray.length;i++)
	{
		daysArray[i] = new Date(timestampArray[i]);
	}
	//Convert each timestamp from JSON to date (month name, day, year) and store them into dates array
	for(var i=0; i<daysArray.length;i++)
	{
		dates[i] = daysArray[i].toDateString().split(' ').slice(1).join(' ');
	}
	var thursdaySteps = 0;
	var thursdayCalories = 0;
	var thursdayActivity = 0;
	var thursdayKm = 0;

	for(var i=0; i<dates.length;i++)
	{
		if(dates[i] == "Jun 13 2019")
		{
			//Steps
			thursdaySteps = thursdaySteps + data[i].steps;
			//Calories
			thursdayCalories = thursdaySteps * oneStepBurner;
			thursdayCalories = Math.round(thursdayCalories);
			//Activity duration
			thursdayActivity = thursdaySteps * oneStepDuration;
			hoursTh = Math.floor(thursdayActivity / 3600);
			thursdayActivity %= 3600;
			minutesTh = Math.floor(thursdayActivity / 60);
			//Dont show hours if there arent any
			if(hoursTh > 0 )
			{
			hoursTh = hoursTh;
			}
			minutesTh = minutesTh;
			//Distance traveled
			thursdayKm = (thursdaySteps * oneStepDistance)/1000;
			thursdayKm = thursdayKm.toPrecision(2);
		}
	}
		document.getElementById("thursdaySteps").innerHTML = thursdaySteps;
		document.getElementById("thursdayDistance").innerHTML = thursdayKm;
		document.getElementById("thursdayCaloriesBurnt").innerHTML = thursdayCalories;
		document.getElementById("thursdayActivityDuration").innerHTML = hoursTh + minutesTh;
});