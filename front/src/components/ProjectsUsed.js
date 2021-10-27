import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/ProjectState';
import ReactTooltip from 'react-tooltip';
import * as AiIcons from 'react-icons/ai';
import Modal from 'react-modal';

export const ProjectsUsed = (props) => {
    const { deleteProject, changeCompleted, editProject } = useContext(GlobalContext);

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState('');

    const amountProps = props.projects.amount;

    const label = props.projects.completed
    ? <AiIcons.AiOutlineCheckSquare size={20}/> : <AiIcons.AiOutlineBorder size={20}/>
    
    const onSubmit = e => {
      e.preventDefault();

      const newProject = {
        name: name || props.projects.name,
        amount: +amount || props.projects.amount,
        description: description || props.projects.description
    }

        editProject(props.projects._id, newProject); 
        closeModal();
    }

      function openModal() {
        setIsOpen(true);
      }

      function afterOpenModal() {
        subtitle.style.color = '#e6e8e6';
      }
    
      function closeModal() {
        setIsOpen(false);
      }

    return (
       <>
       <ReactTooltip place="bottom" effect="float"/>
        <div className="one-project">
                   <h3>{props.projects.name} </h3> 
                   <p>Hours planned to use: <span>{amountProps}</span></p>  
                   <p>{props.projects.description}</p>
                   <p className="icons">  
                    <u className="p2">
                      <Link data-tip="On project page" className="project-list-btn" id="page-link" to={`/projects/${props.projects._id}`}><AiIcons.AiOutlineFolderOpen size={20}/></Link>
                    </u>
                    <u className="p2">
                    <button data-tip="Edit" className="project-list-btn" onClick={openModal}> <AiIcons.AiOutlineEdit size={20}/> </button>
                      <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        ariaHideApp={false} 
                        style={{
                          overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(-255, -255, -255, 0.35)'
                          },
                          content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            paddingBottom: '50px',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            color: '#e6e8e6',
                            background: '#324c4a',
                            border: '2px solid #283d3b',
                          },
                        }}
                        contentLabel="Modal">

                          <button onClick={closeModal}> <AiIcons.AiOutlineClose/> </button>
                          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit</h2>

                          <form onSubmit={onSubmit}>
                          <label htmlFor="text">Project name</label>
                          <input id="project-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={props.projects.name}/>
                          
                          <label htmlFor="amount">How much time do you want to spend?</label>
                          <input id="project-amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder={props.projects.amount}/>

                          <label htmlFor="description">Descripe your project</label>
                          <input id="project-description" type="text-field" value={description} onChange={(e) => setDescription(e.target.value)} placeholder={props.projects.description}/>
                          <button> Save </button>
                          </form>
                      </Modal>
                      </u>
                    <u className="p2">
                      <button className="project-list-btn" data-tip="Remove project" onClick={() => deleteProject(props.projects._id)}>  <AiIcons.AiOutlineDelete size={20}/></button>
                    </u>
                    <u className="p2">
                      <button data-tip="Mark project as completed" className="project-list-btn" onClick={() => changeCompleted(props.projects._id)}>  {label} </button>
                    </u>
                  </p> 
        </div>       
      </>
    )
}
