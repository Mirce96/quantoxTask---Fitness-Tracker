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
	// FRIDAY DATA ****************************************

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
	var fridaySteps = 0;
	var fridayCalories = 0;
	var fridayActivity = 0;
	var fridayKm = 0;

	for(var i=0; i<dates.length;i++)
	{
		if(dates[i] == "Jun 14 2019")
		{
			//Steps
			fridaySteps = fridaySteps + data[i].steps;
			//Calories
			fridayCalories = fridaySteps * oneStepBurner;
			fridayCalories = Math.round(fridayCalories);
			//Activity duration
			fridayActivity = fridaySteps * oneStepDuration;
			hoursF = Math.floor(fridayActivity / 3600);
			fridayActivity %= 3600;
			minutesF = Math.floor(fridayActivity / 60);
			//Dont show hours if there arent any
			if(hoursF > 0 )
			{
			hoursF = hoursF;
			}
			minutesF = minutesF;
			//Distance traveled
			fridayKm = (fridaySteps * oneStepDistance)/1000;
			fridayKm = fridayKm.toPrecision(2);
		}
	}
		document.getElementById("fridaySteps").innerHTML = fridaySteps;
		document.getElementById("fridayDistance").innerHTML = fridayKm;
		document.getElementById("fridayCaloriesBurnt").innerHTML = fridayCalories;
		document.getElementById("fridayActivityDuration").innerHTML = hoursF + minutesF;
});