"use client";

import { createAccountAction } from "@/actions/user";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";



function CreateAccountPage(){
    const router = useRouter()
    const [isPending, startTransition] = useTransition();

    const handleClickCreateAccountButton = async (formData: FormData) => {
        startTransition(async () => {
            const { errorMessage } = await createAccountAction(formData);
            if(!errorMessage){
                router.replace('/');
                toast.success("Account created successfully\nYou are now logged in",{
                    duration: 5000,
                });
            }else{
                toast.error(errorMessage);
            }
        })
    }
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <h1 className={`text-center text-2xl font-bold text-indigo-600 sm:text-3xl ${isPending && "opacity-0"}`}>Get started today</h1>
                    
                    {isPending && (
                        <div className="text-primary absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-y-2">
                            <p>Creating Account...</p>
                            <Loader2 className="size-6 animate-spin"/>
                        </div>
                    )}
                    <form action={handleClickCreateAccountButton} className={`mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 ${isPending && "opacity-0"}`}>
                    <p className="text-center text-lg font-medium text-black">Sign in to your account</p>

                    <div>
                        <label  className="sr-only">Email</label>

                        <div className="relative">
                        <input
                            type="email"
                            name="email"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                            placeholder="Enter email"
                            disabled={isPending}
                        />

                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                            />
                            </svg>
                        </span>
                        </div>
                    </div>

                    <div>
                        <label  className="sr-only">Password</label>

                        <div className="relative">
                        <input
                            type="password"
                            name="password"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                            placeholder="Enter password"
                            disabled={isPending}
                        />

                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                            </svg>
                        </span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        Sign in
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        No account?
                        <a className="underline" href="#">Sign up</a>
                    </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateAccountPage;