export interface TCardItem {
  id?: number;
  image?: string;
  tags: TTags[];
  title?: string;
  person_img?: string;
  person?: string;
  date?: string;
}

export interface TTags {
  tag: string;
  id: number;
}
