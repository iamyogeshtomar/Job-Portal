import { useForm } from "react-hook-form";
import { Button } from "./ui/button";

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
    getValues,
  } = useForm();

  const submitHandler = () => {
    console.log(`Submit Button Working`);
    console.log(getValues("findJob"));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("findJob")}
          type="text"
          placeholder="Search the job you're looking for..."
        />
        <Button disabled={isSubmitting} type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};
export default SearchForm;
