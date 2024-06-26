import { Link } from "react-router-dom";
import { Button, buttonVariants } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
// import { useAppSelector } from "@/state/store";

const Header = () => {

  return (
    <header className="flex min-h-[18vh] justify-around items-center border-solid border-red-500 border-2">
      <h1>Job Portal</h1>
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <Link className={buttonVariants({ variant: "ghost" })} to="/">
              Start a search
            </Link>
          </li>
          <li>
            <Link className={buttonVariants({ variant: "ghost" })} to="#">
              My Jobs
            </Link>
          </li>
          <li>
            <Link className={buttonVariants({ variant: "ghost" })} to="#">
              Salary Estimate
            </Link>
          </li>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <li>
                <Link
                  className={buttonVariants({ variant: "outline" })}
                  to="/hire"
                >
                  Post Jobs
                </Link>
              </li>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="cursor-pointer">
                New Employer
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="cursor-pointer">
                Existing Employer
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </ul>
      </nav>
      <div className="account flex gap-6">
        <Button variant={`outline`} asChild>
          <Link to="/login">Login</Link>
        </Button>
        <Button asChild>
          <Link to="/signup">Sign Up</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
