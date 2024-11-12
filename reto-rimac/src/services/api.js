import axios from 'axios';

export const fetchUser = () => axios.get('https://rimac-front-end-challenge.netlify.app/api/user.json');
export const fetchPlans = () => axios.get('https://rimac-front-end-challenge.netlify.app/api/plans.json');
