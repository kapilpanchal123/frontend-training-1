export type ProjectType = {
  selectedProjectId: string | undefined | null;
  projects: ProjectData[];
};

export type ProjectData = {
  id?: number;
  title: string;
  description: string;
  dueDate: string;
};

export type ResultModalHandle = {
  open: () => void;
};