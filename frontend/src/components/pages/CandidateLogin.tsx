import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  // FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { candidateLoginSchema, candidateLoginSchemaType } from "@/lib/types";
import { useAppDispatch } from "@/state/store";
import { loginCandidateThunk } from "@/state/candidate/candidateSlice";
import { toast } from "sonner";

const CandidateLogin = () => {
  const dispatch = useAppDispatch();

  // react-hook-form utilities
  const form = useForm<candidateLoginSchemaType>({
    resolver: zodResolver(candidateLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (data: candidateLoginSchemaType) => {
    // console.log(data);
    dispatch(loginCandidateThunk(data))
      .unwrap()
      .then((data) => {
        console.log(data);
        toast.success("Login Successfull!");
      }).catch((error) => {
        console.log(error.response.data.message)
        toast.error (`${error.json.message}`)
      });
    // form.reset();
  };

  return (
    <main className="flex flex-col min-h-screen justify-between items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter email" type="email" {...field} />
                  </FormControl>
                  {/* <FormMessage>Enter Email id</FormMessage> */}
                </FormItem>
              );
            }}
          />
          {form.formState.errors.email && (
            <p className="text-red-500">email cannot be empty</p>
          )}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormMessage>Enter Email id</FormMessage> */}
                </FormItem>
              );
            }}
          />
          {form.formState.errors.email && (
            <p className="text-red-500">Please enter a valid password</p>
          )}
          <Button
            className="w-full"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            Login
          </Button>
        </form>
      </Form>
    </main>
  );
};
export default CandidateLogin;
