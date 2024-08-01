"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '../componenet/Navbar';
import Image from 'next/image';

const Page = () => {
  const [jeans, setJeans] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const fetchJeans = async () => {
      const response = await fetch("https://the-thrift-kada.vercel.app/api/showjeans");
      const data = await response.json();
      setJeans(data);
    };
    fetchJeans();
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: '#fdf0d5', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '3vh',overflow:'hidden' }}>
        <div style={{ width: '95vw', display: 'flex', gap: '3vw', flexWrap: 'wrap', padding: '1vw',paddingBottom:'3vh' }}>
          {jeans.map((jean, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#f1faee',
                width: hoveredIndex === index ? '400px' : '350px',
                height: hoveredIndex === index ? '530px' : '470px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1vw',
                textAlign: 'center',
                borderRadius: '30px',
                transition: 'width 0.3s, height 0.3s', // Smooth transition for size change
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div style={{ flexGrow: 1 }}>
                <Image src='/man.jpeg' alt='pic' width={400} height={500} />
              </div>
              <div style={{ color: 'black', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex' }}>{jean.title}</div>
                <div style={{ display: 'flex', fontWeight: 'lighter' }}>{jean.size}</div>
                <div style={{ display: 'flex', fontWeight: 'bolder' }}>{jean.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
