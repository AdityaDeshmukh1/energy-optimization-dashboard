// src/pages/ChartsPage.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { generateFakeData } from '../utils/fakeData';
import '../styles/ChartsPage.css';

const ChartsPage = () => {
  const data = generateFakeData();

  return (
    <div className="charts-page">
      <h1>Energy Consumption Chart</h1>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartsPage;
