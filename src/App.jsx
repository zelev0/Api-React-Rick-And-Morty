import { useEffect, useRef, useState } from "react";
import useFetch from "./hooks/useLocation"
import Location from "./components/Location";
import ResidentInfo from "./components/ResidentInfo";
import Banner from "./components/Banner";

function App() {

  const ramId = Math.floor(Math.random() * 126) + 1;

  const [inputValue, setInputValue] = useState(ramId);

  const [location, getLocation, isLoading, hasError] = useFetch();

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${inputValue}`;
    getLocation(url);
  }, [inputValue]);

  const handlerInput = useRef();

  const handlerSubmit = (event) => {
    event.preventDefault();
    setInputValue(handlerInput.current.value.trim().toLowerCase());
    handlerInput.current.value = '';
  }

  console.log(inputValue);


  return (
    <div className="content">
      {
        isLoading ?
          <h2>Loading Portal...</h2>
          :
          <>
             <Banner />
            <h1 className="content-title">Wiki de sitios de Rick and Morty</h1>
            <form className="content-form" onSubmit={handlerSubmit}>
              <input className="content-input" ref={handlerInput} type="number" />
              <button className="content-btn">Buscar</button>
            </form>
            {
              hasError || !+inputValue ?
                <h2>La ubicación introducida no existe</h2>
                :
                <>
                  <Location
                    info={location}
                  />
                  <div className="content-app">
                    {
                      location?.residents?.map((character) => (
                        <ResidentInfo
                          key={character}
                          info={character}
                        />
                      ))
                    }
                  </div>
                </>
            }

          </>
      }
    </div>
  )
}

export default App
