import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import {Tour} from '../../../types/tour';
import TourInfo from './TourInfo';
import TourDestination from './TourDestination';
import {Destination} from '../../../types/destination';

export type TourContextType = {
  tour: Tour | null;
  setTour: (tour: Tour | null) => void;
  destination: Destination | null;
  setDestination: (destination: Destination) => void;
  isEnterDestination: boolean;
  setIsEnterDestination: (value: boolean) => void;
};

const TourContext = createContext<TourContextType>({} as TourContextType);

export default TourContext;
export const useTour = () => {
  return useContext(TourContext);
};

type TourFormProps = PropsWithChildren<{}>;

export const TourForm = ({}: TourFormProps) => {
  const [tour, setTour] = useState<Tour | null>(null);

  const [destination, setDestination] = useState<Destination | null>(null);
  const [isEnterDestination, setIsEnterDestination] = useState<boolean>(false);

  return (
    <TourContext.Provider
      value={{
        tour,
        setTour,
        isEnterDestination,
        setIsEnterDestination,
        destination,
        setDestination,
      }}>
      {!isEnterDestination ? <TourInfo /> : <TourDestination />}
    </TourContext.Provider>
  );
};
