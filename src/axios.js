import axios from "axios";

const instance = axios.create({
	headers: {"Content-Type": "application/json"},
	timeout: 5000,
});


// shared/axios.js

instance.interceptors.request.use(config => {
	const _conf = {headers: {"Content-Type": "application/json", "X-Auth-Token":"1234"}, timeout: 3000};
	
	console.log(config, _conf);
	return _conf;
}, err => {
	return Promise.reject(err);
});

export default instance;