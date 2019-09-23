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
	// MONDAY DATA ****************************************

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
	var mondaySteps = 0;
	var mondayCalories = 0;
	var mondayActivity = 0;
	var mondayKm = 0;

	for(var i=0; i<dates.length;i++)
	{
		if(dates[i] == "Jun 10 2019")
		{
			//Steps
			mondaySteps = mondaySteps + data[i].steps;
			//Calories
			mondayCalories = mondaySteps * oneStepBurner;
			mondayCalories = Math.round(mondayCalories);
			//Activity duration
			mondayActivity = mondaySteps * oneStepDuration;
			hoursM = Math.floor(mondayActivity / 3600);
			mondayActivity %= 3600;
			minutesM = Math.floor(mondayActivity / 60);
			//Dont show hours if there arent any
			if(hoursM > 0 )
			{
			hoursM = hoursM;
			}
			minutesM = minutesM;
			//Distance traveled
			mondayKm = (mondaySteps * oneStepDistance)/1000;
			mondayKm = mondayKm.toPrecision(2);
		}
	}
		document.getElementById("mondaySteps").innerHTML = mondaySteps;
		document.getElementById("mondayDistance").innerHTML = mondayKm;
		document.getElementById("mondayCaloriesBurnt").innerHTML = mondayCalories;
		document.getElementById("mondayActivityDuration").innerHTML = hoursM + minutesM;
});