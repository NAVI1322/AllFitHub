import { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const res = await axios.post("http://localhost:3000/api/v1/auth/login", {
          email: email,
          password: password
        });
  
        if (res.data.message === "Invalid Email or password") {
            setErrorMessage("Invalid ");
          throw new Error("Invalid Email or password");
          
        }
  
        const token = res.data.token;
        const userId = res.data.id;
  
        alert("Sign In successfully");
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        navigate("/home");
        
      } catch (error) {
        alert("invalid User");
        console.log("Error:", error);
      }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img src="/placeholder.svg" alt="Acme Inc" width={48} height={48} className="mx-auto h-12 w-auto" />
          <h2 className="mt-6 text-center text-4xl font-bold tracking-tight text-foreground p-3 ">
            Login to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-2">
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
                value={email}
                onChange={handleChange}
                className="relative block w-full appearance-none rounded-t-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="Email address"
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
                value={password}
                onChange={handleChange}
                className="relative block w-full appearance-none rounded-b-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="font-light text-xs flex justify-end">
            Don't have an account? <a className="text-blue-700 hover:text-blue-400 text-md px-2 cursor-pointer" onClick={() => navigate('/signup')}>Sign up</a>
          </div>
         
          <div>
            <Button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function setErrorMessage(message: any) {
    throw new Error('Function not implemented.');
}
