// function getTempPromise (location) {
// 	return new Promise(function (resolve, reject){
// 		resolve(79);
// 		reject('City not found');
// 	});
// }

// getTempPromise('Philadelphia').then(function(temp){
// 	console.log('success!', temp);
// }, function (err) {
// 	console.log('error', err);
// })


function addPromise (a, b) {
	return new Promise(function (resolve, reject){
		if ((typeof(a)==='number') && (typeof(b)==='number')) {
			resolve(a+b);
		} else {
			reject('These 2 things have to be numbers');
		}
	});
}

addPromise(2,4).then(function(number){
	console.log('success', number);
}, function(err) {
	console.log('error message', err);
});

addPromise(2,'luke').then(function(number){
	console.log('success', number);
}, function(err) {
	console.log('error message: ', err);
});