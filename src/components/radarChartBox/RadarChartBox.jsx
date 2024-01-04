import React from "react";
import {
  Tooltip,
  Legend,
  PolarAngleAxis,
  Radar,
  RadarChart,
  PolarGrid,
} from "recharts";

/// tooltip custom function to display custom data upon hover
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="intro"> {`post id : ${label}`}</p>
        <p className="label">{`reactions : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};
const RadarChartBox = (props) => {
  /// Getting the top trending posts to display
  const trendingPosts = [];
  props.posts.forEach((x) => {
    if (x.reactions > 5) {
      const arrayItem = { id: x.id, reactions: x.reactions };
      trendingPosts.push(arrayItem);
    }
  });

  return (
    <div>
      <h1 style={{ margin: "20px 0", textAlign: "center" }}>Trending Posts</h1>
      <RadarChart
        outerRadius={110}
        width={300}
        height={300}
        data={trendingPosts}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="id" />
        {/* <PolarRadiusAxis /> */}
        {/* <Legend></Legend> */}
        <Tooltip content={<CustomTooltip />} />{" "}
        <Radar
          name="reactions"
          dataKey="reactions"
          stroke="white"
          fill="orange"
          fillOpacity={0.6}
        />
        {/* <Radar
          name="loss"
          dataKey="loss"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        /> */}
      </RadarChart>
    </div>
  );
};

export default RadarChartBox;
