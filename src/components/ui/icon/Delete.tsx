import { Trash } from "lucide-react";

type DeleteProps = {
  className: string;
};

const Delete = ({ className }: DeleteProps) => {
  return <Trash className={className} />;
};

export default Delete;
