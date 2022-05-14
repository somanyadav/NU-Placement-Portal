
import Skeleton from "./Skeleton";
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';
import { Liquid , Gauge } from '@ant-design/plots';
import { Row, Col } from 'antd';

const Analytics = () => {
  const data = [
    {
      type: 'Data Science',
      value: 45,
    },
    {
      type: 'Cybersecurity',
      value: 46,
    },
    {
      type: 'Artificial Intellligence',
      value: 51,
    },
    {
      type: 'Big Data',
      value: 9,
    },
    {
      type: 'General',
      value: 10,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          fontSize: 16,
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: 'Specialization Wise\nDistribution',
      },
    },
  };
  const configbub = {
    percent: 0.35,
    color: '#6194f9',
    outline: {
      border: 4,
      distance: 8,
    },
    wave: {
      length: 128,
    },
    
  };
  
  const configspeed = {
    percent: 0.5,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: ['#F4664A', '#FAAD14', '#30BF78'],
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
    
      },
    },
    statistic: {
      content: {
        style: {
          fontSize: '36px',
          lineHeight: '36px',
        },
      },
    },
  };
  const configspeed1 = {
    percent: 0.25,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: ['#F4664A', '#FAAD14', '#30BF78'],
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
    
      },
    },
    statistic: {
      content: {
        style: {
          fontSize: '36px',
          lineHeight: '36px',
        },
      },
    },
  };

  
  return(<> <Skeleton/>
  {/* <Row> */}
    {/* <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}> */}
  <Pie {...config} style={{padding:70,
  display:"flex",
  width:"50%"}}/>
  {/* </Col> */}
  {/* <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}> */}
  <Liquid {...configbub} />
  {/* </Col> */}
  {/* <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}> */}
  <Gauge {...configspeed} />
  {/* </Col> */}
  {/* </Row> */}
  {/* </Col> */}
  {/* <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}> */}
  <Gauge {...configspeed1} />
  {/* </Col> */}
  {/* </Row> */}
  </>
  );
};

// ReactDOM.render(<DemoPie />, document.getElementById('container'));
export default Analytics

// export default function Analytics() {
//   return (
//     <>
//       <Skeleton />
//       <div>Analytics Page here</div>
//     </>
//   );
// }
