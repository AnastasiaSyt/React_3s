export interface FormState {
  posts: TNewPost[];
  titleValue: string;
  titleError: string;
  dateValue: string;
  dateError: string;
  selectValue: string;
  selectError: string;
  checkboxValue: boolean;
  checkboxError: string;
  imageFile: File | null;
  imageError: string;
  isValid: boolean;
}

export interface TNewPost {
  id: number;
  imageCard: File;
  title: string;
  person_img: string;
  person: string;
  date: string;
}

export interface FormProps {
  titleRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  publishRef: React.RefObject<HTMLInputElement>;
  authorRef: React.RefObject<HTMLSelectElement>;
  fileRef: React.RefObject<HTMLInputElement>;
}
