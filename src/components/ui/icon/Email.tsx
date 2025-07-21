import { Mail } from "lucide-react";

interface EmailProps {
  className?: string;
}

const Email = ({ className }: EmailProps) => {
  return <Mail className={className} />;
};

export default Email;
