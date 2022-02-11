/* eslint-disable */
import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrips, tripsSelector } from "../../features/trips/tripsSlice";

const Trips = () => {
  const dispatch = useDispatch();
  const { trips, loading, error } = useSelector(tripsSelector);

  const options = {
    chart: {
      id: "trips",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };
  const series = [
    {
      name: "Trips",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 90, 110, 100],
    },
  ];

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  return (
    <>
      <Chart options={options} series={series} type="bar" height="240" />
    </>
  );
};

export default Trips;
