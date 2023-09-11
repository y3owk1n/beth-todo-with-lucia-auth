import * as elements from "typed-html";

function ErrorAlert({ message }: { message: string }) {
  return <p class="text-red-500">{message}</p>;
}

export default ErrorAlert;
