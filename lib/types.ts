export interface NavLink {
  title: string;
  link: string;
}

export interface Production {
  id: number;
  poster_url: string;
  start_date: string;
  end_date: string;
  name: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  image_url: string;
  description: string;
}

export interface Testimonial {
  id: number;
  testimony: string;
  client: string;
  image: string;
}

export interface Gallery {
  id: number;
  path: string;
}

export interface Article {
  id: string;
  title: string;
  blog_content: string;
  image: string;
  article_url: string;
}

export interface TeamMember {
  names: string;
  title: string;
  profile: string;
  profile_url: string;
}

export interface Value {
  title: string;
  description: string;
  path: string;
}
