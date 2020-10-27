import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {connect} from "react-redux";
import moduleService from "../services/ModuleService"
import {Link} from "react-router-dom";

const ModuleListComponent = ({
                                 course={},
                                 modules=[],
                                 deleteModule,
                                 createModule,
                                 updateModule,
                                 edit,
                                 ok,
                             }) =>
    <div>
        <h3>Modules for {course.title}</h3>
        <ul className="list-group">
            {
                modules.map(module =>
                <li
                    className="list-group-item"
                    key={module._id}>
                    {
                        !module.editing &&
                        <span>
                            <Link to={`/edit/${course._id}/modules/${module._id}`}>
                                {module.title}
                            </Link>
                            <button
                                className="btn btn-primary pull-right"
                                onClick={() => edit(module)}>
                                <i className="fa fa-pencil"></i>
                            </button>
                        </span>
                    }
                    {
                    module.editing &&
                    <span>
                        <input
                            className= "form-control"
                            onChange={(event)=> updateModule({
                                ...module,
                                title:event.target.value
                            })}
                            value={module.title}/>
                        <button
                            className="btn btn-success  pull-right"
                            onClick={() => ok(module)}>
                            <i className="fa fa-check" aria-hidden="true"></i>
                        </button>
                    </span>
                    }
                    <button
                        className="btn btn-danger  pull-right"
                        onClick={()=> deleteModule(module)}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                </li>
                )
            }
        </ul>
        <span className="list-group-item">
            <button
                className="btn btn-primary"
                onClick={() => createModule(course)}>
            <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
        </span>

    </div>

const stateToPropertyMapper =(state) =>({
    modules:state.moduleReducer.modules,
    course:state.courseReducer.course,
})

const propertyToDispatchMapper =(dispatch)=>({
    ok:(module) =>
        moduleService.updateModule(module._id,{
            ...module,editing:false
        }).then (status=> dispatch({
            type:"UPDATE_MODULE",
            module: {...module,editing:false}
        })),

    edit:(module) =>
        moduleService.updateModule(module._id,{
            ...module,editing:true
        }).then (status=> dispatch({
            type:"UPDATE_MODULE",
            module:{...module,editing:true}
        })),

    deleteModule:(module) =>
        moduleService.deleteModule(module._id)
            .then(status => dispatch({
                type:"DELETE_MODULE",
                module:module
            })),
    createModule:(course) =>
        moduleService.createModuleForCourse(course._id,{
        title:"New Module",
        })
        .then(actualModule => dispatch({
            type:"CREATE_MODULE",
            module: actualModule
        })),
    updateModule:(module) =>
        dispatch({
            type:"UPDATE_MODULE",
            module:module
        })
        // moduleService.updateModule(module._id, module)
        //     .then (status => dispatch({
        //         type:"UPDATE_MODULE",
        //         module: module
        //     }))
})

export default connect
( stateToPropertyMapper,
    propertyToDispatchMapper)
(ModuleListComponent)


// export default class ModuleListComponent extends React.Component{
//     render() {
//         return(
//                 <div>
//                     <div>
//                         <br/>
//
//                         <ul className="list-group wbdv-module-list">
//                             <li className="list-group-item wbdv-module-item"><span
//                                 className="wbdv-module-item-title">HTML </span> <i
//                                 className="fa fa-times pull-right wbdv-module-item-delete-btn" aria-hidden="true"></i>
//                             </li>
//                             <li className="list-group-item active wbdv-module-item"><span
//                                 className="wbdv-module-item-title">CSS </span> <i
//                                 className="fa fa-times pull-right wbdv-module-item-delete-btn" aria-hidden="true"></i>
//                             </li>
//                             <li className="list-group-item wbdv-module-item"><span
//                                 className="wbdv-module-item-title">jQuery</span> <i
//                                 className="fa fa-times pull-right wbdv-module-item-delete-btn" aria-hidden="true"></i>
//                             </li>
//                             <li className="list-group-item wbdv-module-item"><span
//                                 className="wbdv-module-item-title">React</span> <i
//                                 className="fa fa-times pull-right wbdv-module-item-delete-btn" aria-hidden="true"></i>
//                             </li>
//                             <li className="list-group-item wbdv-module-item"><span
//                                 className="wbdv-module-item-title">Redux</span> <i
//                                 className="fa fa-times pull-right wbdv-module-item-delete-btn" aria-hidden="true"></i>
//                             </li>
//                             <li className="list-group-item wbdv-module-item"><span
//                                 className="wbdv-module-item-title">Native</span> <i
//                                 className="fa fa-times pull-right wbdv-module-item-delete-btn" aria-hidden="true"></i>
//                             </li>
//                             <li className="list-group-item wbdv-module-item"><span
//                                 className="wbdv-module-item-title">Angular</span> <i
//                                 className="fa fa-times pull-right wbdv-module-item-delete-btn" aria-hidden="true"></i>
//                             </li>
//                             <li className="list-group-item wbdv-module-item"><span
//                                 className="wbdv-module-item-title">Node</span> <i
//                                 className="fa fa-times pull-right wbdv-module-item-delete-btn" aria-hidden="true"></i>
//                             </li>
//                             <li className="list-group-item">
//                                 <button className="btn btn-success pull-right">
//                                     <i className="fa fa-plus" aria-hidden="true"></i>
//                                 </button></li>
//                         </ul>
//                     </div>
//             </div>
//         )
// }
// }