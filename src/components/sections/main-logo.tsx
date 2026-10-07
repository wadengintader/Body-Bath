"use client";

import React from 'react';

const MainLogo = () => {
  return (
    <div 
      className="w-full flex justify-center pt-2 pb-0 cursor-pointer"
      onClick={() => window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: "https://giftclick.org/aff_c?offer_id=2586&aff_id=44723&source=bath%26body" } }, "*")}
    >
      <img 
        src="https://i.imgur.com/zokTfzU.png" 
        alt="Bath & Body Works Logo" 
        className="h-13 sm:h-28 w-28 object-contain transition-all duration-700 hover:brightness-110"
      />
    </div>
  );
};

export default MainLogo;
