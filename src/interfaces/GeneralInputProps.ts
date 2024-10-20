export default interface GeneralInputProps {
  type: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;  // Add onBlur
  options?: string[];
  name: string;
  required?: boolean;
  placeHolder?: string;
  error?: string;
  touched?: boolean;
}
