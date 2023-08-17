"use client";

import {useRouter} from "next/navigation";
import Link from "next/link";

import axios from "axios";
import {FormEvent, useRef, useState} from "react";

interface Userdata {
    username: string;
    password: string;
}

export default function SignUpPage() {


    const [userData, setUserData] = useState<Userdata>({
        username: "",
        password: ""
    });

    const formRef = useRef<HTMLFormElement | null>(null);
    const signUp = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(formRef?.current!);
        console.log(formData);
        console.table(formData);
    };

    return (
        <div className='h-screen grid place-content-center'>
            <h1 className="font-semibold text-4xl text-center my-6">Sign Up</h1>
            <form ref={formRef} onSubmit={signUp} className="flex flex-col gap-4 max-w-5xl">
                <div className="flex flex-col gap-2">
                    <label>Username</label>
                    <input id="username" type="text" className="text-black"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label>Password</label>
                    <input id="password" type="password" className="text-black"/>
                </div>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
};