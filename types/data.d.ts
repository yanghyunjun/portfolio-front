export type UserType = {
  name: string;
  engilshName: string;
  title: string;
  decript: string;
};

export type ImgType = {
  imgName: string;
  url: string;
};

export type ActivityType = {
  title: string;
  date: string;
  content: string;
  experience: string;
};

export type PrizesType = {
  title: string;
  date: string;
  prize: string;
};

export type GithubType = {
  url: string;
};

export type StackType = {
  name: string;
};

export type Website = {
  title: string;
  text: string;
  url: string;
};

export type PersonalProjectType = {
  title: string;
  website: WebSite;
  context: string;
  repository: string;
  stack: string[];
};

export type TeamProjectType = {
  title: string;
  website: WebSite;
  context: string;
  repository: string;
  stack: string[];
};
