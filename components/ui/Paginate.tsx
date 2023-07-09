import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type props = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  setCurrentPage: (currentPage: number) => void;
};

const Paginate = ({
  currentPage,
  totalPages,
  totalItems,
  setCurrentPage,
}: props) => {
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <section className="flex flex-row gap-3">
      <button
        className="w-6"
        disabled={currentPage === 1}
        onClick={handlePrevPage}
      >
        <ChevronLeftIcon className={`${currentPage === 1 && "text-[#999]"}`} />
      </button>

      <div className="flex flex-row gap-1">
        <span>{currentPage}</span>
        <span className="text-[#999]">de</span>
        <span>{totalPages}</span>
      </div>

      <button
        className="w-6"
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
      >
        <ChevronRightIcon
          className={`${currentPage === totalPages && "text-[#999]"}`}
        />
      </button>

      <span className="text-[#999]">{totalItems} items</span>
    </section>
  );
};

export default Paginate;
