import React, { useState } from "react";
import "./modal.css";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const imageData = [
  {
    id: 1,
    src: "/images/project-1.jpg",
    text: `<span class="text-lg font-semibold">ผลงานไม่กำหนดรูปแบบ</span><br />ผลงานออกแบบที่ไม่มีเงื่อนไขกำหนด<br />เป็นการฝึกออกแบบตามความชอบ`,
  },
  {
    id: 2,
    src: "/images/project-2.jpg",
    text: `<span class="text-lg font-semibold">ผลงานแบบมีกำหนดเงื่อนไข-1</span><br />เป็นผลงานฝึกออกแบบที่มีเงื่อนไขกำหนดจากลูกค้าจริง<br />และนำมาสร้างเป็นผลงานที่ใช้ได้จริง`,
  },
  {
    id: 3,
    src: "/images/project-3.jpg",
    text: `<span class="text-lg font-semibold">ผลงานแบบมีกำหนดเงื่อนไข-2</span><br />เป็นผลงานฝึกออกแบบที่มีเงื่อนไขกำหนดจากลูกค้าจริง<br />และนำมาสร้างเป็นผลงานที่ใช้ได้จริง`,
  },
  {
    id: 4,
    src: "/images/project-4.jpg",
    text: `<span class="text-lg font-semibold">ยังไม่ลงผลงาน</span>`,
  },
];

const ProjectShowcase = () => {
  const [ids, setIds] = useState([1, 2, 3]);
  const [showModal, setShowModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const handlePrev = () => {
    setIds((prev) =>
      prev.map((id) => (id - 1 < 1 ? imageData.length : id - 1))
    );
  };

  const handleNext = () => {
    setIds((prev) =>
      prev.map((id) => (id + 1 > imageData.length ? 1 : id + 1))
    );
  };

  const getImage = (id: number) => imageData.find((img) => img.id === id);

  const handleClickCenterImage = () => {
    const centerImg = getImage(ids[1]);
    if (centerImg) {
      const index = imageData.findIndex((img) => img.id === centerImg.id);
      setModalIndex(index);
      setShowModal(true);
    }
  };

  return (
    <>
      <div className="text-center w-full px-4 md:px-10 py-10 bg-[#111] pb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-[#8ab4f8] ">
          ผลงานออกแบบเว็บไซต์
        </h2>
      </div>
      <div className="flex justify-between items-center w-full px-4 md:px-10 py-10 bg-[#111] h-[90vh] pb-0">
        <button
          className="text-white bg-[#333] p-3 rounded-full hover:bg-[#555]"
          onClick={handlePrev}
        >
          ←
        </button>

        <div className="flex justify-center items-center flex-grow gap-10">
          {[0, 1, 2].map((idx) => {
            const image = getImage(ids[idx]);
            const isCenter = idx === 1;

            return (
              <div
                key={image?.id}
                onClick={isCenter ? handleClickCenterImage : undefined}
                className={`relative cursor-pointer group ${
                  isCenter
                    ? "w-[350px] h-[600px] scale-105 hover:scale-110 hover:shadow-xl"
                    : "w-[280px] h-[500px] scale-90 opacity-50"
                } transition-all duration-300`}
              >
                <img
                  src={image?.src}
                  alt={`Project ${image?.id}`}
                  className="w-full h-full object-cover object-top rounded-lg"
                />

                {isCenter && (
                  <>
                    <div className="absolute bottom-0 left-0 w-full h-2/4 bg-gradient-to-t from-black to-transparent rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div
                      className="absolute bottom-3 left-3 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      dangerouslySetInnerHTML={{ __html: image?.text || "" }}
                    ></div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <button
          className="text-white bg-[#333] p-3 rounded-full hover:bg-[#555]"
          onClick={handleNext}
        >
          →
        </button>
      </div>

      {/* Lightbox modal with zoom plugin */}
      {showModal && (
        <Lightbox
          open={showModal}
          close={() => setShowModal(false)}
          index={modalIndex}
          slides={imageData.map((img) => ({ src: img.src }))}
          plugins={[Zoom]}
        />
      )}
    </>
  );
};

export default ProjectShowcase;
