"use client"
import Image from "next/image";
import gsap from "gsap";
import { useEffect } from "react";
import { League_Spartan } from "next/font/google";
import Navbar from "./componenet/Navbar";
import Hoverer from "./componenet/Hoverer";
import Hoverer2 from "./componenet/Hoverer2";
import { useState } from "react";
const fontss = League_Spartan({
  subsets: ['latin'],
  weight: ['800']
});

export default function Home() {
  const [ismobile, setIsMobile] = useState(false);

  useEffect(() => {
    // This will only run on the client side
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();

    // Add event listener to handle window resize
    window.addEventListener('resize', checkIsMobile);

    // Clean up the event listener
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  useEffect(() => {
    const t1 = gsap.timeline();

    t1.to('.one', { opacity: 1, ease: gsap.easeInOut });
    t1.to('.two', { opacity: 1, ease: gsap.easeInOut });
    t1.to('.three', { opacity: 1, ease: gsap.easeInOut });
    t1.to('.brown-background', { height: 0, duration: 1, ease: gsap.easeInOut, delay: 1 });
    t1.to('.white-background', { height:ismobile?'150vh':'100vh', duration: 1 }, '-=0.5');

    return () => {
      t1.kill();
    };
  }, []);

  return (
    <>
    
      <div style={{ height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor: 'black' }}>
        <div className="brown-background" style={{ display: 'flex', width: '100vw', height:'100vh', position: 'relative', backgroundColor: '#fdf0d5', justifyContent: 'center', alignContent: 'center', overflow: 'hidden',alignItems:'center' }}>
          <div className="text-content" style={{ height:ismobile?'60vh': '40vh', fontFamily: fontss, lineHeight: '1.2' }}>
            <h2 className="one" style={{ fontSize: ismobile?'20vw':'10vw', opacity: '0' }}>the</h2>
            <h2 className="two" style={{ fontSize: ismobile?'20vw':'10vw', opacity: '0' }}>thrift</h2>
            <h2 className="three" style={{ fontSize:ismobile?'20vw': '10vw', opacity: '0' }}>Kada.</h2>
          </div>
        </div>
        <div className="white-background" style={{ height:ismobile?'150vh':'100vh', width: '100vw', position: 'absolute', backgroundColor:'#fdf0d5', bottom: '100', display: 'flex', justifyContent: 'space-between', overflow: 'hidden', flexDirection: 'column' }}>
          <Navbar />
          <div style={{ width: '100vw', height: ismobile?'220vh':'90vh', display: 'flex', flexDirection:ismobile? 'column':'row',padding: '80px',justifyContent:'space-between', alignContent: 'center' }}>
            <Hoverer2 />
            <Hoverer />
          </div>
        </div>
      </div>
      <style jsx global>{`
        .text-content h2 {
          font-family: ${fontss.style.fontFamily};
        }
      `}</style>
    </>
  );
}
