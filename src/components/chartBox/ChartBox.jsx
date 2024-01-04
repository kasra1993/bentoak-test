import "./chartBox.scss";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  ResponsiveContainer,
} from "recharts";

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

const ChartBox = (props) => {
  return (
    <div className="chartBox">
      <h1 style={{ margin: "20px 0", textAlign: "center" }}>
        All Posts Reactions
      </h1>

      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={props.posts}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="id"></XAxis>
              <YAxis></YAxis>
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="reactions"
                stroke="white"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
