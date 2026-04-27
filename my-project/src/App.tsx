import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { screens } from "./screens/manifest";
import ViewerLayout from "./app/viewer/components/ViewerLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/viewer" replace />} />
        <Route path="/viewer" element={<ViewerLayout screens={screens} />} />
      </Routes>
    </BrowserRouter>
  );
}
