import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertBox({message}) {
	return (
		<Alert
			variant="destructive"
			className="relative flex flex-col max-w-fit bg-white text-destructive border-destructive justify-center m-1 p-4 border-none sm:slide-in-from-right-96 animate-in sm:ml-auto">
			<div className="flex flex-row gap-2">
				<AlertCircle className="h-4 w-4" />
				<AlertTitle>Error</AlertTitle>
			</div>

			<AlertDescription>{message}</AlertDescription>
		</Alert>
	);
}
