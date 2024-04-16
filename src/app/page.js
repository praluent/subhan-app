'use client'

import Image from "next/image";
import React, { useState, useRef } from "react";

export default function Home() {
  const [showText, setShowText] = useState(true);
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);



  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <p className="py-4">Wrong Answer. Try again 🙃</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      
      {showText && 
      <div>
        <h1 className="text-4xl font-bold">i'm really sorry <div className="animate-pulse">🙃</div></h1>
        <h2 className="animate-pulse">🌹</h2>
        <h2>do you forgive me?</h2>
            <h2>ﺍﺏ ﮐﮯ ﮨﻢ ﺑﭽﮭﮍﮮ ﺗﻮ ﺷﺎﯾﺪ ﮐﺒﮭﯽ
      ﺧﻮﺍﺑﻮﮞ ﻣﯿﮟ ﻣﻠﯿﮟ <br />

      ﺟﺲ ﻃﺮﺡ ﺳﻮﮐﮭﮯ ﮨﻮﺋﮯ ﭘﮭﻮﻝ ﮐﺘﺎﺑﻮﮞ
      ﻣﯿﮟ ﻣﻠﯿﮟ
      <br />
      ﮈﮬﻮﻧﮉ ﺍﺟﮍﮮ ﮨﻮﺋﮯ ﻟﻮﮔﻮﮞ ﻣﯿﮟ ﻭﻓﺎ
      ﮐﮯ ﻣﻮﺗﯽ
      <br />
      ﯾﮧ ﺧﺰﺍﻧﮯ ﺗﺠﮭﮯ ﻣﻤﮑﻦ ﮨﮯ ﺧﺮﺍﺑﻮﮞ
      ﻣﯿﮟ ﻣﻠﯿﮟ
      <br />
      ﻏﻢِ ﺩﻧﯿﺎ ﺑﮭﯽ ﻏﻢِ ﮮﺍﺭ ﻣﯿﮟ ﺷﺎﻣﻞ ﮐﺮ
      ﻟﻮ
      <br />
      ﻧﺸّﮧ ﺑﮍﮬﺘﺎ ﮨﮯ ﺷﺮﺍﺑﯿﮟ ﺟﺐ ﺷﺮﺍﺑﻮﮞ
      ﻣﯿﮟ ﻣﻠﯿﮟ
      <br />
      ﺗُﻮ ﺧﺪﺍ ﮨﮯ ﻧﮧ ﻣﺮﺍ ﻋﺸﻖ ﻓﺮﺷﺘﻮﮞ
      ﺟﯿﺴﺎ!
      <br />
      ﺩﻭﻧﻮﮞ ﺍﻧﺴﺎﮞ ﮨﯿﮟ ﺗﻮ ﮐﯿﻮﮞ ﺍﺗﻨﮯ
      ﺣﺠﺎﺑﻮﮞ ﻣﯿﮟ ﻣﻠﯿﮟ
      <br />
      ﺁﺝ ﮨﻢ ﺩﺍﺭ ﭘﮧ ﮨﻢ ﮐﮭﯿﻨﭽﮯ ﮔﺌﮯ ﺟﻦ
      ﺑﺎﺗﻮﮞ ﭘﺮ
      <br />
      ﮐﯿﺎ ﻋﺠﺐ ﮐﻞ ﻭﮦ ﺯﻣﺎﻧﮯ ﮐﻮ ﻧﺼﺎﺑﻮﮞ
      ﻣﯿﮟ ﻣﻠﯿﮟ
      <br />
      ﺍﺏ ﻧﮧ ﻭﮦ ﻣﯿﮟ ﻧﮧ ﻭﮦ ﺗﻮ ﮨﮯ ﻧﮧ ﻭﮦ
      ﻣﺎﺿﯽ ﮨﮯ ﻓﺮﺍﺯ
      <br />
      ﺟﯿﺴﮯ ﺩﻭ ﺷﺨّﺺ ﺗﻤﻨﺎ ﮐﮯ ﺳﺮﺍﺑﻮﮞ
      ﻣﯿﮟ ﻣﻠﯿﮟ

        </h2>
        <div className="flex justify-center">
          <button className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>setShowText(false)}>
            Yes
          </button>
          <button className="m-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=> document.getElementById('my_modal_2').showModal()}>
            No 😢
          </button>
        </div>
      </div>}
      {!showText &&
        <h1> 🙃 </h1> }
    </main>
  );
}
