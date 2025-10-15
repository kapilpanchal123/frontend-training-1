import { useRef, useState } from 'react';
import './App.css';
import { AVAILABLE_PLACES, type AvailablePlacesObject } from './data/data';
import Modal from './components/Modal/Modal';
import DeleteConfirmation from './components/DeleteConfirmation/DeleteConfirmation';
import Places from './components/Places/Places';
import logoImg from '../public/logo.png';

function App() {
  const modal = useRef<HTMLDialogElement>(null);
  const selectedPlace = useRef<string>(null);
  const [pickedPlaces, setPickedPlaces] = useState<AvailablePlacesObject[]>([]);

  const handleStartRemovePlace = (id: string) => {
    modal.current?.open();
    selectedPlace.current = id;
  };

  const handleStopRemovePlace = () => {
    modal.current?.close();
  };

  const handleSelectPlace = (id: string) => {
    setPickedPlaces((prevPickedPlaces) => {
        if (prevPickedPlaces?.some((place) => place.id === id)) {
          return prevPickedPlaces;
        }
        const place = AVAILABLE_PLACES.find((place) => place.id === id);

        if (!place) {
          // If no matching place found, return previous state
          return prevPickedPlaces;
        }
        return [place, ...prevPickedPlaces];
      });
    };

    const handleRemovePlace = () => {
      setPickedPlaces((prevPickedPlaces) => 
        prevPickedPlaces.filter((place) => place.id != selectedPlace.current));
      modal.current?.close();
    };

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>
    
      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={AVAILABLE_PLACES}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  )
};

export default App;
