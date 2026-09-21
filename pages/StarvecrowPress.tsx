import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { VideoEmbed } from '../components/VideoEmbed';

interface PressLink {
  outlet: string;
  url: string;
}

const PRESS_LINKS: PressLink[] = [
  { outlet: 'The Upcoming', url: 'https://www.theupcoming.co.uk/2017/11/22/starvecrow-movie-review/' },
  { outlet: 'The Fan Carpet', url: 'https://www.thefancarpet.com/reviews/starvecrow/' },
  { outlet: 'Live for Film', url: 'https://www.liveforfilm.com/2016/01/25/review-starvecrow-innovative-brilliance/' },
  { outlet: 'UK Film Review', url: 'https://www.ukfilmreview.co.uk/post/starvecrow' },
  { outlet: 'DMovies', url: 'https://dmovies.org/2017/11/21/9047/' },
  { outlet: 'Filmuforia', url: 'https://filmuforia.com/starvecrow-2017/' },
  { outlet: 'Back to the Movies', url: 'https://www.backtothemovies.com/starvecrow-review/' },
  { outlet: 'Found Footage Critic', url: 'https://www.foundfootagecritic.com/starvecrow-2016/' },
];

const linkClasses =
  'text-black text-[15px] leading-[1.85] border-b border-black/40 hover:border-black hover:text-black transition-colors duration-150 no-underline';

const StarvecrowPress: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Starvecrow — Jesus Carveros';
  }, []);

  return (
    <div id="cat_main">
      <div id="cat_left">
        <div className="pt-7">
          <ul className="cat-list">
            <li>
              <Link to="/films" className={location.pathname === '/films' ? 'active' : ''}>FILMS</Link>
            </li>
            <li>
              <Link to="/films/starvecrow" className={location.pathname === '/films/starvecrow' ? 'active' : ''}>STARVECROW</Link>
            </li>
          </ul>
        </div>
      </div>

      <div id="cat_right" className="!pt-0 !mt-0 !flex !flex-row !justify-start !items-start !h-auto !min-h-0">
        <div className="max-w-[800px] w-full text-left !pt-0 !mt-0 flex flex-col items-start self-start">
          <h1 className="text-[13px] font-semibold uppercase tracking-widest text-black mb-8">Starvecrow</h1>

          <h2 className="text-[12px] font-semibold uppercase tracking-widest text-black/50 mb-6">Overview</h2>
          <div className="space-y-7 text-[15px] leading-[1.85] text-black/80 pt-0 mt-0 mb-14">
            <p>
              Starvecrow (2016) is a feature film written and directed by Jesus Carveros, marketed on release
              as the world&rsquo;s first &ldquo;selfie movie&rdquo;. A decade on from its festival premiere, it stands as an
              early, unsettling document of digital-age anxiety.
            </p>
            <p>
              Shot on smartphones and hacked CCTV, blending newcomers with screen veterans including Jeremy Swift
              (Ted Lasso) and David Bark-Jones (RocknRolla), 69 hours of improvised footage was compressed into an
              84-minute narrative — a process Carveros termed &ldquo;Hypereal&rdquo;.
            </p>
            <p>
              Its story follows Ben, who compulsively films his girlfriend Jess to control and manipulate her — a
              study in digital narcissism, surveillance and coercive control that pre-empted themes now central to
              true-crime culture and online safety discourse.
            </p>
            <p>
              Starvecrow premiered at the Institute of Contemporary Art (ICA), London. Its soundscape was produced
              by DJ and producer Noel Watson. In 2018 the film entered the British Film Institute (BFI) National
              Archive.
            </p>
          </div>

          <h2 className="text-[12px] font-semibold uppercase tracking-widest text-black/50 mb-6">Trailer</h2>
          <div className="mb-14 w-full flex justify-start">
            <VideoEmbed videoId="L5rcwj11D4U" title="Starvecrow — Official Trailer" />
          </div>

          <h2 className="text-[12px] font-semibold uppercase tracking-widest text-black/50 mb-6">Press</h2>
          <ul className="flex flex-col gap-4 list-none p-0 m-0">
            {PRESS_LINKS.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-baseline gap-1.5 ${linkClasses}`}
                >
                  {link.outlet}
                  <span aria-hidden="true" className="text-[12px] text-black/40 group-hover:text-black transition-colors duration-150">
                    ↗
                  </span>
                  <span className="sr-only">(opens in new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StarvecrowPress;
