import "./chart.css";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "July", Total: 5000 },
  { name: "Auguest", Total: 7000 },
  { name: "September", Total: 10000 },
  { name: "October", Total: 17500 },
  { name: "November", Total: 14000 },
  { name: "December", Total: 17000 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="charttitle">{title}</div>
      <ResponsiveContainer width="100%"  aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="2">
              <stop offset="5%" stopColor="navy" stopOpacity={0.8} />
              <stop offset="95%" stopColor="navy" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="blue" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="navy"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
