import { Server, Link as LinkIcon, Database, CheckCircle2, Activity, RefreshCw } from "lucide-react";

export const INTEGRATION_ITEMS = [
  { name: "AWS", icon: <Server className="w-8 h-8" /> },
  { name: "GitHub", icon: <LinkIcon className="w-8 h-8" /> },
  { name: "MongoDB", icon: <Database className="w-8 h-8" /> },
  { name: "Okta", icon: <CheckCircle2 className="w-8 h-8" /> },
  { name: "Datadog", icon: <Activity className="w-8 h-8" /> },
  { name: "Slack", icon: <RefreshCw className="w-8 h-8" /> },
  { name: "Azure", icon: <Server className="w-8 h-8" /> },
  { name: "GitLab", icon: <LinkIcon className="w-8 h-8" /> },
];
