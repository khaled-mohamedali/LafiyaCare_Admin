import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import EmergencyPage from "./EmergencyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pharmaciesdegarde",
    element: <EmergencyPage />,
  },
]);

export default router;
