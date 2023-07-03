import React from 'react';

const LineChart = () => {
  // Dummy data for the line chart
  const data = [
    { week: 'Week 1', user: 200, guest: 150 },
    { week: 'Week 2', user: 150, guest: 180 },
    { week: 'Week 3', user: 280, guest: 250 },
    { week: 'Week 4', user: 140, guest: 190 },
  ];

  // Calculate the maximum value from data to determine y-axis range
  const maxValue = Math.max(
    Math.max(...data.map(item => item.user)),
    Math.max(...data.map(item => item.guest))
  );

  // Calculate the x and y coordinates for each point
  const coordinates = data.map((item, index) => ({
    x: 50 + (index * 400) / (data.length - 1),
    yUser: 250 - (200 * item.user) / maxValue,
    yGuest: 250 - (200 * item.guest) / maxValue,
  }));

  // Calculate the number of parallel lines
  const numLines = 5;

  return (
    <div style={{ width: '100%' }}>
      <svg width="100%" height="300">
        {/* Draw parallel lines */}
        {Array.from({ length: numLines }).map((_, index) => (
          <line
            key={index}
            x1="50"
            y1={50 + (index * 200) / (numLines - 1)}
            x2="450"
            y2={50 + (index * 200) / (numLines - 1)}
            stroke="#ccc"
            strokeWidth="1"
          />
        ))}
        {/* Draw x-axis */}
        <line x1="50" y1="250" x2="450" y2="250" stroke="black" strokeWidth="1" />
        {/* Draw y-axis */}
        <line x1="50" y1="50" x2="50" y2="250" stroke="black" strokeWidth="1" />
        {/* Draw x-axis labels */}
        {data.map((item, index) => (
          <text key={index} x={50 + (index * 400) / (data.length - 1)} y="270" textAnchor="middle">
            {item.week}
          </text>
        ))}
        {/* Draw y-axis labels */}
        {Array.from({ length: 6 }).map((_, index) => (
          <text key={index} x="40" y={250 - (index * 200) / 5} textAnchor="end">
            {index * 100}
          </text>
        ))}
        {/* Draw user line */}
        <polyline
          points={coordinates.map(coord => `${coord.x},${coord.yUser}`).join(' ')}
          fill="none"
          stroke="blue"
          strokeWidth="2"
        />
        {/* Draw guest line */}
        <polyline
          points={coordinates.map(coord => `${coord.x},${coord.yGuest}`).join(' ')}
          fill="none"
          stroke="green"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default LineChart;
