/* Get API data */
export async function signIn(requestURL = fetch) {
  const url = '/auth/google';
  try {
    const response = await requestURL(url, { method: 'GET' });
  } catch (error) {
    console.error('Error getting data: ', error);
  }
}