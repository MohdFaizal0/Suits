import React, { useState } from "react";
import "../Dashboard/Dashboard.css";
import { BsBasket, BsCreditCard2Front, BsThreeDots } from "react-icons/bs";
import { HiOutlineArrowLongDown, HiOutlineArrowLongUp } from "react-icons/hi2";
import review from "../../assets/review.jpg";
import rating from "../../assets/rating.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", sales: 2400, orders: 120 },
  { month: "Feb", sales: 2100, orders: 98 },
  { month: "Mar", sales: 2800, orders: 150 },
  { month: "Apr", sales: 2000, orders: 110 },
  { month: "May", sales: 2700, orders: 130 },
];

const Dashboard = () => {
  const [hovered, setHovered] = useState(null);
  const radius = 80;
  const svgSize = 260;
  const center = 130;
  const circumference = 2 * Math.PI * radius;

  const salesSum = data.reduce((acc, cur) => acc + cur.sales, 0);
  const ordersSum = data.reduce((acc, cur) => acc + cur.orders, 0);
  const total = salesSum + ordersSum;

  const segments = [
    { label: "Sales", value: salesSum, color: "#dc3545" },
    { label: "Orders", value: ordersSum, color: "#28a745" },
  ];

  const segmentsWithPercent = segments.map((seg) => ({
    ...seg,
    percent: (seg.value / total) * 100,
  }));

  let offset = 0;

  return (
    <div className="hero container-fluid w-75 end-0 position-absolute p-0">
      {/* Top Row */}
      <div className="d-flex p-0 align-items-start">
        <div className=" p-2 flex-grow-1" style={{ flex: "0 0 60%" }}>
          <div className="card-header d-flex justify-content-between px-1">
            <h5 className="mb-0">Sales Chart</h5>
            <button className="m-0 p-0">
              <BsThreeDots />
            </button>
          </div>
          <div className="bg-white w-100 rounded">
            <div className="card-body p-3">
              <div style={{ width: "100%", height: 350 }}>
                <ResponsiveContainer>
                  <LineChart data={data} margin={{ top: 20, right: 30 }}>
                    <CartesianGrid
                      strokeDasharray="0"
                      vertical={false}
                      stroke="#ccc"
                    />
                    <XAxis
                      dataKey="month"
                      angle={-30}
                      textAnchor="end"
                      height={50}
                      tick={{ fill: "grey", fontSize: 13 }}
                      axisLine={false}
                    />
                    <YAxis axisLine={false} tick={{ fill: "grey" }} />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="natural"
                      dataKey="sales"
                      stroke="#dc3545"
                      strokeWidth={4}
                      name="Sales ($)"
                    />
                    <Line
                      type="monotone"
                      dataKey="orders"
                      stroke="#28a745"
                      strokeWidth={4}
                      name="Orders"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div className=" p-2 flex-grow-1" style={{ flex: "0 0 40%" }}>
          <div className="d-flex justify-content-between">
            <h5 className="pb-1">Channels</h5>
            <button className="m-0 p-0">
              <BsThreeDots />
            </button>
          </div>
          <div
            className="bg-white w-100 rounded d-flex justify-content-center align-items-center"
            style={{ height: "350px", position: "relative" }}
          >
            <svg width={svgSize} height={svgSize} viewBox="0 0 260 260">
              <circle
                cx={center}
                cy={center}
                r={radius}
                stroke="#eee"
                strokeWidth={35}
                fill="none"
              />
              {segmentsWithPercent.map((seg, index) => {
                const length = (seg.percent / 100) * circumference;
                const dashArray = `${length} ${circumference - length}`;
                const currentOffset = -offset;
                offset += length;
                const middlePercent = offset - length / 2;
                const middleAngle = (middlePercent / circumference) * 360;
                const radians = ((middleAngle - 90) * Math.PI) / 180;
                const labelRadius = radius + 25;
                const x = center + labelRadius * Math.cos(radians);
                const y = center + labelRadius * Math.sin(radians);

                return (
                  <React.Fragment key={index}>
                    <circle
                      cx={center}
                      cy={center}
                      r={radius}
                      stroke={seg.color}
                      strokeWidth={hovered === index ? 40 : 35}
                      fill="none"
                      strokeDasharray={dashArray}
                      strokeDashoffset={currentOffset}
                      transform="rotate(-90 130 130)"
                      style={{ transition: "stroke-width 0.2s ease" }}
                      onMouseEnter={() => setHovered(index)}
                      onMouseLeave={() => setHovered(null)}
                    />
                    <text
                      x={x}
                      y={y}
                      fill={seg.color}
                      fontSize="14"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      style={{ fontWeight: "bold", userSelect: "none" }}
                    >
                      {`${seg.label}: ${Math.round(seg.value)}`}
                    </text>
                  </React.Fragment>
                );
              })}
            </svg>
            {hovered !== null && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "#fff",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  fontSize: "14px",
                  pointerEvents: "none",
                }}
              >
                {segmentsWithPercent[hovered].label}:{" "}
                {Math.round(segmentsWithPercent[hovered].value)}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="d-flex justify-content-between mt-2 gap-4">
        <div className="border rounded p-4 bg-white flex-fill">
          <div className="d-flex justify-content-between p-0">
            <BsBasket className="fs-1" />
            <button className="m-0 p-0 bg-white">
              <BsThreeDots />
            </button>
          </div>
          <h4 className="mt-4">Orders</h4>
          <div className="d-flex justify-content-between mt-2">
            <h3>310</h3>
            <div style={{ width: 110, height: 50 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <Tooltip
                    contentStyle={{
                      background: "#fff",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      fontSize: "12px",
                      padding: "5px",
                    }}
                    labelStyle={{ display: "none" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="orders"
                    stroke="#db5196"
                    strokeWidth={4}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <p className="text-success mb-0">
            Over last month 1.4% <HiOutlineArrowLongUp />
          </p>
        </div>

        <div className="border rounded p-4 bg-white flex-fill">
          <div className="d-flex justify-content-between p-0">
            <BsCreditCard2Front className="fs-1" />
            <button className="m-0 p-0 bg-white">
              <BsThreeDots />
            </button>
          </div>
          <h4 className="mt-4">Sales</h4>
          <div className="d-flex justify-content-between mt-2">
            <h3>$3.759,00</h3>
            <div style={{ width: 110, height: 50 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <Tooltip
                    contentStyle={{
                      background: "#fff",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      fontSize: "12px",
                      padding: "5px",
                    }}
                    labelStyle={{ display: "none" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="orders"
                    stroke="#7e33f5"
                    strokeWidth={4}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <p className="text-danger mb-0">
            Over last month 2.4% <HiOutlineArrowLongDown />
          </p>
        </div>

        <div className="border rounded p-4 bg-white flex-fill">
          <div className="d-flex justify-content-between p-0">
            <h5>Recent Reviews</h5>
            <button className="bg-white d-flex flex-nowrap text-danger">
              View All
            </button>
          </div>
          <div className="d-flex mt-3 gap-4">
            <img
              src={review}
              alt=""
              className="img-fluid"
              style={{ width: "45px", height: "50px" }}
            />
            <div>
              <p className="font-weight-bold m-0 pb-2">Johnath Siddley</p>
              <img src={rating} alt="" style={{ width: "100px" }} />
            </div>
          </div>
          <p className="mt-3">Very nice glasses. I ordered for my friend.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
