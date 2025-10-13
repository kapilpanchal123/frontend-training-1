export type ProjectType = {
  selectedProjectId: string | undefined | null;
  projects: ProjectData[];
};

export type ProjectData = {
  title: string;
  description: string;
  dueDate: HTMLInputElement;
};