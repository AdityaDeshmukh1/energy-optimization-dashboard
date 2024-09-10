// src/Dashboard.js
import React, { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [data, setData] = useState([]);

  // Simulate fetching the energy data (you can replace this with real API calls)
  useEffect(() => {
    const fetchData = async () => {
      // Simulating data fetch
      const simulatedData = [
        { timestamp: '2023-09-01 10:00', industry: 'Manufacturing', device: 'Machine A', energy: 120, co2: 110.4 },
        { timestamp: '2023-09-01 11:00', industry: 'Manufacturing', device: 'Machine A', energy: 130, co2: 119.6 },
        { timestamp: '2023-09-01 12:00', industry: 'Manufacturing', device: 'Machine A', energy: 140, co2: 128.8 },
        { timestamp: '2023-09-01 13:00', industry: 'IT', device: 'Lighting', energy: 15, co2: 13.8 },
        // Add more simulated data as needed
      ];

      setData(simulatedData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Energy Consumption Dashboard</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="energy" stroke="#8884d8" name="Energy Consumption (kWh)" />
          <Line type="monotone" dataKey="co2" stroke="#82ca9d" name="CO2 Emissions (kg)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
