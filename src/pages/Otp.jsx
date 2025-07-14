import { useRef, useState } from "react";
import SubmitButton from "../components/SubmitButton";
import { apiClient } from "../api/client";
import { useLocation } from "react-router";
import { useNavigate } from 'react-router';

export default function Otp() {
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email;

    const [isValid, setValid] = useState(true)
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value.replace(/[^0-9]/g, "");
        if (!value) return;
        console.log("value", value)
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            if (otp[index]) {
                const newOtp = [...otp];
                newOtp[index] = "";
                setOtp(newOtp);
            } else if (index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        }
    };

    const VerifyHandler = async () => {
        let code = otp.join('');

        let Verification = {
            email: email,
            verificationCode: code
        }

        try {
            const response = await apiClient.post("/verifyuser", Verification, {
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (response.data.success) {
                navigate("/login");
                setValid(true);
            }
            else {
                setValid(false)
            }
        } catch (error) {
            setValid(false)
        }
    }

    return (
        <>
            <section className="h-screen w-full bg-green-500">
                <div className="min-h-screen flex items-center justify-center px-4">
                    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                        <h2 className="text-2xl font-semibold text-center mb-2">OTP Verification</h2>
                        <p className="text-gray-600 text-center mb-6">Enter the 6-digit code sent to your email</p>

                        <form onSubmit={VerifyHandler} className="flex justify-center gap-2 mb-6">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                />
                            ))}
                        </form>
                        <div style={{ display: !isValid ? 'flex' : 'none', width: '100%', marginBottom: '10px' }}>
                            <p style={{
                                width: '100%',
                                fontSize: '14px',
                                fontStyle: 'italic',
                                color: 'maroon',
                                letterSpacing: '2px',
                                textAlign: 'center'
                            }} className='italics'>invalid Verification code</p>
                        </div>

                        <SubmitButton
                            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300 font-semibold"
                            title={"Verify"} onclick={VerifyHandler} />

                        <p className="text-center text-sm text-gray-500 mt-4">
                            Didn’t receive the code?{" "}
                            <a href="#" className="text-green-700 hover:underline">
                                Resend
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}