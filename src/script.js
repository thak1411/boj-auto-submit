window.onload = function() {
	console.log('injected');
	// setTimeout(function() {
		var table = document.querySelector('#status-table');
		table.querySelector('tbody > tr').querySelectorAll('td')[6].querySelectorAll('a')[1].click();
	// }, 10000);
}
