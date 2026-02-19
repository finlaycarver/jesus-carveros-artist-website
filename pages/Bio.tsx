import React from 'react';

const Bio: React.FC = () => {
  return (
    <div id="cat_main">
      <div id="cat_left">
        {/* Empty cat_left to maintain layout system without sub-navigation */}
      </div>
      <div id="cat_right" className="!pt-0 !mt-0 !flex !flex-row !justify-start !items-start !h-auto !min-h-0">
        <div className="max-w-[800px] text-left !pt-0 !mt-0 flex flex-col items-start self-start">
          <div className="space-y-6 text-[18px] leading-relaxed text-black/90 pt-0 mt-0">
            <p>
              Jesus Carveros works across photography, film, installation and performance.<br />
              He uses headlines and text that reference a career in advertising, to critique interest in mass consumerism and media culture.
            </p>
            <p>
              His practice is informed by Richard Prince, Donald Judd, Jackson Pollock, Andy Warhol, Jeff Koons, Cy Twombly, Jenny Holzer and Barbara Kruger.
            </p>
            <p>
              Jesus Carveros explores notions of identity, mental health, vulnerability, social media, authenticity, agitation, masking, personal connection and artificial intelligence.
            </p>
            <p>
              He believes art should not represent anything in particular, but that it should unequivocally stand on its own and simply exist.
            </p>
            <p>
              Work is split between minimal and maximal, frequently facilitated by computers, machines, artisans and fabricators.
            </p>
            <p>
              Jesus Carveros readily bares his soul, examining the dynamics of intimate, personal relationships and sense of self.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;