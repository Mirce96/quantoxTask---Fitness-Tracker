 $.getJSON('https://api.myjson.com/bins/1gwnal', function(data) //data is the JSON string
 {
	var timestampArray = [];
	var stepsArray = [];
	var dataLength = data.length;

	for(var i=0;i<dataLength;i++)
	{
			timestampArray[i] = data[i].timestamp;
			stepsArray[i] = data[i].steps;

	}

	//WEEK DATA ****************************************
	var weekActivityDuration = 0;
	var oneStepBurner = 0.05;
	var oneStepDuration = 0.5; //Value in seconds
	var oneStepDistance = 0.762; //Vaue in meters
	// Weekly steps number
	var stepsSum = 0;
	for(var i=0;i<stepsArray.length;i++)
	{
		stepsSum += stepsArray[i];
	}
	document.getElementById("weeklySteps").innerHTML = stepsSum.toLocaleString();

	//Weekly calories burnt
	var weekCaloriesBurnt = 0;
	weekCaloriesBurnt = stepsSum * oneStepBurner;
	document.getElementById("weeklyCaloriesBurnt").innerHTML = weekCaloriesBurnt.toFixed();

	//Activity duration for whole week
	weekActivityDuration = stepsSum * oneStepDuration; //Value in seconds
	weekActivityDuration = weekActivityDuration.toPrecision(4);

	//Convert weekActivityDuration in hours and minutes
	hours = Math.floor(weekActivityDuration / 3600);
	weekActivityDuration %= 3600;
	minutes = Math.floor(weekActivityDuration / 60);
	hours = hours + "h";
	minutes = minutes + "min";
	document.getElementById("weeklyActivityDuration").innerHTML = hours + " " + minutes;
});
