export default interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  steps: { title: string; content: React.ReactNode }[];
  step1Valid?: () => boolean;
  step2Valid?: () => boolean;
  onSubmit?: (e:  React.FormEvent<HTMLFormElement>) => void;
}