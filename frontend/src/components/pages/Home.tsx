import SearchForm from "../SearchForm";

const SearchBar = () => {
  return (
    <div className="w-100% h-100%">
      <div className="flex flex-col gap-y-8 items-center justify-center">
        <main>
          <h1>Find your new job today</h1>
          <p>Thousands of jobs are waiting for you</p>
        </main>
        <SearchForm />
      </div>
    </div>
  );
};
export default SearchBar;
