import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import config from "@/config";
import { cn } from "@/lib/utils";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters")
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const navigate = useNavigate();
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange", 
  });
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await login(data).unwrap();

      if (res.success) {
        // Store token if provided
        if (res.data?.token) {
          localStorage.setItem("token", res.data.token);
        }

        toast.success("Logged in successfully");

        // Redirect based on user role
        const userRole = res.data.user.role;
        if (userRole === "ADMIN") {
          navigate("/admin/dashboard");
        } else if (userRole === "DRIVER") {
          navigate("/driver/dashboard");
        } else if (userRole === "RIDER") {
          navigate("/rider/dashboard");
        } else {
          navigate("/");
        }
      } else {
        toast.error("Login failed - no token received");
      }
    } catch (err: unknown) {
      console.error(err);

      const error = err as { data?: { message?: string }; status?: number };

      if (error?.data?.message === "Password does not match") {
        toast.error("Invalid credentials");
      } else if (error?.data?.message === "Missing credentials") {
        toast.error("Please fill in all required fields");
      } else if (error?.status === 401) {
        toast.error("Invalid email or password");
      } else {
        toast.error("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold text-black">Login to your account</h1>
        <p className="text-balance text-sm text-gray-600">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6 text-gray-800 dark:text-gray-800">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your@email.com"
                      {...field}
                      value={field.value || ""}
                      
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="********"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Form>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 px-2 text-gray-600">
            Or continue with
          </span>
        </div>

        {/*//* http://localhost:5000/api/v1/auth/google */}
        <Button
          onClick={() => window.open(`${config.baseUrl}/auth/google`)}
          type="button"
          // variant="outline"
          className="w-full cursor-pointer border-2 border-gray-800 bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Login with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/register" replace className="underline underline-offset-4">
          Register
        </Link>
      </div>
    </div>
  );
}