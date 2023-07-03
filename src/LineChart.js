import React, { useRef, useEffect } from 'react';

const LineChart = () => {
  const chartRef = useRef(null);

  // Dummy data for the line chart
  const data = [
    { week: 'Week 1', user: 200, guest: 150 },
    { week: 'Week 2', user: 150, guest: 180 },
    { week: 'Week 3', user: 280, guest: 250 },
    { week: 'Week 4', user: 140, guest: 190 },
  ];

  useEffect(() => {
    const updateChart = () => {
      const chartWidth = chartRef.current.getBoundingClientRect().width;
      const numLines = 5;
      const lineChartWidth = chartWidth - 60; // Adjust for margins
      const xStep = lineChartWidth / (data.length - 1);
      const yStep = 200 / numLines;

      // Calculate the maximum value from data to determine y-axis range
      const maxValue = Math.max(
        Math.max(...data.map(item => item.user)),
        Math.max(...data.map(item => item.guest))
      );

      // Calculate the x and y coordinates for each point
      const coordinates = data.map((item, index) => ({
        x: 50 + index * xStep,
        yUser: 250 - (200 * item.user) / maxValue,
        yGuest: 250 - (200 * item.guest) / maxValue,
      }));

      // Update the x-axis labels
      const xLabels = chartRef.current.getElementsByClassName('x-label');
      for (let i = 0; i < xLabels.length; i++) {
        const x = 50 + i * xStep;
        xLabels[i].setAttribute('x', x);
      }

      // Update the y-axis labels
      const yLabels = chartRef.current.getElementsByClassName('y-label');
      for (let i = 0; i <= numLines; i++) {
        const y = 250 - i * yStep;
        yLabels[i].setAttribute('y', y);
      }

      // Update the user line
      const userLine = chartRef.current.getElementById('user-line');
      userLine.setAttribute('points', coordinates.map(coord => `${coord.x},${coord.yUser}`).join(' '));

      // Update the guest line
      const guestLine = chartRef.current.getElementById('guest-line');
      guestLine.setAttribute('points', coordinates.map(coord => `${coord.x},${coord.yGuest}`).join(' '));
    };

    window.addEventListener('resize', updateChart);
    updateChart();

    return () => {
      window.removeEventListener('resize', updateChart);
    };
  }, []);

  // Calculate the number of parallel lines
  const numLines = 5;

  return (
    <div ref={chartRef} style={{ width: '100%' }}>
      <svg className="line-chart" width="100%" height="300">
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
          <text key={index} className="x-label" x={50 + index * ((chartRef.current?.getBoundingClientRect().width - 60) / (data.length - 1))} y="270" textAnchor="middle">
            {item.week}
          </text>
        ))}
        {/* Draw y-axis labels */}
        {Array.from({ length: numLines + 1 }).map((_, index) => (
          <text key={index} className="y-label" x="40" y={250 - index * (200 / numLines)} textAnchor="end">
            {index * 100}
          </text>
        ))}
        {/* Draw user line */}
        <polyline
          id="user-line"
          fill="none"
          stroke="blue"
          strokeWidth="2"
        />
        {/* Draw guest line */}
        <polyline
          id="guest-line"
          fill="none"
          stroke="green"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default LineChart;
