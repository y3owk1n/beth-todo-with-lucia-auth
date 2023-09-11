function ErrorAlert({ message }: { message: string }) {
  return (
    <p id="error-message" class="text-red-500">
      {message}
    </p>
  );
}

export default ErrorAlert;
