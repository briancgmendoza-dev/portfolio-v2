export type TExperience = {
  company: string;
  date: string;
  position: string;
  clients?: TClient[];
  frontend?: string[];
  backend?: string[];
  "Notable Contribution"?: string[];
}

export type TClient = {
  name: string;
  site?: string;
  frontend?: string[];
  backend?: string[];
  "Notable Contribution"?: string[];
}

export type TTechStackCategoryProps = {
  title: string;
  items?: string[];
  color: string;
}


export type TTechStack = {
  frontend?: string[];
  backend?: string[];
  game?: string[];
  "Notable Contribution"?: string[];
}
