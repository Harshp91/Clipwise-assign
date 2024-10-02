import React from 'react';

const Nav = () => {
  return (
    <nav className="relative">
      <svg 
        className="absolute inset-0 z-0 " 
        viewBox="0 0 1440 900" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fill="#76DCF6" 
          d="M780.5 719.289C996.132 691.392 1205.06 380.14 1440 254.604V-6.10352e-05H0V900C0 900 124.358 896.153 250 817.997C395.056 727.764 564.868 747.186 780.5 719.289Z"
        />
      </svg>

      <svg 
        width="514" 
        height="526" 
        viewBox="0 0 514 526" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className='absolute inset-0 z-0 blur-3xl overflow-hidden mx-52'
      >
        <defs>
          <clipPath id="clip-top-half">
            <rect width="514" height="263" /> {/* Half of the SVG height */}
          </clipPath>
        </defs>
        <g clipPath="url(#clip-top-half)">
          <path 
            d="M231.955 211.341C308.163 7.01157 594.218 16.3122 462.098 -176.205C494.326 -230.476 489.846 -309.932 214.098 -193.59C-130.587 -48.1613 49.0307 289.374 35.7133 355.8C22.3959 422.225 47.5896 450.801 103.898 426.981C160.206 403.162 208.275 423.216 269.095 486.8C329.914 550.383 450.789 551.837 507.648 366.091C564.506 180.345 155.747 415.67 231.955 211.341Z" 
            fill="url(#paint0_linear_1_11)"
          />
        </g>
        <defs>
          <linearGradient id="paint0_linear_1_11" x1="576.223" y1="272.58" x2="37.6443" y2="-47.2533" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FA7FFD"/>
            <stop offset="1" stopColor="#E33131"/>
          </linearGradient>
        </defs>
      </svg>



      <div className="relative z-10 flex justify-between items-center p-4"> {/* Set relative positioning and z-index */}
        <div className="gap-4 flex items-center mx-20">
          <img src="/assets/Logo.svg" height="64px" width="37px" />
          <p className="text-white text-2xl">Pop Rock Crystal</p>
        </div>

        <div className="flex justify-between gap-36 mr-20">
          <div className="flex text-white gap-16 items-center">
            <p>Home</p>
            <p>Shop</p>
            <p>About Us</p>
            <p>Help</p>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <p className="rounded-full bg-[#FF2B77] text-xs p-1 text-white">00</p>
            <img src="/assets/ion_basket.svg" height="30px" width="30px" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
