import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-[600px]">
      <h2 className="knockout-font text-[32px] tracking-tight mb-8">Birdtalk</h2>
      <div className="space-y-12">
        <section>
          <h3 className="knockout-font text-[16px] tracking-[0.15em] mb-4 text-[#bdbdbd]">Gagosian Gallery</h3>
          <p className="text-[18px]">980 Madison Avenue<br />New York, NY 10075</p>
        </section>
        
        <section>
          <h3 className="knockout-font text-[16px] tracking-[0.15em] mb-4 text-[#bdbdbd]">News</h3>
          <div className="p-8 bg-white/50 border border-gray-200">
            <p className="text-[18px] italic mb-4 font-normal">"The jokes are what keep me going. If I stop laughing, I stop working."</p>
            <p className="text-right knockout-font text-[12px] tracking-[0.1em] text-gray-500">— JC, 2024</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;