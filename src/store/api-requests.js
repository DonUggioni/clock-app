import { createContext, useEffect, useState } from 'react';

export const APIRequestContext = createContext({});

function APIRequestProvider(props) {
  const [quote, setQuote] = useState('');
  const [location, setLocation] = useState({});
  const [coords, setCoords] = useState({});

  console.log(coords);

  useEffect(() => {
    function coordinates(data) {
      setCoords({
        lat: data.coords.latitude.toString(),
        lng: data.coords.longitude.toString(),
      });
    }
    navigator.geolocation.getCurrentPosition(coordinates);
  }, []);

  useEffect(() => {
    async function getAPIData() {
      try {
        const [quoteResponse, locationResponse] = await Promise.all([
          fetch('https://api.quotable.io/random'),
          fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}&addressdetails=1`
          ),
        ]);
        const quoteData = await quoteResponse.json();
        const locationData = await locationResponse.json();

        setQuote(quoteData);
        setLocation(locationData);

        console.log(quoteData, locationData);
      } catch (error) {
        console.log(error);
      }
    }
    getAPIData();
  }, [coords]);

  return (
    <APIRequestContext.Provider value={{ quote, location }}>
      {props.children}
    </APIRequestContext.Provider>
  );
}
export default APIRequestProvider;
