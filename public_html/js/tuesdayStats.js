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
	// TUESDAY DATA ****************************************

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
	var tuesdaySteps = 0;
	var tuesdayCalories = 0;
	var tuesdayActivity = 0;
	var tuesdayKm = 0;

	for(var i=0; i<dates.length;i++)
	{
		if(dates[i] == "Jun 11 2019")
		{
			//Steps
			tuesdaySteps = tuesdaySteps + data[i].steps;
			//Calories
			tuesdayCalories = tuesdaySteps * oneStepBurner;
			tuesdayCalories = Math.round(tuesdayCalories);
			//Activity duration
			tuesdayActivity = tuesdaySteps * oneStepDuration;
			hoursT = Math.floor(tuesdayActivity / 3600);
			tuesdayActivity %= 3600;
			minutesT = Math.floor(tuesdayActivity / 60);
			//Dont show hours if there arent any
			if(hoursT > 0 )
			{
			hoursT = hoursT;
			}
			minutesT = minutesT;
			//Distance traveled
			tuesdayKm = (tuesdaySteps * oneStepDistance)/1000;
			tuesdayKm = tuesdayKm.toPrecision(2);
		}
	}
		document.getElementById("tuesdaySteps").innerHTML = tuesdaySteps;
		document.getElementById("tuesdayDistance").innerHTML = tuesdayKm;
		document.getElementById("tuesdayCaloriesBurnt").innerHTML = tuesdayCalories;
		document.getElementById("tuesdayActivityDuration").innerHTML = hoursT + minutesT;
});