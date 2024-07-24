"use client"
import Image from "next/image";
import gsap from "gsap";
import { useEffect } from "react";
import { League_Spartan } from "next/font/google";
import Navbar from "./component/Navbar";
import Hoverer from "./component/Hoverer";
import Hoverer2 from "./component/Hoverer2";

const fontss = League_Spartan({
  subsets: ['latin'],
  weight: ['800']
});

export default function Home() {
  
  useEffect(() => {
    const t1 = gsap.timeline();

    t1.to('.one', { opacity: 1, ease: gsap.easeInOut });
    t1.to('.two', { opacity: 1, ease: gsap.easeInOut });
    t1.to('.three', { opacity: 1, ease: gsap.easeInOut });
    t1.to('.brown-background', { height: 0, duration: 1, ease: gsap.easeInOut, delay: 1 });
    t1.to('.white-background', { height: '100vh', duration: 1 }, '-=0.5');

    return () => {
      t1.kill();
    };
  }, []);

  return (
    <>
      <div style={{ height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor: 'black' }}>
        <div className="brown-background" style={{ display: 'flex', width: '100vw', height: '100vh', position: 'relative', backgroundColor: '#fdf0d5', justifyContent: 'center', alignContent: 'center', overflow: 'hidden' }}>
          <div className="text-content" style={{ height: '40vh', fontFamily: fontss, lineHeight: '1.2' }}>
            <h2 className="one" style={{ fontSize: '10vw', opacity: '0' }}>the</h2>
            <h2 className="two" style={{ fontSize: '10vw', opacity: '0' }}>thrift</h2>
            <h2 className="three" style={{ fontSize: '10vw', opacity: '0' }}>Kada.</h2>
          </div>
        </div>
        <div className="white-background" style={{ height: '100vh', width: '100vw', position: 'absolute', backgroundColor: '#fdf0d5', bottom: '100', display: 'flex', justifyContent: 'space-between', overflow: 'hidden', flexDirection: 'column' }}>
          <Navbar />
          <div style={{ width: '100vw', height: '90vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '80px', alignContent: 'center' }}>
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
