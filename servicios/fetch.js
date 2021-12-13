const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const https = require('https');
const agent = new https.Agent({
	rejectUnauthorized: false
});

module.exports = function() {
	// const url='https://reqres.in/api/users';
	const url =
		'https://firebasestorage.googleapis.com/v0/b/whitemark-54535.appspot.com/o/city.json?alt=media&token=248aebdd-2767-4095-800c-649de9e185fe';
	const fetchApi = async () => {
		const response = await fetch(url, {
			agent,
			mode: 'no-cors'
		});
		const body = await response.text();
		// console.log(body);
		return body
	};
	fetchApi();

}

