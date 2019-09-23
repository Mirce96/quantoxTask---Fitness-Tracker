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
	// WEDNESDAY DATA ****************************************

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
	var wednesdaySteps = 0;
	var wednesdayCalories = 0;
	var wednesdayActivity = 0;
	var wednesdayKm = 0;

	for(var i=0; i<dates.length;i++)
	{
		if(dates[i] == "Jun 12 2019")
		{
			//Steps
			wednesdaySteps = wednesdaySteps + data[i].steps;
			//Calories
			wednesdayCalories = wednesdaySteps * oneStepBurner;
			wednesdayCalories = Math.round(wednesdayCalories);
			//Activity duration
			wednesdayActivity = wednesdaySteps * oneStepDuration;
			hoursW = Math.floor(wednesdayActivity / 3600);
			wednesdayActivity %= 3600;
			minutesW = Math.floor(wednesdayActivity / 60);
			//Dont show hours if there arent any
			if(hoursW > 0 )
			{
			hoursW = hoursW;
			}
			minutesW = minutesW;
			//Distance traveled
			wednesdayKm = (wednesdaySteps * oneStepDistance)/1000;
			wednesdayKm = wednesdayKm.toPrecision(2);
		}
	}
		document.getElementById("wednesdaySteps").innerHTML = wednesdaySteps;
		document.getElementById("wednesdayDistance").innerHTML = wednesdayKm;
		document.getElementById("wednesdayCaloriesBurnt").innerHTML = wednesdayCalories;
		document.getElementById("wednesdayActivityDuration").innerHTML = hoursW + minutesW;
});