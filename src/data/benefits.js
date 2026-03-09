import { Shield, Zap, Activity, Lock } from "lucide-react";

export const SOC2_BENEFITS = [
  {
    title: "Building Customer Trust",
    desc: "Demonstrate that your company safeguards sensitive data and information.",
    icon: <Shield className="w-8 h-8 text-primary" />,
  },
  {
    title: "Accelerate Sales Cycles",
    desc: "Reduce security questionnaires and win enterprise clients faster.",
    icon: <Zap className="w-8 h-8 text-amber-500" />,
  },
  {
    title: "Gain Competitive Edge",
    desc: "Stand out from competitors by showcasing independent attestation.",
    icon: <Activity className="w-8 h-8 text-emerald-500" />,
  },
  {
    title: "Improve Security Posture",
    desc: "Identify and fix gaps between system, policy and process.",
    icon: <Lock className="w-8 h-8 text-rose-500" />,
  },
];
