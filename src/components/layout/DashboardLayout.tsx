import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useUserInfoQuery, useLogoutMutation } from "@/redux/features/auth/auth.api";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { User, LogOut, Settings } from "lucide-react";
import Logo from "@/assets/icons/Logo";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggler";

import { getSidebarItems } from "@/utils/getSidebarItems";
import LoadingSpinner from "../LoadingSpinner";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { data: userInfo, isLoading } = useUserInfoQuery({});
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logout({}).unwrap();
    } catch (error) {
      console.log(error)
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.clear();
      
      toast.success("Logged out successfully");
      navigate("/");
    }
  };

  if (isLoading) {
    return <LoadingSpinner/>;
  }

  const user = userInfo?.data;
  const sidebarItems = getSidebarItems(user?.role);

    if (user && !user.isVerified ) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black p-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Account Not Verified</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Your account is currently not verified. Please check your email for a verification link to activate your account.
            </p>
            <Button 
              variant="default" 
              onClick={() => navigate('/')} 
              className="w-full"
            >
              Go to Home
            </Button>
          </div>
        </div>
      );
      }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black flex">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-black shadow-sm border-r">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2">
            <Logo /> <span className="text-foreground font-semibold text-xl ">GoRide</span>
          </Link>
        </div>
        
        <nav className="mt-4">
          <div className="px-3">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-md mb-1 transition-colors",
                    isActive
                      ? "bg-primary text-white"
                      : "text-muted-foreground hover:bg-gray-100 hover:text-gray-900"
                  )}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white dark:bg-black shadow-sm border-b">
          <div className="px-6">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-xl font-semibold text-foreground">
                {user?.role} Dashboard
              </h1>
              
              <div className="flex items-center space-x-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{user?.name}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link to={`/${user?.role.toLowerCase()}/profile`} className="flex items-center">
                        <Settings className="h-4 w-4 mr-2" />
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <ModeToggle/>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
}