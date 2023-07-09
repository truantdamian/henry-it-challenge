"use client";
import { useEffect, useState } from "react";
import usePaginate from "../hooks/usePaginate";
import GridData from "./ui/GridData";

import Paginate from "./ui/Paginate";
import { tourType } from "../types/tourType";
import { getRankings, getTours } from "../services/golfService";

const RankingList = () => {
  const [rankingData, setRankingData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tourList, setTourList] = useState<tourType[]>([]);
  const [seassonList, setSeassonList] = useState<tourType[]>([]);
  const [tour, setTour] = useState("");
  const [seasson, setSeasson] = useState("");

  const loadData = async (tourId, seassonId) => {
    setRankingData([]);
    setCurrentPage(1);

    const result = await getRankings(tourId, seassonId);
    setRankingData(result);
  };

  const loadTour = async () => {
    const tours = await getTours();

    let uniqueTours: tourType[] = [];
    tours?.forEach((item) => {
      const result = uniqueTours?.find((x) => x.tour_id === item.tour_id);
      if (!result) {
        uniqueTours.push(item);
      }
    });

    setTourList(uniqueTours);
  };

  useEffect(() => {
    loadTour();
  }, []);

  useEffect(() => {
    if (!tour || !seasson) {
      return;
    }

    loadData(tour, seasson);
  }, [tour, seasson]);

  const handleChangeTour = (e: any) => {
    setTour(e.target.value);
    setSeasson("");
    const result = tourList.filter(
      (x) => x.tour_id.toString() === e.target.value
    );
    setSeassonList(result);
  };

  const handleChangeSeasson = (e: any) => {
    setSeasson(e.target.value);
  };

  const { paginatedList, totalPages, totalItems, page } = usePaginate(
    rankingData,
    currentPage,
    10
  );

  return (
    <>
      <div className="md:bg-white rounded-2xl  border-[#E6E6E6]">
        <div className="flex flex-col gap-1 md:flex-row md:p-6 md:gap-5">
          <select
            className="p-2 bg-white rounded-lg border border-[#E6E6E6]"
            value={tour}
            onChange={handleChangeTour}
          >
            <option value="" disabled>
              Tour
            </option>
            {tourList.map((x) => (
              <option key={x.tour_id} value={x.tour_id}>
                {x.tour_name}
              </option>
            ))}
          </select>

          <select
            className="p-2 bg-white rounded-lg border border-[#E6E6E6]"
            value={seasson}
            onChange={handleChangeSeasson}
          >
            <option value="" disabled>
              Seasson
            </option>
            {seassonList.map((x) => (
              <option value={x.season_id}>{x.season_id}</option>
            ))}
          </select>
        </div>
        <div className="mt-5 flex justify-center md:hidden">
          {rankingData && rankingData.length > 0 && (
            <Paginate
              currentPage={page}
              totalPages={totalPages}
              totalItems={totalItems}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
        <GridData
          options={{
            keyCol: "player_id",
            data: paginatedList,
            cols: [
              { id: "player_id", title: "#" },
              { id: "player_name", title: "NAME" },
              { id: "points", title: "POINTS" },
              { id: "num_wins", title: "# OF WINS" },
              { id: "num_top_tens", title: "# OF TOP 10'S" },
              { id: "num_events", title: "# OF EVENTS" },
            ],
          }}
        />
        {!rankingData && (
          <div className="p-2 flex items-center justify-center">
            <p>No hay datos para mostrar</p>
          </div>
        )}
      </div>
      <div className="mt-5 flex justify-center">
        {rankingData && rankingData.length > 0 && (
          <Paginate
            currentPage={page}
            totalPages={totalPages}
            totalItems={totalItems}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </>
  );
};

export default RankingList;
