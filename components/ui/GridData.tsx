type props = {
  options: optionsType;
};

type optionsType = {
  keyCol: string;
  cols: colType[];
  data: any[];
};

type colType = {
  id: string;
  title: string;
};

const GridData = ({ options }: props) => {
  const { cols, keyCol, data } = options;

  return (
    <>
      <div
        className={`hidden p-4 md:grid md:grid-cols-[minmax(80px,auto)_repeat(auto-fit,minmax(0,1fr))] gap-4 border-t border-b border-[#E6E6E6] bg-[#FAFAFA]`}
      >
        {cols.map((col, index) => (
          <div
            key={col.id}
            className={`text-[#999] ${index < cols.length - 1 && "border-r"}`}
          >
            {col.title}
          </div>
        ))}
      </div>

      {data?.map((item) => (
        <div
          key={item[keyCol]}
          className={`p-3 bg-white my-2 rounded-md md:grid md:grid-cols-[minmax(80px,auto)_repeat(auto-fit,minmax(0,1fr))] md:gap-4`}
        >
          {cols.map((col) => (
            <div className="flex gap-2" key={`${col.id}_${item[keyCol]}`}>
              <span className="md:hidden">{col.title}</span>
              <span>{item[col.id]}</span>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default GridData;
