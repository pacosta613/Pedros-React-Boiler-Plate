const axios 									= require('axios');
axios.defaults.headers.common['Authorization'] 	= `Bearer ${localStorage.getItem('token') || null}`;

module.exports = {
  	client: axios.create({
		baseURL: '',
		responseType: 'json',
		timeout: 5000,
  	}),
  	cdnUrl: '',
  	url: '',
  	setToken: () => {
		  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token') || null}`;
  	},
};
