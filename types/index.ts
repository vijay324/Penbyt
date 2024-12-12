// types/index.ts
export interface Subject {
  subject_name: string;
  URL: string;
  last_updated_date: string;
}

export interface Semester {
  [key: string]: Subject[]; // Add this index signature
  "sem-1": Subject[];
  "sem-2": Subject[];
}

export interface Branch {
  [key: string]: Semester;
}

export interface Data {
  P1: Semester;
  P2: Semester;
  Eng1: Branch;
  Eng2: Branch;
  Eng3: Branch;
  Eng4: Branch;
}

export interface ChangelogEntry {
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

export interface Changelog {
  versions: {
    [version: string]: ChangelogEntry[];
  };
}
