interface WorkExperience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  logo: React.ReactElement;
  achievements: string[];
  link: {
    link: string;
    title: string;
    image: string;
    description: string;
  };
}

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    company: "Steamulo",
    position: "Fullstack & ML Developer at Steamulo",
    period: "2024 - Present",
    description:
      "The company is young and fast moving, they will expect adaptability from their employees but reward them correctly when the job is done.",
    logo: (
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="225.000000pt"
        height="225.000000pt"
        viewBox="0 0 225.000000 225.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="FFA500"
        >
          <path d="M795 1940 c-13 -6 -5 -7 25 -3 25 3 47 7 49 9 9 8 -55 2 -74 -6z" />
          <path
            d="M1305 1937 c-56 -22 -74 -37 -102 -84 -96 -165 78 -354 252 -274 95
     43 137 142 104 242 -33 97 -157 154 -254 116z"
          />
          <path
            d="M890 1933 c8 -3 24 -10 35 -15 20 -9 20 -9 1 6 -11 9 -27 16 -35 15
     -14 0 -14 -1 -1 -6z"
          />
          <path
            d="M703 1888 c-11 -13 -24 -30 -28 -38 -8 -16 -6 -14 34 33 14 15 22 27
     19 27 -2 0 -14 -10 -25 -22z"
          />
          <path
            d="M970 1888 c25 -24 38 -29 25 -9 -3 6 -16 16 -28 22 -20 11 -20 9 3
     -13z"
          />
          <path
            d="M1005 1842 c4 -8 11 -26 15 -40 7 -22 8 -23 9 -6 1 11 -6 29 -15 40
     -8 10 -12 13 -9 6z"
          />
          <path
            d="M656 1814 c-8 -22 -7 -107 2 -121 4 -6 7 22 7 63 0 41 -1 74 -1 74
     -1 0 -5 -7 -8 -16z"
          />
          <path d="M1031 1754 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
          <path
            d="M1021 1715 c-1 -11 -12 -39 -26 -63 -13 -23 -20 -40 -14 -37 17 11
     50 86 46 103 -4 13 -5 13 -6 -3z"
          />
          <path
            d="M678 1655 c6 -11 21 -29 34 -40 22 -19 22 -19 -2 10 -40 48 -43 51
     -32 30z"
          />
          <path d="M934 1594 c-18 -14 -18 -15 4 -4 12 6 22 13 22 15 0 8 -5 6 -26 -11z" />
          <path d="M747 1589 c7 -7 15 -10 18 -7 3 3 -2 9 -12 12 -14 6 -15 5 -6 -5z" />
          <path d="M845 1570 l-40 -7 35 -1 c19 0 44 3 55 8 24 10 7 10 -50 0z" />
          <path
            d="M1366 1433 c-13 -21 -78 -125 -145 -231 l-121 -193 0 -167 c-1 -154
     -2 -165 -16 -139 -8 15 -17 27 -20 27 -3 0 3 -15 13 -32 11 -18 23 -33 28 -33
     6 0 73 95 150 212 77 117 143 212 148 213 4 0 7 -151 7 -335 l0 -335 115 0
     115 0 -2 523 -3 522 -122 3 -122 3 -25 -38z"
          />
          <path
            d="M580 940 l0 -520 110 0 110 0 0 335 c0 184 3 335 7 335 4 0 18 -12
     31 -27 l24 -28 -22 33 c-12 18 -27 31 -34 29 -8 -3 -12 -97 -14 -335 l-2 -332
     -100 0 -100 0 0 510 0 509 123 4 122 3 -127 2 -128 2 0 -520z"
          />
          <path
            d="M850 1409 c0 -3 11 -20 25 -39 14 -19 25 -30 25 -24 -1 10 -50 73
     -50 63z"
          />
          <path
            d="M961 1232 c17 -29 34 -52 36 -52 7 0 -41 81 -55 92 -7 7 1 -12 19
     -40z"
          />
          <path
            d="M1010 1150 c6 -11 13 -20 16 -20 2 0 0 9 -6 20 -6 11 -13 20 -16 20
     -2 0 0 -9 6 -20z"
          />
          <path d="M1051 1090 c29 -45 29 -45 29 -34 0 5 -12 23 -26 39 l-26 30 23 -35z" />
          <path
            d="M930 920 c12 -16 24 -30 26 -30 3 0 -4 14 -16 30 -12 17 -24 30 -26
     30 -3 0 4 -13 16 -30z"
          />
          <path
            d="M999 812 c5 -10 18 -25 27 -33 11 -9 9 -2 -6 19 -26 35 -36 42 -21
     14z"
          />
        </g>
      </svg>
    ),
    achievements: [
      "Designed template UIs and design systems in Figma.",
      "Converted UIs into responsive HTML and CSS with a mobile-first approach.",
      "Created custom illustrations and item description banners.",
      "Provided detailed documentation and customer support on GitHub.",
    ],
    link: {
      link: "https://www.welcometothejungle.com/fr/companies/steamulo",
      title: "Welcome to Steamulo",
      image: "src/assets/images/steamulo_link.webp",
      description:
        "Create your dream solution thanks to Steamulo, dreams come true.",
    },
  },
  {
    id: 2,
    company: "Digital Surf",
    position: "Software Developer at Digital Surf",
    period: "2023 - 2024",
    description:
      "The company is young and fast moving, they will expect adaptability from their employees but reward them correctly when the job is done.",
    logo: (
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="386.000000pt"
        height="329.000000pt"
        viewBox="0 0 386.000000 329.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,329.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M2422 2648 c-11 -18 -36 -59 -55 -90 -20 -32 -34 -58 -31 -58 2 0 16
     19 31 43 66 105 77 118 91 112 12 -4 13 -3 2 10 -16 20 -15 20 -38 -17z"
          />
          <path
            d="M2470 2632 c0 -5 9 -20 21 -33 48 -56 109 -150 104 -160 -4 -5 -2 -8
     3 -7 5 2 19 -8 31 -22 33 -37 15 -6 -53 90 -73 103 -106 145 -106 132z"
          />
          <path
            d="M2263 2393 c-33 -54 -83 -136 -112 -182 -29 -45 -48 -80 -43 -77 9 5
     185 284 211 334 28 52 0 15 -56 -75z"
          />
          <path
            d="M2403 2445 c-18 -19 -29 -35 -26 -35 4 0 -7 -15 -23 -32 -17 -18 -44
     -52 -61 -75 -16 -24 -32 -41 -34 -38 -3 2 -5 -5 -6 -16 -1 -12 16 4 44 43 26
     35 68 89 95 121 43 52 53 67 45 67 -1 0 -17 -16 -34 -35z"
          />
          <path
            d="M2452 2472 c9 -22 84 -122 92 -122 5 0 3 7 -4 15 -10 12 -10 18 1 33
     13 16 12 16 -4 3 -12 -9 -21 -11 -25 -5 -4 6 -17 27 -30 47 -21 33 -39 51 -30
     29z"
          />
          <path
            d="M2672 2344 c12 -20 35 -51 51 -68 l30 -31 -22 30 c-12 17 -33 47 -47
     68 -31 47 -40 48 -12 1z"
          />
          <path d="M2550 2331 c0 -6 4 -13 10 -16 6 -3 7 1 4 9 -7 18 -14 21 -14 7z" />
          <path
            d="M1097 2168 c-52 -84 -158 -254 -236 -377 -78 -123 -140 -225 -138
     -227 2 -2 131 3 288 11 156 8 322 15 369 15 114 2 75 15 -65 23 -289 17 -436
     31 -432 41 3 6 38 58 79 116 40 58 109 156 153 218 43 61 81 112 84 111 4 0
     76 -108 161 -241 158 -245 498 -770 724 -1115 l126 -192 62 4 c35 3 216 12
     403 20 187 9 365 17 395 18 111 5 3 15 -330 31 -184 9 -367 20 -407 23 l-72 6
     -203 320 c-208 329 -332 524 -663 1047 -104 165 -193 300 -196 300 -4 0 -49
     -69 -102 -152z"
          />
          <path
            d="M2613 2239 c26 -35 67 -93 92 -129 96 -142 117 -170 126 -170 5 0 1
     10 -11 22 -11 12 -20 25 -20 29 0 3 -13 21 -29 40 -22 25 -27 37 -19 46 8 10
     7 12 -4 8 -19 -8 -89 99 -82 123 5 13 4 14 -4 3 -7 -10 -17 -3 -41 32 -17 25
     -37 49 -43 53 -6 4 10 -21 35 -57z"
          />
          <path
            d="M2756 2228 c5 -7 27 -41 51 -75 42 -62 51 -79 35 -69 -4 2 -8 -4 -8
     -15 0 -18 2 -18 12 -5 10 14 13 14 29 -3 10 -12 14 -25 9 -33 -4 -7 -4 -10 1
     -6 4 4 15 2 24 -5 9 -6 4 4 -10 23 -14 19 -51 72 -83 118 -32 45 -60 82 -62
     82 -3 0 -2 -6 2 -12z"
          />
          <path
            d="M2217 2204 c-10 -14 -23 -21 -29 -18 -7 5 -8 2 -3 -5 4 -7 -1 -22
     -12 -34 -25 -27 -66 -87 -60 -87 6 0 129 161 125 165 -1 2 -11 -8 -21 -21z"
          />
          <path
            d="M2048 2048 c-31 -49 -43 -77 -37 -84 6 -8 2 -20 -11 -35 -21 -27 -26
     -19 -9 14 6 12 7 18 2 12 -15 -16 -55 -85 -49 -85 3 0 -5 -11 -17 -24 -12 -14
     -39 -53 -60 -88 -20 -35 -27 -50 -15 -34 128 163 177 230 172 238 -9 14 17 69
     29 61 5 -3 7 -2 4 4 -7 11 21 55 31 49 4 -2 7 7 7 20 0 13 0 24 -1 24 0 0 -21
     -33 -46 -72z m-78 -158 c-6 -11 -13 -20 -16 -20 -2 0 0 9 6 20 6 11 13 20 16
     20 2 0 0 -9 -6 -20z"
          />
          <path
            d="M2077 2027 c-9 -13 -23 -32 -32 -41 -9 -9 -13 -16 -8 -16 11 0 66 70
     60 76 -2 3 -11 -6 -20 -19z"
          />
          <path
            d="M2920 1990 c0 -5 14 -24 31 -42 l30 -33 -27 43 c-27 43 -34 49 -34
     32z"
          />
          <path
            d="M2875 1865 c27 -38 53 -75 59 -80 6 -6 8 -6 4 -1 -12 16 -9 28 5 20
     6 -4 9 -4 5 0 -3 4 -9 6 -12 4 -11 -6 -66 80 -60 95 3 8 1 18 -5 22 -7 4 -8
     -1 -4 -12 6 -16 4 -16 -17 2 -14 12 -4 -9 25 -50z"
          />
          <path
            d="M3012 1862 c18 -28 37 -51 41 -51 9 -1 -52 87 -66 96 -5 3 6 -18 25
     -45z"
          />
          <path
            d="M3072 1775 c12 -14 23 -25 25 -25 2 0 -4 11 -13 25 -9 14 -20 25 -25
     25 -5 0 1 -11 13 -25z"
          />
          <path
            d="M2931 1724 c-12 -20 -19 -39 -16 -42 6 -7 6 -6 28 41 21 47 15 48
     -12 1z"
          />
          <path
            d="M3100 1731 c0 -7 9 -21 20 -33 10 -12 17 -25 14 -30 -3 -5 -1 -7 4
     -6 5 2 19 -8 32 -22 14 -16 12 -11 -6 15 -48 70 -64 88 -64 76z"
          />
          <path
            d="M2843 1558 c-126 -234 -216 -411 -205 -404 21 12 22 -12 1 -35 l-20
     -24 6 23 c4 12 4 22 1 22 -9 0 -47 -80 -39 -80 5 0 3 -4 -3 -8 -5 -4 -27 -38
     -48 -77 -51 -92 -39 -79 89 105 60 85 149 212 199 283 50 70 96 136 102 147 6
     11 19 29 29 40 14 16 15 19 3 15 -8 -3 -24 -21 -34 -39 -32 -57 -147 -216
     -156 -216 -4 0 -7 -4 -5 -9 4 -15 -86 -132 -95 -123 -8 8 86 203 158 328 40
     71 84 158 80 161 -1 2 -30 -48 -63 -109z m-178 -388 c3 -5 1 -10 -4 -10 -6 0
     -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m-59 -98 c-18 -16 -18 -16 -6 6
     6 13 14 21 18 18 3 -4 -2 -14 -12 -24z"
          />
          <path
            d="M2997 1620 c-8 -11 -16 -18 -19 -15 -2 3 -5 -2 -5 -10 0 -21 3 -19
     27 15 12 17 19 30 16 30 -3 0 -11 -9 -19 -20z"
          />
          <path
            d="M3030 1626 c0 -15 51 -98 57 -92 4 3 -1 14 -9 23 -9 10 -23 32 -31
     48 -9 17 -16 26 -17 21z"
          />
          <path
            d="M3207 1585 c43 -71 219 -324 225 -325 8 0 -206 317 -229 340 -9 10
     -8 4 4 -15z"
          />
          <path
            d="M3837 1574 c9 -15 19 -21 21 -15 6 19 -6 41 -23 41 -14 0 -13 -3 2
     -26z"
          />
          <path
            d="M3110 1489 c12 -16 24 -28 27 -25 3 3 -2 12 -11 21 -9 9 -16 21 -16
     26 0 5 -5 9 -11 9 -6 0 -1 -14 11 -31z"
          />
          <path
            d="M579 1318 c-175 -221 -292 -385 -278 -393 5 -4 8 -3 7 2 -5 15 37 60
     52 56 12 -4 13 -3 1 5 -11 8 -4 24 36 81 28 39 53 67 57 63 4 -4 6 -2 4 3 -4
     14 72 106 83 99 5 -3 7 1 4 8 -7 18 86 133 95 118 5 -8 23 17 47 64 22 42 40
     76 39 76 -1 0 -67 -82 -147 -182z m81 71 c-7 -11 -14 -18 -17 -15 -3 3 0 12 7
     21 18 21 23 19 10 -6z"
          />
          <path
            d="M3180 1402 c0 -21 205 -282 386 -492 103 -119 254 -289 254 -287 0 8
     -116 218 -178 322 -65 110 -176 281 -195 300 -14 14 -1 -8 52 -88 79 -118 120
     -191 114 -201 -3 -5 -2 -7 3 -3 9 5 149 -232 141 -240 -5 -4 -249 274 -308
     352 -13 17 -26 32 -29 35 -3 3 -36 43 -73 90 -37 47 -81 102 -98 123 -16 20
     -27 42 -24 47 4 6 1 9 -6 8 -7 -2 -18 8 -26 22 -7 14 -13 19 -13 12z"
          />
          <path
            d="M610 1304 c-12 -19 -20 -38 -17 -40 3 -3 15 12 27 35 25 50 19 54
     -10 5z"
          />
          <path
            d="M550 1193 c-108 -203 -167 -296 -182 -287 -6 4 -8 3 -4 -4 7 -11 -16
     -57 -66 -131 -16 -24 -27 -45 -25 -48 8 -7 235 364 292 477 35 69 22 63 -15
     -7z"
          />
          <path
            d="M252 878 c-15 -24 -45 -68 -68 -98 -59 -80 -82 -118 -63 -103 9 7 19
     10 23 6 4 -4 4 0 1 8 -4 10 9 35 33 65 21 27 54 73 74 101 19 29 38 50 43 45
     5 -4 5 -1 1 6 -11 18 -14 16 -44 -30z"
          />
          <path
            d="M398 693 c68 -2 176 -2 240 0 64 1 9 3 -123 3 -132 0 -185 -2 -117
     -3z"
          />
          <path
            d="M990 680 c107 -4 286 -15 398 -24 111 -10 210 -15 220 -13 11 3 8 5
     -8 6 -14 1 -140 10 -280 21 -140 11 -316 19 -390 18 -132 -1 -131 -1 60 -8z"
          />
          <path
            d="M70 620 c-17 -22 -28 -40 -23 -40 8 0 68 80 59 80 -2 0 -19 -18 -36
     -40z"
          />
          <path d="M1640 630 c8 -5 40 -9 70 -9 42 1 49 3 30 9 -38 12 -119 12 -100 0z" />
          <path d="M1568 613 c12 -2 32 -2 45 0 12 2 2 4 -23 4 -25 0 -35 -2 -22 -4z" />
          <path d="M1418 603 c23 -2 61 -2 85 0 23 2 4 4 -43 4 -47 0 -66 -2 -42 -4z" />
          <path d="M1183 593 c37 -2 96 -2 130 0 34 2 4 3 -68 3 -71 0 -99 -1 -62 -3z" />
          <path d="M88 583 c12 -2 32 -2 45 0 12 2 2 4 -23 4 -25 0 -35 -2 -22 -4z" />
          <path
            d="M393 583 c131 -2 343 -2 470 0 128 1 21 2 -238 2 -259 0 -363 -1
     -232 -2z"
          />
        </g>
      </svg>
    ),
    achievements: [
      "Designed template UIs and design systems in Figma.",
      "Converted UIs into responsive HTML and CSS with a mobile-first approach.",
      "Created custom illustrations and item description banners.",
      "Provided detailed documentation and customer support on GitHub.",
    ],
    link: {
      link: "https://www.welcometothejungle.com/fr/companies/digital-surf",
      title: "Welcome to Digital Surf",
      image: "src/assets/images/digital_surf_link.webp",
      description:
        "Create your dream solution thanks to Steamulo, dreams come true.",
    },
  },
];

const Work = () => {
  return (
    <section id="work" className="mt-10 sm:mt-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Work Experience
      </h2>
      <div>
        {workExperiences.map((work) => (
          <div key={work.id} className="group relative flex gap-x-5">
            <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
              <div className="relative z-10 size-6 flex justify-center items-center">
                {work.logo}
              </div>
            </div>
            <div className="grow pb-8 group-last:pb-0">
              <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                <p className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                  {work.period}
                </p>
                <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                  {work.position}
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  {work.description}
                </p>
                <ul className="list-disc ms-6 mt-3 space-y-1.5">
                  {work.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="ps-1 text-sm text-gray-600 dark:text-neutral-400"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <a
                    className="block border border-gray-200 rounded-lg hover:shadow-sm focus:outline-none dark:border-neutral-700"
                    href={work.link.link}
                    target="_blank"
                  >
                    <div className="relative flex items-center overflow-hidden">
                      <img
                        className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
                        src={work.link.image}
                      />

                      <div className="grow p-4 ms-32 sm:ms-48">
                        <div className="min-h-24 flex flex-col justify-center">
                          <h3 className="font-semibold text-sm text-gray-800 dark:text-neutral-300">
                            {work.link.title}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                            {work.link.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
