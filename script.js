//create data structure for group of students
//name, study, points
var students = [
	{
		name: 'Katy', 
		study: 'History', 
		points: 100
	},
	{
		name: 'Ron', 
		study: 'Science', 
		points: 200 
	},
	{
		name: 'Raymond',
		study: 'Political Science',
		points: 250
	},
	{
		name: 'Veronica',
		study: 'Art', 
		points: 300
	},
	{
		name: 'Sara',
		study: 'Writing',
		points: 100
	}
]
$(document).ready(function() {
//access each record in array, print properties, 
//use loop, display each object and properties on page
	function buildList(arr) {
		console.log(arr)
		var listHTML ='<ol>';
		for (i=0; i<arr.length; i += 1) {
			listHTML += '<li>' + arr[i][0] + '<li>';
		}
		listHTML += '</ol>';
		return listHTML;
	}
	for (i=0; i<students.length; i++) {
		listHTML += '<li>' + arr[i][0] + '<li>';
		}
		listHTML += '</ol>';
		return listHTML;
	}

}//end of doc ready