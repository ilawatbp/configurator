import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const updatePassword = async () => {
    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) setMsg(error.message);
    else setMsg("Password updated successfully!");
  };

  return (
    <div style={{ marginTop: 100, textAlign: "center" }}>
      <h2>Reset Password</h2>
      <input
        type="password"
        placeholder="New password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={updatePassword}>Update Password</button>
      <p>{msg}</p>
    </div>
  );
}