export type TExperience = {
  company: string;
  logo: string;
  date: string;
  position: string;
  site?: string;
  clients: TClient[];
}

export type TClient = {
  name: string;
  site?: string;
  frontend?: string[];
  backend?: string[];
  game?: string[];
  "Notable Contribution": TContributions;
}

export type TContributions = string[]

export type TTechStack = Record<string, string[] | undefined>;

export type TTechStackCategoryProps = {
  title: string;
  items?: string[];
  color: string;
}
