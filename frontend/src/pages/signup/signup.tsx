import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));



 
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    
    try{
      const res = await  axios.post("http://localhost:3000/api/v1/auth/register",formData
      )


      
        if(res.data.message=="User already exists")
          {
            return new Error("User Already Exists")
          }

     

        alert("Sign Up successful");
      
        navigate("/login");

    }
    catch(e)
    {
      alert("user Already Exist")
      console.log("user exist already")
    }
    
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img src="../../../public/logo1.png" alt="Acme Inc" width={48} height={48} className="mx-auto h-12 w-auto" />
          <h2 className="mt-6 text-center text-4xl font-bold tracking-tight text-foreground p-3">
            Sign up in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-2">
            <div>
              <Label htmlFor="username" className="sr-only">
                Username
              </Label>
              <Input
                id="username"
                name="username"
                type="text"
                required
                className="relative block w-full appearance-none rounded-t-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="email" className="sr-only">
                Email address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-t-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-b-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="font-light text-xs flex justify-end font-medium">
            Already have an account? <a className="text-blue-700 hover:text-blue-400 text-md px-2 cursor-pointer font-semibold" onClick={() => navigate('/login')}>Login</a>
          </div>
          <div>
            <Button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border-2 bg-primary py-2 px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:border-black dark:hover:border-white "
            >
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}