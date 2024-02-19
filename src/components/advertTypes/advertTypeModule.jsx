import React from "react";

function AdvertTypeModule({ img, q1, q2, q3, q4 }) {
  return (
    <div className="flex-col lg:flex lg:flex-row justify-center items-stretch px-3 pb-5 gap-10">
      <div className="flex-col border rounded-lg mb-5 lg:mb-0 imgArea lg:flex-grow lg:w-1/3">
        <div className="flex flex-1 p-1">
          <img
            className="w-[30.5vw] h-[30.5vw] md:w-[18vw] md:h-[18vw]
           lg:w-[26vw] lg:h-[26vw] xl:w-[22vw] xl:h-[19.5vw] mx-auto object-cover"
            src={img}
            alt="gönderi reklamı"
          />
        </div>
      </div>
      <div className="flex-col border rounded-lg bg-lightGray infoArea lg:flex-grow lg:w-2/3">
        <div className="p-3">
          <h3 className="font-bold md:text-[1.35vw] lg:text-[1.15vw] xl:text-[0.95vw] text-sm">
            Nedir ?
          </h3>
          <p className="md:text-[1.3vw] lg:text-[1.1vw] xl:text-[0.9vw] text-xs ">
            {q1}
          </p>
          <h3 className="font-bold md:text-[1.35vw] lg:text-[1.15vw] xl:text-[0.95vw] text-sm">
            Neden Kullanılmalıdır ?
          </h3>
          <p className="md:text-[1.3vw] lg:text-[1.1vw] xl:text-[0.9vw] text-xs ">
            {q2}
          </p>
          <h3 className="font-bold md:text-[1.35vw] lg:text-[1.15vw] xl:text-[0.95vw] text-sm">
            Nerede Yayınlanır ?
          </h3>
          <p className="md:text-[1.3vw] lg:text-[1.1vw] xl:text-[0.9vw] text-xs ">
            {q3}
          </p>
          <h3 className="font-bold md:text-[1.35vw] lg:text-[1.15vw] xl:text-[0.95vw] text-sm">
            İpucu
          </h3>
          <p className="md:text-[1.3vw] lg:text-[1.1vw] xl:text-[0.9vw] text-xs ">
            {q4}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdvertTypeModule;
