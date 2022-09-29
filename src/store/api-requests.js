import { createContext, useEffect, useState } from 'react';

export const APIRequestContext = createContext({});

function APIRequestProvider(props) {
  const [quote, setQuote] = useState('');
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  async function getAPIData() {
    try {
      const [quoteResponse, locationResponse] = await Promise.all([
        fetch('https://api.quotable.io/random'),
        fetch(`https://api.ipdata.co?api-key=${process.env.REACT_APP_API_KEY}`),
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

  useEffect(() => {
    setIsLoading(true);
    getAPIData();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <APIRequestContext.Provider value={{ quote, location, isLoading }}>
      {props.children}
    </APIRequestContext.Provider>
  );
}
export default APIRequestProvider;
