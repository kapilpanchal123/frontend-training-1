export type ProjectType = {
  selectedProjectId: string | undefined | null;
  projects: ProjectData[];
  tasks: Task[];
};

export type ProjectData = {
  id?: number;
  title: string;
  description: string;
  dueDate: string;
};

export type Task = {
  id?: number;
  text: string;
  projectId: string | undefined | null;
};

export type ResultModalHandle = {
  open: () => void;
};