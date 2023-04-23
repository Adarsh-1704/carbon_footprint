import React from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar , Label} from 'recharts';

const StackedBarGraph = (props) => {
  const homeData = props.homeData
  const travelData = props.travelData
  const foodData = props.foodData
  const data = [
    { name: 'Home', Electricity: homeData[0], LPG: homeData[1], Water : homeData[2] },
    { name: 'Travel', Private: travelData[0], Bus: travelData[1] , Train: travelData[2] , Metro: travelData[3] , Flight: travelData[4]},
    { name: 'Food',Dairy: foodData[0], Chapati: foodData[1], Rice: foodData[2] , Vegetables: foodData[3] , Egg: foodData[4], Chicken : foodData[5] , Mutton : foodData[6] , Fish : foodData[7]},
  ];
  
  const colors = ['#ffd700', '#e6ab8f', '#77dd77', '#b19cd9', '#7ec0ee', '#f49ac2', '#a2c8a2', '#deb887', '#8e7cc3', '#afeeee', '#f0e68c', '#e9967a', '#90ee90', '#dda0dd', '#87cefa', '#f4a460'];

  return (
    <BarChart width={1000} height={500} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <XAxis dataKey="name" />
      <YAxis >
      <Label value="CO2 emmision in Kg" position="inside" angle={-90} offset={10} />
      </YAxis>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Bar dataKey="Electricity" stackId="a" fill={colors[0]} />
      <Bar dataKey="LPG" stackId="a" fill={colors[1]} />
      <Bar dataKey="Water" stackId="a" fill={colors[2]} />
      <Bar dataKey="Private" stackId="a" fill={colors[3]} />
      <Bar dataKey="Bus" stackId="a" fill={colors[4]} />
      <Bar dataKey="Train" stackId="a" fill={colors[5]} />
      <Bar dataKey="Metro" stackId="a" fill={colors[6]} />
      <Bar dataKey="Flight" stackId="a" fill={colors[7]} />
      <Bar dataKey="Dairy" stackId="a" fill={colors[8]} />
      <Bar dataKey="Chapati" stackId="a" fill={colors[9]} />
      <Bar dataKey="Rice" stackId="a" fill={colors[10]} />
      <Bar dataKey="Vegetables" stackId="a" fill={colors[11]} />
      <Bar dataKey="Egg" stackId="a" fill={colors[12]} />
      <Bar dataKey="Chicken" stackId="a" fill={colors[13]} />
      <Bar dataKey="Mutton" stackId="a" fill={colors[14]}/>
      <Bar dataKey="Fish" stackId="a" fill={colors[15]} />

    </BarChart>
  );
};

export default StackedBarGraph;
