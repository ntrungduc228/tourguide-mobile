import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import {Tour} from '../../../types/tour';
import TourInfo from './TourInfo';
import TourDestination from './TourDestination';

export type TourContextType = {
  tour: Tour | null;
  setTour: (tour: Tour | null) => void;
};

const TourContext = createContext<TourContextType>({} as TourContextType);

export default TourContext;
export const useTour = () => {
  return useContext(TourContext);
};

type TourFormProps = PropsWithChildren<{}>;

export const TourForm = ({}: TourFormProps) => {
  const [tour, setTour] = useState<Tour | null>({
    name: 'Tour',
    description: 'sdfs',
    id: 1,
    destinations: [
      {
        name: 'Nha trangNha trangNha trangNha trang',
        departureTime: new Date(),
        tourId: 1,
        content: 'vui chowi',
        address: 'nha trang',
        id: 1,
      },
      {
        name: 'Nh123a trang',
        departureTime: new Date(),
        tourId: 1,
        content: 'vui chowi',
        address: 'nha trang',
        id: 2,
      },
      {
        name: 'Nha trang',
        departureTime: new Date(),
        tourId: 1,
        content: 'vui chowi',
        address: 'nha trang',
        id: 3,
      },
      {
        name: 'Nha trangNha trangNha trangNha trang',
        departureTime: new Date(),
        tourId: 1,
        content: 'vui chowi',
        address: 'nha trang',
        id: 4,
      },
      {
        name: 'Nh123a trang',
        departureTime: new Date(),
        tourId: 1,
        content: 'vui chowi',
        address: 'nha trang',
        id: 5,
      },
      {
        name: 'Nha trang',
        departureTime: new Date(),
        tourId: 1,
        content: 'vui chowi',
        address: 'nha trang',
        id: 36,
      },
      {
        name: 'Nha trangNha trangNha trangNha trang',
        departureTime: new Date(),
        tourId: 1,
        content: 'vui chowi',
        address: 'nha trang',
        id: 17,
      },
      {
        name: 'Nh123a trang',
        departureTime: new Date(),
        tourId: 1,
        content: 'vui chowi',
        address: 'nha trang',
        id: 27,
      },
      {
        name: 'Nha trang',
        departureTime: new Date(),
        tourId: 1,
        content: 'vui chowi',
        address: 'nha trang',
        id: 38,
      },
    ],
  });

  const [isEnterDestination, setIsEnterDestination] = useState<boolean>(false);

  return (
    <TourContext.Provider value={{tour, setTour}}>
      {!isEnterDestination ? (
        <TourInfo setIsEnterDestination={setIsEnterDestination} />
      ) : (
        <TourDestination />
      )}
    </TourContext.Provider>
  );
};
