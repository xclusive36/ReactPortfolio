const Project = ({ children, id }) => { // children is the content of the component
  return <section id={id}>{children}</section>; // return Project component
};

export default Project; // export Project component
