"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Building,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  const params = useParams();
  const router = useRouter();

  // Route slug determines if form is 'login' or 'register'
  const slug = (params?.slug as string) || "login";
  const isLogin = slug === "login";

  // Form Field States
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    companyName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // Execute Login logic
      console.log("Logging in user:", {
        email: formData.email,
        password: formData.password,
      });
    } else {
      // Execute Register logic
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Registering user:", formData);
    }
  };

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-background text-foreground">
      {/* Left Column: Interactive Form Area */}
      <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-12 lg:p-16">
        
        {/* Top Header Navigation */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          
          <span className="text-xs text-muted-foreground">
            {isLogin ? "Need an account?" : "Already registered?"}{" "}
            <Link
              href={isLogin ? "/auth/register" : "/auth/login"}
              className="text-primary font-semibold hover:underline ml-1"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </Link>
          </span>
        </div>

        {/* Dynamic Auth Form */}
        <div className="max-w-md w-full mx-auto py-8">
          <motion.div
            key={slug}
            initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight text-foreground">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h1>
              <p className="text-sm text-muted-foreground">
                {isLogin
                  ? "Enter your credentials to access your organization portal."
                  : "Register your company to participate in the Quality Awards."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <AnimatePresence mode="popLayout">
                {!isLogin && (
                  <>
                    {/* Username */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-1.5"
                    >
                      <label className="text-xs font-semibold text-foreground">
                        User Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="text"
                          name="username"
                          required={!isLogin}
                          placeholder="e.g. john_doe"
                          value={formData.username}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                      </div>
                    </motion.div>

                    {/* Company Name */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-1.5"
                    >
                      <label className="text-xs font-semibold text-foreground">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="text"
                          name="companyName"
                          required={!isLogin}
                          placeholder="e.g. Acme Industries"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>

              {!isLogin && (
                /* Phone Number */
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1.5"
                >
                  <label className="text-xs font-semibold text-foreground">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="tel"
                      name="phone"
                      required={!isLogin}
                      placeholder="+251 911 000 000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </motion.div>
              )}

              {/* Password */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-foreground">
                    Password
                  </label>
                  {isLogin && (
                    <Link
                      href="/auth/forgot-password"
                      className="text-xs font-medium text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-10 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {!isLogin && (
                /* Confirm Password */
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1.5"
                >
                  <label className="text-xs font-semibold text-foreground">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      required={!isLogin}
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </motion.div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-all mt-2"
              >
                {isLogin ? "Sign In to Portal" : "Create Account"}
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Footer info */}
        <div className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} World Class Quality Award. All rights reserved.
        </div>
      </div>

      {/* Right Column: Hero Visual Overlay */}
      <div className="hidden lg:relative lg:col-span-6 lg:flex flex-col justify-between p-12 bg-[#071d33] text-white overflow-hidden">
        <Image
          src="https://staff.worldclassqualityaward.com/uploads/photo_2023_08_19_22_39_21_5b3b60a6de.jpg"
          alt="Auth Backdrop"
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#071d33] via-[#071d33]/60 to-transparent" />

        <div className="relative z-10">
          <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-semibold">
            Institutional Portal
          </span>
        </div>

        <div className="relative z-10 space-y-6 max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight leading-tight">
            Recognizing Excellence across National & Global Sectors
          </h2>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>Certified Multi-stage Evaluation Benchmarks</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
              <span>Transparent Governance and Auditing Controls</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-xs text-gray-400">
          Empowering organizations towards international quality standards.
        </div>
      </div>
    </main>
  );
}