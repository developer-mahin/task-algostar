import { useGetAllCategoriesQuery } from "../../../Redux/Api/baseApi";
import { useAppDispatch, useAppSelector } from "../../../Redux/hook";
import { setCategory, setSort } from "../../../Redux/productSlice";

const Filtering = () => {
  const { category, sort } = useAppSelector((state) => state.product);
  const { data: AllCategories } = useGetAllCategoriesQuery({});
  const dispatch = useAppDispatch();

  return (
    <div className="border h-fit p-4 rounded-xl shadow-lg lg:w-[300px]">
      <div>
        <h2 className="text-lg font-semibold pb-4">Category</h2>
        <label className="flex items-center gap-x-1">
          <input
            type="radio"
            defaultChecked
            onChange={() => dispatch(setCategory("All"))}
            checked={category === "All"}
          />
          All
        </label>

        {AllCategories?.map((item: string) => (
          <label className="flex items-center gap-x-1 capitalize">
            <input
              onChange={() => dispatch(setCategory(item))}
              type="radio"
              checked={category === item}
              value={item}
            />
            {item}
          </label>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold pb-2">Sort By</h2>
        <label className="flex items-center gap-x-1">
          <input
            type="radio"
            onChange={() => dispatch(setSort("asc"))}
            checked={sort === "asc"}
          />
          Ascending
        </label>
        <label className="flex items-center gap-x-1">
          <input
            type="radio"
            onChange={() => dispatch(setSort("desc"))}
            checked={sort === "desc"}
          />
          Descending
        </label>
      </div>
    </div>
  );
};

export default Filtering;
