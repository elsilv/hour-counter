import React from 'react'
import axios from 'axios';
import { saveAs } from 'file-saver';
import * as AiIcons from 'react-icons/ai';
import ReactTooltip from 'react-tooltip';

export const PrintPage = ({ project, totalAmounts, projectHoursLi }) => { 
    let response = {
        ProjectName: project.name, 
        projectId: project._id,
        amount: project.amount, 
        totalAmounts: totalAmounts,
        projectHoursLi: projectHoursLi
    }

    const downloadPdf = () => {
        axios.post('/create-pdf', response)
            .then(() => axios.get('fetch-pdf', { responseType: 'blob'}))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' })

                saveAs(pdfBlob, `pdf-${project._id}.pdf`)
            })
    } 

  return (
        <div>
            <ReactTooltip />
            <button className="toPdf-btn" data-tip="Downloading pdf can take a while" onClick={() => downloadPdf()}><AiIcons.AiOutlineDownload size={30}/></button>
        </div>
    )
}


