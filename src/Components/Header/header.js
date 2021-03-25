import { react, useEffect, useState } from 'react';
import './header.css'
import workspaces from '../Gantt/workspace.json'
// import Gantt from '../Gantt/gantt'
// import DisplayGantt from '../Gantt/displayGantt'
import { Route, Router, withRouter } from "react-router-dom";
import Switch from 'react-bootstrap/esm/Switch';
// import useState from 'react-dom'
function Header(props) {

  // const [projectName, setProjectName] = useState(true);
  const allWorkspace = { workspaces };
  const allProjects = allWorkspace.workspaces.workspaces.projects;
  // const routeToGantt = (projectName) => {
  // props.history.push(`/Gantt/${projectName}`);
  // }
  const l = "myName";
  // const colorCircle=allProjects.workspaces.workspaces.projects
  console.log(allProjects);
  const arr = []
  allProjects.map((item, index) => {
    arr[index] = item.name;
  })
  console.log(arr);

  function goToGantt() {
    // <Redirect to={'/Gantt'}></Redirect>
    props.history.push('/Gantt/');
    // history.push('/Gantt')
    alert("camr")
  }

  //const numbers = props.numbers;
  // const listItemsProjectName = arr.map((number) =>
  //   // <li>{number}</li>
  //   <li>{number}</li>

  // )




  // function greetUser(e) {


  // }

  // const  handleClick = value => () => {


  //    // history.push(`/Gantt/${value.name}`) ;
  //     return 
  //     // <Redirect to='/Gantt/' />
  //     <Redirect to={"/Gantt/" + value.name} />
  //   };

  return (
    <>


      <div className="container ">
        <div className="row  header2">

        </div>

        <div className="row header1">
          <div className="col-3">
            <div className="btn-group">

              <div className="dropBtn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Projects
                   </div>

              <div className="   dropContainer dropdown-menu dropdown-menu-right container ">

                <div className="row">
                  <div className="col">

                  </div>

                  {allProjects.map((project) =>

                    <div className=" row mt-2"

                    >
                      <div className="col-1  itemCircle ml-3" style={{ backgroundColor: project.color ? project.color : "blue" }}>   {project.name[0]} </div>
                      <div className="col-1 ">


                        {/* <Router>
                          <nav >
                            <Switch>
                              <Route path="/Gantt/:projectName">
                                <Gantt />
                              </Route>
                            </Switch> */}

                        <button
                          // onClick={() => routeToGantt(project.name)}
                          className=" dropdown-item dropItem "

                        >

                          {/* <Link to={`/Gantt/${project.name}`}> */}
                          {project.name}
                          {/* </Link> */}
                        </button>




                        {/* </nav>
                        </Router> */}






                      </div>




                    </div>



                  )


                  }




                </div>













              </div>
            </div>

          </div> <div className="col-3">

          </div>
          <div className="col-3 gantt">
            Gantt
    </div>
        </div>
      </div>

    </>




  );
}
export default withRouter(Header)