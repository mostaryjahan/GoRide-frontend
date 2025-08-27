"use client"

import { useState } from "react"
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useUserInfoQuery, useLogoutMutation } from "@/redux/features/auth/auth.api"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, LogOut, Settings, Menu } from "lucide-react"
import Logo from "@/assets/icons/Logo"
import toast from "react-hot-toast"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./ModeToggler"
import { getSidebarItems } from "@/utils/getSidebarItems"
import LoadingSpinner from "../LoadingSpinner"

export default function DashboardLayout({ children }: { children?: React.ReactNode }) {
  const { data: userInfo, isLoading } = useUserInfoQuery({})
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (isLoading) return <LoadingSpinner />

  const user = userInfo?.data
  const sidebarItems = getSidebarItems(user?.role)

  const handleLogout = async () => {
    try {
      await logout({}).unwrap()
      localStorage.removeItem("token")
      toast.success("Logged out successfully")
      navigate("/")
    } catch (err) {
      toast.error("Logout failed")
      console.error(err)
    }
  }

  const currentItem = sidebarItems.find((item) => location.pathname.startsWith(item.href))

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-black">
      {/* Sidebar for md+ */}
      <aside className={cn("w-64 bg-white dark:bg-black shadow-sm border-r hidden md:flex flex-col")}>
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
            <span className="text-foreground font-semibold text-xl">GoRide</span>
          </Link>
        </div>
        <nav className="mt-4 flex-1 overflow-y-auto">
          <div className="px-3">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
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
              )
            })}
          </div>
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="absolute left-0 top-0 w-64 h-full bg-white dark:bg-black shadow-lg z-50 p-6">
            <div className="flex justify-between items-center mb-6">
              <Link to="/" className="flex items-center gap-2">
                <Logo />
                <span className="text-foreground font-semibold text-xl">GoRide</span>
              </Link>
              <Button variant="ghost" onClick={() => setSidebarOpen(false)}>
                ✕
              </Button>
            </div>
            <nav>
              {sidebarItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className="flex items-center px-3 py-2 text-sm font-medium rounded-md mb-1 text-muted-foreground hover:bg-gray-100 hover:text-gray-900"
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white dark:bg-black shadow-sm border-b px-4 py-3 flex items-center justify-between md:justify-end">
          <div className="flex items-center space-x-4 md:hidden">
            <Button variant="ghost" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
            {currentItem && <span className="text-foreground font-semibold">{currentItem.label}</span>}
          </div>
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
                    <Settings className="h-4 w-4 mr-2" /> Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ModeToggle />
          </div>
        </header>

        <main className="flex-1 p-6">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  )
}
