import React from 'react';

const PieChart = () => {
  const data = [
    { label: 'Slice 1', value: 55 },
    { label: 'Slice 2', value: 31 },
    { label: 'Slice 3', value: 14 },
  ];

  const total = data.reduce((sum, slice) => sum + slice.value, 0);

  const percentages = data.map(slice => ({
    ...slice,
    percentage: (slice.value / total) * 100,
  }));
  let currentAngle = 0;
  percentages.forEach(slice => {
    slice.startAngle = currentAngle;
    slice.endAngle = currentAngle + (slice.percentage / 100) * 360;
    currentAngle = slice.endAngle;
  });

  return (
    <div>
      <svg width="140" height="140">
        {percentages.map((slice, index) => (
          <Slice
            key={index}
            cx={70}
            cy={70}
            radius={60}
            startAngle={slice.startAngle}
            endAngle={slice.endAngle}
            fill={`hsl(${index * 60}, 40%, 70%) `}
          />
        ))}
      </svg>
    </div>
  );
};

const Slice = ({ cx, cy, radius, startAngle, endAngle, fill }) => {
  const startRadians = (startAngle * Math.PI) / 180;
  const endRadians = (endAngle * Math.PI) / 180;

  const x1 = cx + radius * Math.cos(startRadians);
  const y1 = cy + radius * Math.sin(startRadians);
  const x2 = cx + radius * Math.cos(endRadians);
  const y2 = cy + radius * Math.sin(endRadians);

  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  const pathData = `
    M ${cx},${cy}
    L ${x1},${y1}
    A ${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2}
    Z
  `;

  return <path d={pathData} fill={fill} />;
};

export default PieChart;
