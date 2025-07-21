import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};
export default function DialogModal({ open, setOpen }: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent side="bottom" align="center">
        <DialogHeader>
          <DialogTitle>My Modal Title</DialogTitle>
          <DialogDescription>This is a modal.</DialogDescription>
        </DialogHeader>
        {/* ... your modal content */}
      </DialogContent>
    </Dialog>
  );
}
