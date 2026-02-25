import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import WaitingApproval from "./pages/WaitingApproval";
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import ResetPassword from "./pages/ResetPassword";

import Login from "./pages/Login";
import "./App.css";

import Configurator from "./pages/Configurator";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const [approved, setApproved] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkApproval = async () => {
      if (!user) return;

      const { data: profile } = await supabase
        .from("profiles")
        .select("approved")
        .eq("id", user.id)
        .single();

      setApproved(profile?.approved ?? false);
      setChecking(false);
    };

    if (user) checkApproval();
    else setChecking(false);
  }, [user]);

  if (loading || checking) return <div>Loading...</div>;

  if (!user) return <Navigate to="/login" />;

  if (!approved) return <WaitingApproval />;

  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Configurator />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}