import { RefreshCw, FileCheck, Lock, Shield } from "lucide-react";

export const SOC2_FEATURES = [
  {
    title: "Continuous Monitoring",
    description:
      "Automated checks run daily against your cloud, code, and HR systems to ensure your SOC 2 controls are always passing.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-24 rounded-xl bg-linear-to-br from-primary/5 to-primary/10 border border-primary/20 flex items-center justify-center">
        <RefreshCw className="w-10 h-10 text-primary" />
      </div>
    ),
    icon: <RefreshCw className="h-4 w-4 text-primary" />,
    className: "md:col-span-2",
  },
  {
    title: "Policy Management",
    description:
      "Pre-built templates for all SOC 2 required policies. Easily distribute and track employee acceptance.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-24 rounded-xl bg-linear-to-br from-emerald-50 to-emerald-100 border border-emerald-200 flex items-center justify-center">
        <FileCheck className="w-10 h-10 text-emerald-500" />
      </div>
    ),
    icon: <FileCheck className="h-4 w-4 text-emerald-600" />,
    className: "md:col-span-1",
  },
  {
    title: "Access Reviews",
    description:
      "Automatically map user access across your systems and perform recurring SOC 2 access reviews effortlessly.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-24 rounded-xl bg-linear-to-br from-amber-50 to-amber-100 border border-amber-200 flex items-center justify-center">
        <Lock className="w-10 h-10 text-amber-500" />
      </div>
    ),
    icon: <Lock className="h-4 w-4 text-amber-600" />,
    className: "md:col-span-1",
  },
  {
    title: "Risk & Vendor Management",
    description:
      "Identify risks, assess vendors, and gather evidence required for SOC 2 Type II audits.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-24 rounded-xl bg-linear-to-br from-rose-50 to-rose-100 border border-rose-200 flex items-center justify-center">
        <Shield className="w-10 h-10 text-rose-500" />
      </div>
    ),
    icon: <Shield className="h-4 w-4 text-rose-600" />,
    className: "md:col-span-2",
  },
];
