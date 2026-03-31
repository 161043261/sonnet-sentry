import { Loader2 } from "lucide-react";

export function Spinner() {
  return (
    <div className="flex justify-center items-center my-4">
      <Loader2 className="animate-spin h-8 w-8 text-blue-500" />
    </div>
  );
}
