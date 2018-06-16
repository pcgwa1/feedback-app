/* Get API data */
import axios from 'axios';

export async function signIn(requestURL = fetch) {
  const url = '/auth/google';
  try {
    await requestURL(url, { method: 'GET' });
  } catch (error) {
    console.error('Error getting data: ', error);
  }
}

/* Get API data */
export async function getData() {
  const res = await axios.get('/api/current-user');
  return res.data
}