"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  UserCheck,
  BarChart3,
  Factory,
  History,
  FileText,
  MapPin,
  ClipboardCheck,
  Plus,
  Trash2,
  Upload,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
} from "lucide-react";

// Section Tab Definitions
const SECTIONS = [
  { id: 1, name: "Organization", icon: Building2 },
  { id: 2, name: "Official Info", icon: UserCheck },
  { id: 3, name: "Size & Scale", icon: BarChart3 },
  { id: 4, name: "Industry Sector", icon: Factory },
  { id: 5, name: "Application History", icon: History },
  { id: 6, name: "Profile Narrative", icon: FileText },
  { id: 7, name: "Branch Locations", icon: MapPin },
  { id: 8, name: "Eligibility", icon: ClipboardCheck },
];

export default function ProfileFormPage() {
  const [activeStep, setActiveStep] = useState(1);

  // Dynamic Branch Management State
  const [branches, setBranches] = useState([
    { id: 1, name: "Headquarters", address: "", employees: "", assets: "", products: "" },
  ]);

  const addBranch = () => {
    setBranches([
      ...branches,
      { id: Date.now(), name: `Branch ${branches.length + 1}`, address: "", employees: "", assets: "", products: "" },
    ]);
  };

  const removeBranch = (id: number) => {
    if (branches.length > 1) {
      setBranches(branches.filter((b) => b.id !== id));
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Title Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Building2 className="w-80 h-80 text-amber-400" />
          </div>
          <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            Registration Form / የምዝገባ ማመልከቻ
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight mt-2">
            Applicant Organization Profile
          </h1>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            Complete the multi-step questionnaire for evaluation and eligibility verification.
          </p>
        </div>

        {/* Interactive Step Progress Navigation */}
        <nav aria-label="Progress Bar" className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm overflow-x-auto">
          <ol role="list" className="flex items-center min-w-max space-x-2 sm:space-x-4">
            {SECTIONS.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              const isCompleted = activeStep > step.id;

              return (
                <li key={step.id} className="flex items-center">
                  <button
                    onClick={() => setActiveStep(step.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                        : isCompleted
                        ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                        : "text-slate-500 hover:bg-slate-100"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{step.id}. {step.name}</span>
                    {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 ml-1" />}
                  </button>
                  {step.id < SECTIONS.length && (
                    <div className="w-4 h-px bg-slate-200 mx-1" />
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Dynamic Multi-Step Form */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* STEP 1: Applicant Organization */}
              {activeStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">1. Applicant Organization</h2>
                    <p className="text-xs text-slate-500">አመልካቹ ድርጅት</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Organization Name / ስም <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter organization full name"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address / ኢሜል
                      </label>
                      <input
                        type="email"
                        disabled
                        value="bogitechsolutions@gmail.com"
                        className="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-500 cursor-not-allowed"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Address / አድራሻ <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Region, City, Sub-city, Woreda"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Numbers / ስልክ ቁጥር <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+251 911 000 000"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Highest-Ranking Official */}
              {activeStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">2. Highest-Ranking Official</h2>
                    <p className="text-xs text-slate-500">የድርጅቱ ከፍተኛ ባለስልጣን</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Name / ስም</label>
                      <input type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Designation / ማእረግ</label>
                      <input type="text" placeholder="e.g. Chief Executive Officer" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Official Email / ኢሜል</label>
                      <input type="email" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Telephone Number / ስልክ ቁጥር</label>
                      <input type="tel" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Address / አድራሻ</label>
                      <input type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500" />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Size and Location */}
              {activeStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">3. Size and Location of the Applicant</h2>
                    <p className="text-xs text-slate-500">የድርጅቱ ደረጃ/መጠን እና ድርጅቱ የሚገኝበት ቦታ</p>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-xs font-semibold text-slate-800">
                      (A) Asset size in Ethiopian Birr for preceding fiscal year / ባለፈው በጀት አመት ድርጅቱ በብር የሚገለጽ ሃብት
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {[
                        "≤ 3 Million ETB",
                        "> 3 M but ≤ 15 Million ETB",
                        "> 15 M but ≤ 100 Million ETB",
                        "> 100 Million ETB",
                      ].map((range, idx) => (
                        <label key={idx} className="flex items-center gap-3 p-3.5 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                          <input type="radio" name="asset_size" className="w-4 h-4 text-amber-500 focus:ring-amber-500" />
                          <span className="text-xs font-medium text-slate-700">{range}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Branches in Ethiopia / በኢትዮጵያ ያሉ ቅርንጫፎች</label>
                      <input type="number" min="0" defaultValue="1" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Overseas Branches / ከኢትዮጵያ ውጭ ያሉ ቅርንጫፎች</label>
                      <input type="number" min="0" defaultValue="0" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Total Employees / ጠቅላላ የሰራተኞች ብዛት</label>
                      <input type="number" min="1" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Employees in Ethiopia / ኢትዮጵያ ውስጥ ያሉ ሰራተኞች</label>
                      <input type="number" min="1" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">% of Assets in Ethiopia / ኢትዮጵያ ውስጥ ያለው ሃብት (%)</label>
                      <input type="number" min="0" max="100" placeholder="e.g. 100%" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500" />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Industry Categories */}
              {activeStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">4. Type of Industry</h2>
                    <p className="text-xs text-slate-500">የኢንዱስትሪ አይነት (Select all applicable / የሚመለከታቸውን ይምረጡ)</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {[
                      "Manufacturing / አምራች",
                      "Education / ትምህርት",
                      "Construction / ኮንስትራክሽን",
                      "Service / አገልግሎት",
                      "Healthcare / ጤና",
                      "Banking & Transport",
                      "Business & Trading",
                      "Agriculture / እርሻ",
                      "Governmental / የመንግስት",
                      "Private / የግል",
                      "Small Business",
                      "Large Industry",
                      "For-Profit",
                      "Non-Profit",
                    ].map((item, idx) => (
                      <label key={idx} className="flex items-center gap-2.5 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                        <input type="checkbox" className="w-4 h-4 rounded text-amber-500 focus:ring-amber-500" />
                        <span className="text-xs font-medium text-slate-700">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 5: Application History */}
              {activeStep === 5 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">5. Application History</h2>
                    <p className="text-xs text-slate-500">ቀደምት የማመልከቻ ታሪክ</p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm font-medium text-slate-800">
                      Has your organization previously submitted an Eligibility and Registration Form? / ድርጅቱ ከአሁን በፊት የምዝገባ ማመልከቻ አቅርቦ ያውቃልን?
                    </p>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="prev_app" className="w-4 h-4 text-amber-500" />
                        <span className="text-sm font-semibold text-slate-700">YES / አዎ</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="prev_app" defaultChecked className="w-4 h-4 text-amber-500" />
                        <span className="text-sm font-semibold text-slate-700">NO / አልቀረበም</span>
                      </label>
                    </div>

                    <div className="pt-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        If YES, specify Year & Award details / አዎ ከሆነ አመቱን እና ዝርዝሩን ይግለጹ
                      </label>
                      <input type="text" placeholder="e.g. Registered in 2021" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500" />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 6: Organizational Profile Textareas */}
              {activeStep === 6 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">6. Organizational Profile</h2>
                    <p className="text-xs text-slate-500">ድርጅታዊ መግለጫ (Concise summaries of key factors)</p>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        (a) Vision and Mission Statements / የራዕይና ተልእኮ መግለጫዎች
                      </label>
                      <textarea rows={3} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-amber-500" />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        (b) Main products, services, and markets served / ዋና ምርቶች፣ አገልግሎቶችና ገበያዎች
                      </label>
                      <textarea rows={3} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-amber-500" />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        (c) Key customers / users / ዋና ዋና ደንበኞች
                      </label>
                      <textarea rows={2} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-amber-500" />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        (d) Key suppliers / partners / ቁልፍ አቅራቢዎችና ሸሪኮች
                      </label>
                      <textarea rows={2} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-amber-500" />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 7: Branch Site Table Component */}
              {activeStep === 7 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">7. Branch & Site Listings</h2>
                      <p className="text-xs text-slate-500">የቅርንጫፎች ስም ዝርዝርና መግለጫዎች</p>
                    </div>
                    <button
                      type="button"
                      onClick={addBranch}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Branch
                    </button>
                  </div>

                  <div className="space-y-4">
                    {branches.map((branch, index) => (
                      <div key={branch.id} className="p-4 border border-slate-200 rounded-2xl bg-slate-50/50 space-y-3 relative">
                        <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                          <span className="text-xs font-bold text-amber-600 uppercase">
                            #{index + 1} {branch.name}
                          </span>
                          {branches.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeBranch(branch.id)}
                              className="text-red-500 hover:text-red-700 text-xs font-medium inline-flex items-center gap-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" /> Remove
                            </button>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                          <div className="md:col-span-2">
                            <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">Address (Region, City, Sub-city, Woreda)</label>
                            <input type="text" placeholder="Full address" className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs" />
                          </div>
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">Employees</label>
                            <input type="number" min="0" placeholder="Count" className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs" />
                          </div>
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">Asset Size (ETB)</label>
                            <input type="text" placeholder="Value in Birr" className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs" />
                          </div>
                          <div className="md:col-span-4">
                            <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">Products / Services Offered</label>
                            <input type="text" placeholder="List key products" className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 8: Eligibility & Document Upload */}
              {activeStep === 8 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">8. Eligibility Information & Document Verification</h2>
                    <p className="text-xs text-slate-500">የመወዳደር ብቁነትን ለመወሰን አስፈላጊ የሆኑ መረጃዎች</p>
                  </div>

                  <div className="space-y-6">
                    {/* Legal Existence */}
                    <div className="p-4 border border-slate-200 rounded-xl space-y-2">
                      <p className="text-xs font-semibold text-slate-800">
                        Operational for at least 3 years? / ቢያንስ ላለፉት ሶስት አመታት በስራ ላይ ነበርን?
                      </p>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="elig_3yrs" defaultChecked className="w-4 h-4 text-amber-500" />
                          <span className="text-xs font-semibold">YES / አዎ</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="elig_3yrs" className="w-4 h-4 text-amber-500" />
                          <span className="text-xs font-semibold">NO / አይደለም</span>
                        </label>
                      </div>
                    </div>

                    {/* Org Chart File Upload Component */}
                    <div className="p-6 border-2 border-dashed border-slate-300 rounded-2xl text-center hover:border-amber-500 transition-colors bg-slate-50/50">
                      <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                      <h4 className="text-xs font-bold text-slate-800">Attach Organizational Chart</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">ድርጅታዊ መዋቅር ተያያዞ ይቅረብ (PDF, PNG, JPG up to 10MB)</p>
                      <input type="file" id="chart-upload" className="hidden" />
                      <label
                        htmlFor="chart-upload"
                        className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-950 rounded-xl text-xs font-bold cursor-pointer hover:bg-amber-400 transition-colors"
                      >
                        Upload Document
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Form Step Controls */}
          <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-between">
            <button
              type="button"
              disabled={activeStep === 1}
              onClick={() => setActiveStep((prev) => Math.max(prev - 1, 1))}
              className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold border border-slate-200 transition-colors ${
                activeStep === 1
                  ? "opacity-50 cursor-not-allowed bg-slate-100 text-slate-400"
                  : "bg-white hover:bg-slate-50 text-slate-700"
              }`}
            >
              <ChevronLeft className="w-4 h-4" /> Previous Section
            </button>

            {activeStep < SECTIONS.length ? (
              <button
                type="button"
                onClick={() => setActiveStep((prev) => Math.min(prev + 1, SECTIONS.length))}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 transition-all shadow-md shadow-amber-500/20"
              >
                Next Section <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-8 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-all shadow-md shadow-emerald-600/20"
              >
                Submit Profile Form
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}