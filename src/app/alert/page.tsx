import React from "react";
import {
  Alert as AlertShadcn,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function Alert() {
  return (
    <AlertShadcn>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </AlertShadcn>
  );
}
