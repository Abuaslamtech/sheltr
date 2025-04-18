
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Mail, Lock } from "lucide-react";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (isSignUp: boolean) => {
    setIsLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: isSignUp ? "Account created!" : "Welcome back!",
        description: isSignUp 
          ? "Your account has been created successfully."
          : "You have successfully logged in.",
      });
      navigate("/home");
    }, 1500);
  };

  return (
    <Tabs defaultValue="login" className="w-full max-w-md mx-auto">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>
      
      <TabsContent value="login" className="animate-fade-in">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                id="email" 
                type="email" 
                placeholder="your@email.com" 
                className="pl-10" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                className="pl-10" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          
          <Button 
            className="w-full mt-6 group" 
            disabled={isLoading}
            onClick={() => handleSubmit(false)}
          >
            Login 
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <div className="text-center text-sm text-muted-foreground mt-4">
            <a href="#" className="hover:text-kadestate-blue transition-colors">
              Forgot your password?
            </a>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="signup" className="animate-fade-in">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="signup-email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                id="signup-email" 
                type="email" 
                placeholder="your@email.com" 
                className="pl-10" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="signup-password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                id="signup-password" 
                type="password" 
                placeholder="••••••••" 
                className="pl-10" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          
          <Button 
            className="w-full mt-6 group" 
            disabled={isLoading}
            onClick={() => handleSubmit(true)}
          >
            Create Account
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <div className="text-center text-sm text-muted-foreground mt-4">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-kadestate-blue hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-kadestate-blue hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default AuthForm;
