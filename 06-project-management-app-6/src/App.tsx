import { useState } from 'react';
import './App.css';
import NewProject from './components/NewProject/NewProject';
import NoProjectSelected from './components/NoProjectSelected/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar/ProjectsSidebar';
import type { ProjectData, ProjectType } from './components/Data';

function App() {
  const[projectsState, setProjectsState] = useState<ProjectType>({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  };

  const handleAddProject = (projectData: ProjectData) => {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
            ...prevState,
            projects: [...prevState.projects, newProject]
          }
    });
  };

  let content;

  if(projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject}/>
  } else if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={ handleStartAddProject }/>
  }

  console.log(projectsState);

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar onStartAddProject={ handleStartAddProject }/>
        { content }
      </main>
    </>
  )
};

export default App;
