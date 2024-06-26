import { candidateSignUpSchema, candidateSignUpSchemaType } from "@/lib/types";
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
import { useAppDispatch } from "@/state/store";
import { registerCandidateThunk } from "@/state/candidate/candidateSlice";

const CandidateSignUp = () => {
  const dispatch = useAppDispatch();

  // react hook form utilities
  const form = useForm<candidateSignUpSchemaType>({
    resolver: zodResolver(candidateSignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      institute: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = (data: candidateSignUpSchemaType) => {
    console.log({ data });
    dispatch(registerCandidateThunk(data));
  };

  return (
    <main className="flex flex-col min-h-screen justify-between items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-4"
        >
          {/* Name field form */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter name" type="text" {...field} />
                  </FormControl>
                  {/* <FormMessage>Enter Name</FormMessage> */}
                </FormItem>
              );
            }}
          />
          {form.formState.errors.name && (
            <p className="text-red-500">Name can't be blank</p>
          )}
          {/* email field  form */}
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

          {/* institute field form */}
          <FormField
            control={form.control}
            name="institute"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Institute</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter institute name"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormMessage>Enter Institute</FormMessage> */}
                </FormItem>
              );
            }}
          />
          {/* phone field form */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter phone number"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormMessage>Enter Phone Number</FormMessage> */}
                </FormItem>
              );
            }}
          />
          {/* password field form */}
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
                  {/* <FormMessage>Enter Password</FormMessage> */}
                </FormItem>
              );
            }}
          />
          {/* confirm password field form */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirm Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormMessage>Please confirm password</FormMessage> */}
                </FormItem>
              );
            }}
          />
          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            Submit
          </Button>
        </form>
      </Form>
    </main>
  );
};
export default CandidateSignUp;
