export interface ILinks {
  download: string;
  download_location: string;
  html: string;
  self: string;
}

export interface ITag {
  title: string;
  type: string;
}

export interface IUrls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}

export interface IUserLinks {
  followers: string;
  following: string;
  html: string;
  likes: string;
  photos: string;
  portfolio: string;
  self: string;
}

export interface IProfileImg {
  large: string;
  medium: string;
  small: string;
}

export interface ISocial {
  instagram_username: string;
  paypal_email: null;
  portfolio_url: string;
  twitter_username: string;
}

export interface IUser {
  accepted_tos: boolean;
  bio: string;
  first_name: string;
  for_hire: boolean;
  id: string;
  instagram_username: string;
  last_name: string;
  links: IUserLinks;
  location: string;
  name: string;
  portfolio_url: string;
  profile_image: IProfileImg;
  social: ISocial;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  twitter_username: string;
  updated_at: string;
  username: string;
}

export interface IImages {
  alt_description: string;
  blur_hash: string;
  color: string;
  created_at: string;
  current_user_collections: [];
  description: string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: ILinks;
  promoted_at: string;
  sponsorship: null;
  tags: ITag[];
  topic_submissions?: { nature: { status: string; approved_on: string } };
  updated_at: string;
  urls: IUrls;
  user: IUser;
  width: number;
}
