"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
	const router = useRouter();
	const { data: session, status } = useSession(); // ✅ Fix: Destructure session data properly

	// ✅ Redirect user after successful login
	useEffect(() => {
		if (status === "authenticated") {
			alert("Login successful! Redirecting...");
			router.push("/");
		}
	}, [status, router]); // ✅ Fix: Properly tracking authentication status

	const handleSocialLogin = (providerName) => {
		signIn(providerName); // ✅ Fix: No need to handle result manually
	};

	return (
		<div className="flex justify-center items-center gap-3">
			{/* Google Login */}
			<button onClick={() => handleSocialLogin("google")} className="btn btn-circle btn-lg">
				<svg className="rounded-full" aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<g>
						<path d="m0 0H512V512H0" fill="#fff"></path>
						<path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
						<path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
						<path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
						<path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
					</g>
				</svg>
			</button>

			{/* GitHub Login */}
			<button onClick={() => handleSocialLogin("github")} className="btn btn-circle btn-lg">
				<FaGithub className="text-blue-700" />
			</button>
		</div>
	);
};

export default SocialLogin;
