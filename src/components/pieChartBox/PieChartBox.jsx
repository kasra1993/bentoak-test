import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="intro"> {`post count :  ${payload[0].value}`}</p>
        <p className="label">{`user Id  : ${payload[0].payload.payload.user}`}</p>
      </div>
    );
  }

  return null;
};

const PieChartBox = (props) => {
  const counts = {};
  props.posts.forEach((x) => {
    counts[x.userId] = (counts[x.id] || 0) + 1;
  });
  const userArray = [];
  for (const key in counts) {
    if (counts[key] > 1) {
      const obj = { user: Number(key), count: counts[key] };
      userArray.push(obj);
    }
  }

  return (
    <div className="pieChartBox">
      <h1 style={{ margin: "20px 0", textAlign: "center" }}>Active Users</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart width={700} height={700}>
            <Tooltip content={<CustomTooltip />} />
            <Pie
              data={userArray}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="count"
            >
              {userArray.map((item) => (
                <Cell key={item.user} fill="green" />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartBox;
