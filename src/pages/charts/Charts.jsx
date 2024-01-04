import React from "react";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import RadarChartBox from "../../components/radarChartBox/RadarChartBox";
import "./charts.scss";

import { useQuery } from "@tanstack/react-query";

import ChartBox from "../../components/chartBox/ChartBox";

const Charts = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["allPosts"],
    queryFn: () =>
      fetch("https://dummyjson.com/posts").then((res) => res.json()),
  });

  if (isError) {
    //If there is an error, render different JSX
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="home">
      <div className="box box1">
        {data && !isLoading && !error && <ChartBox {...data} />}
      </div>

      <div className="box box1">
        {data && !isLoading && !error && <PieChartBox {...data} />}
      </div>
      <div className="box box1">
        {data && !isLoading && !error && <RadarChartBox {...data} />}
      </div>
    </div>
  );
};

export default Charts;
