import React from 'react';
import Head from 'next/head';
import HomePageBanner from '@/components/HomeBanner';
import LeftImageRightContent from '@/components/LeftImageRightContent';
import ButtonComponent from '@/components/Buttons';
import TryRoiCalculater from '@/components/TryRoiCalculater';
import OurMarketsContentTabs from '@/components/OurMarketContentTabs';
import ClientLogs from '@/components/ClientLogs';
import ContactUsToday from '@/components/ContactUsToday';
import whyOxairLeftImg from "../assets/images/why-oxair-left-img.png"

export default function Home() {
  return (
    <>
      <Head>
        <title>Oxair</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
      <div className="row">
       <HomePageBanner />
       </div>
       <LeftImageRightContent imageSrc={whyOxairLeftImg}>
        <h5 className='headings lawn-green'>WHY OXAIR</h5>
       <h1 className='sub-headings dark-blue'>Oxair-Built Separation Systems are Reliable and built to last</h1>
       <ButtonComponent label={"ISO-9001 & ISO 13485 Certified"} />
        <ul className="why-oxair-list">
          <li className="list-item">Our ISO-9001-certified oxygen generators are ideal for hospitals and industrial use. </li>
          <li className="list-item">ISO 13485 Medical device certified from a reputed audit agency.</li>
          <li className="list-item">Our ISO 13485 medical device-certified oxygen generators are ideal for patient breathing.</li>
          <li className="list-item">We meet all the safety standards for medical oxygen generators and the use of supplemental oxygen.</li>
          <li className="list-item">Uninterrupted oxygen supply even during a power outage ensures oxygen therapy and industrial equipment doesn’t fail.</li>
          <li className='list-item'>Operational costs for the PSA oxygen generators are low. They are built using high-quality materials and need very little maintenance. </li>
          <li className='list-item'>Common oxygen generators use solenoid valves with a short life, but we use longlasting True Air Process Actuated Valves for trouble-free services.</li>
          <li className='list-item'>Our systems use stainless steel piping with minimal wear and tear, instead of check valves that fail often. </li>
          <li className='list-item'>Our color touchscreen display and UI enable automatic operations with minimum training.</li>
        </ul>
       </LeftImageRightContent>
       <div className='market-place-section'>
        <TryRoiCalculater />
       </div>
       <OurMarketsContentTabs />
       <ClientLogs />
       <ContactUsToday />
      </main>
    </>
  );
}
