import { useState } from 'react';
import './App.css';
import NewProject from './components/NewProject/NewProject';
import NoProjectSelected from './components/NoProjectSelected/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar/ProjectsSidebar';
import type { ProjectData, ProjectType } from './components/Data';
import SelectedProject from './components/SelectedProject/SelectedProject';

function App() {
  const[projectsState, setProjectsState] = useState<ProjectType>({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text: string) => {
     setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
            ...prevState,
            tasks: [ newTask, ...prevState.tasks ]
          }
    });
  };

  const handleDeleteTask = (id: number | undefined) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      }
    });
  };

  const handleSelectProject = (id: string) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    });
  };

  const handleDeleteProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
        projects: prevState.projects.filter((project) => project.id?.toString() !== prevState.selectedProjectId)
      }
    });
  };

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  };

  const handleCancelAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
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
            selectedProjectId: undefined,
            projects: [...prevState.projects, newProject]
          }
    });
  };

  const selectedProject = projectsState.projects.find(project => project.id?.toString() === projectsState.selectedProjectId);
  let content = <SelectedProject 
                  title={selectedProject?.title ?? ""} 
                  date={selectedProject?.dueDate ?? ""} 
                  description={selectedProject?.description ?? ""} 
                  onDelete={handleDeleteProject} 
                  onAddTask={handleAddTask}
                  onDeleteTask={handleDeleteTask}
                  tasks={projectsState.tasks}
                  selectedProjectId={projectsState.selectedProjectId}
                  />;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={ handleStartAddProject }/>
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar 
          projects={ projectsState.projects } 
          onStartAddProject={ handleStartAddProject }
          onSelectProject={ handleSelectProject }
          selectedProjectId={ projectsState.selectedProjectId } />
        { content }
      </main>
    </>
  )
};

export default App;