import { Alert, AlertDescription } from "./ui/alert";

function ServerErrorAlert({ message }: { message: string }) {
  return (
    <Alert id="server-error" variant="destructive">
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}

export default ServerErrorAlert;
