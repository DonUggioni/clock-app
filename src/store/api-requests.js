import { createContext, useEffect, useState } from 'react';
import { API_KEY } from './key';

export const APIRequestContext = createContext({});

const apiKey = API_KEY;

function APIRequestProvider(props) {
  const [quote, setQuote] = useState('');
  const [location, setLocation] = useState({});
  console.log(process.env.REACT_APP_API_KEY);
  useEffect(() => {
    async function getAPIData() {
      try {
        const [quoteResponse, locationResponse] = await Promise.all([
          fetch('https://api.quotable.io/random'),
          fetch(`https://api.ipdata.co?api-key=${apiKey}`),
        ]);
        const quoteData = await quoteResponse.json();
        const locationData = await locationResponse.json();

        setLocation({
          city: locationData.city,
          country: locationData.country_code,
          timeSaving: locationData.time_zone.abbr,
          timeZone: locationData.time_zone.name,
        });

        setQuote(quoteData);
      } catch (error) {
        console.log(error);
      }
    }
    getAPIData();
  }, []);

  return (
    <APIRequestContext.Provider value={{ quote, location }}>
      {props.children}
    </APIRequestContext.Provider>
  );
}
export default APIRequestProvider;
