"use client";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
    const [ form, setForm ] = useState({ name: "", email: "", password: "" });
    const router = useRouter();

    const handlechange = (e) => {
        const { name, value } = e.target;
        setForm((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    async function handleSubmit(e) {
        e.preventDefault();
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify(form),
        });

        if(res.ok) {
            router.push("/login");
        }else {
            alert('Signup failed');
        }
    }  


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" onChange={handlechange}/>

            <input type="email" placeholder="Email" onChange={handlechange}/>

            <input type="password" placeholder="Password" onChange={handlechange}/>

            <button type="submit">Sign Up</button>

        </form>
    )
}