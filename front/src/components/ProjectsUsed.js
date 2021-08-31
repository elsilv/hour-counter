import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/ProjectState';
import ReactTooltip from 'react-tooltip';
import * as AiIcons from 'react-icons/ai';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color: '#000000',
  },
};

export const ProjectsUsed = (props) => {
    const { deleteProject, changeCompleted, editProject } = useContext(GlobalContext);

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [name, setName] = useState('');
    const amount = props.projects.amount;

    const label = props.projects.completed
    ? <AiIcons.AiOutlineCheckCircle size={20}/> : <AiIcons.AiOutlineBorder size={20}/>
    
    const onSubmit = e => {
      e.preventDefault();
      console.log('edit')

      const newProject = {
        name: name,
    }

      if (name.length > 2) { 
        editProject(newProject); 
     }
    }

      function openModal() {
        setIsOpen(true);
      }

      function afterOpenModal() {
        subtitle.style.color = '#283d3b';
      }
    
      function closeModal() {
        setIsOpen(false);
      }

    return (
       <>
       <ReactTooltip place="bottom" effect="float"/>
        <div className="one-project">
                   <h3>{props.projects.name} </h3> 
                   <p>Hours planned to use: <span>{amount}</span></p>  
                   <p>{props.projects.description}</p>
                   <p className="icons">  
                    <u className="p2">
                      <Link data-tip="On project page" className="project-list-btn" id="page-link" to={`/projects/${props.projects._id}`}><AiIcons.AiOutlineFolderOpen size={20}/></Link>
                    </u>
                    <u className="p2">
                      <button data-tip="Edit" className="project-list-btn" >  <AiIcons.AiOutlineEdit size={20}/> </button>
                    </u>
                    <u className="p2">
                      <button className="project-list-btn" data-tip="Remove project" onClick={() => deleteProject(props.projects._id)}>  <AiIcons.AiOutlineDelete size={20}/></button>
                    </u>
                    <u className="p2">
                      <button data-tip="Mark project as completed" className="project-list-btn" onClick={() => changeCompleted(props.projects._id)}>  {label} </button>
                    </u>

                    <button onClick={openModal}> <AiIcons.AiOutlineEdit size={20}/> </button>
                      <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        ariaHideApp={false} 
                        style={customStyles}
                        contentLabel="Modal">

                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit</h2>
                        <button onClick={closeModal}>close</button>

                        <form onSubmit={onSubmit}>
                        <label htmlFor="text">Project name</label>
                        <input id="project-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={props.projects.name}/>
                        
                        <label htmlFor="amount">How much time do you want to spend?</label>
                        <input id="project-amount" type="number" placeholder={props.projects.amount}/>

                        <label htmlFor="description">Descripe your project</label>
                        <input id="project-description" type="text-field" placeholder={props.projects.description} />
                        <button>Edit</button>
                        </form>

                      </Modal>
                  </p> 
        </div>       
      </>
    )
}
