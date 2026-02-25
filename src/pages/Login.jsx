import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo icon.png";

export default function Login() {
    const [mode, setMode] = useState("login"); // "login" | "register"
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();


    const submit = async (e) => {
        e.preventDefault();
        setMsg("");
        setLoading(true);

        try {
            if (mode === "register") {
                const { error } = await supabase.auth.signUp({ email, password });
                if (error) throw error;
                setMsg("Registered! You can now log in. (If email confirm is ON, check your email.)");
            } else {
                const { error } = await supabase.auth.signInWithPassword({ email, password });
                if (error) throw error;
                setMsg("Logged in!");
                navigate("/");
            }
        } catch (err) {
            setMsg(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    const resetPassword = async () => {
        if (!email) return alert("Enter your email first");

        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: "https://ilawconfigurator.app/reset-password",
        });

        if (error) alert(error.message);
        else alert("Password reset email sent!");
    };

    return (
        <>
            <div className="fixed w-full h-auto p-8">
                <img className="margin-auto w-[50px]" src={logo} alt="icon" />
            </div>
            <div className="min-h-[100dvh] w-screen bg-white 
                            flex justify-between items-center flex-col
        ">

                <h1 className="font-bold text-[50px] mt-20">CONFIGURATOR</h1>
                <div className="w-5/6 lg:w-1/3 rounded-2xl p-4 mb-32
                            flex flex-col justify-center items-center
                        ">
                    {/* <h2 className="mb-4">
                    {mode === "login" ? "Login" : "Create account"}
                </h2> */}

                    <form onSubmit={submit} className="flex flex-col gap-4 w-full">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border border-black rounded-3xl px-4 h-10 w-full"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            minLength={6}
                            required
                            className="border border-black rounded-3xl px-4 h-10 lg:w-full"
                        />

                        <button disabled={loading} className="bg-[#3db44c] text-white h-12 rounded-2xl px-2 ">
                            {loading ? "Please wait..." : mode === "login" ? "Login" : "Register"}
                        </button>
                        <button onClick={resetPassword}>
                            Forgot Password?
                        </button>
                    </form>



                    {msg && <p style={{ marginTop: 12 }}>{msg}</p>}
                </div>
                <div >
                    <button
                        type="button"
                        onClick={() => setMode(mode === "login" ? "register" : "login")}
                    >
                        {mode === "login" ? "No account? Register" : "Already have an account? Login"}
                    </button>
                </div>
            </div>
        </>
    );
}