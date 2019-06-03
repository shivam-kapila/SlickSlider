$(document).ready(function () {
	doWork();
});

function doWork() {
    $('h1').slideDown();
    console.log('yup');
 	repeater = setTimeout(doWork, 1000);
}

