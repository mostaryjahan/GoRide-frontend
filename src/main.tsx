import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { router } from "./routes";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "./providers/theme.provider.tsx";
// import { Toaster } from "sonner";
import { store } from "./redux/store.ts";
import { Toaster } from "react-hot-toast";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#fff",
              color: "#000000",
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: "#4ade80",
                secondary: "#fff",
              },
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
      </ThemeProvider>
    </ReduxProvider>
  </StrictMode>
);
