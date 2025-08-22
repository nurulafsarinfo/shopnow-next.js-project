import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
    const [formData, setFormData ] = useState({email: '', password: ''})

    const handleChange = (e) => {
        const [ name, value ] = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name] : value
        }))

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await signIn("credentials", {
            email: form.email,
            password: form.password,
            redirect: false,
        });

        if(res.ok) {
            router.push('/checkout');
        }else{
            alert("Login failed");
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email"
            onChange={handleChange}/>

            <input type="password" placeholder="Password"
            onChange={handleChange}/>

            <button type="submit">Login</button>
        </form>
    )
}