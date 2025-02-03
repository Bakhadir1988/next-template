type SubmitButtonProps = {
  children: React.ReactNode;
};

export default function SubmitButton({ children }: SubmitButtonProps) {
  return <button type="submit">{children}</button>;
}
