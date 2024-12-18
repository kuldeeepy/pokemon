function Pagination({ handlePrev, handleNext, dataLen, selectedIdx }) {
  return (
    <div className="flex gap-4 justify-between items-center relative top-[5vh]">
      <button
        disabled={selectedIdx === 0}
        onClick={handlePrev}
        className="py-1 active:bg-black active:text-white w-full rounded-lg font-medium border-2"
      >
        Previous
      </button>
      <button
        disabled={dataLen - 1 === selectedIdx}
        onClick={handleNext}
        className="py-1 active:bg-black active:text-white w-full rounded-lg font-medium border-2"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
