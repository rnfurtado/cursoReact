import React, { Component } from 'react';
import jobIcon from '../../img/job.png';

import api from '../../services/api';
import io from 'socker.io-client'
import './index.css';

export default class JobsCard extends Component {
    state = {
        jobs: []
    }

    async loadData() {
        const response = await api.get('/jobs');
        this.setState({ jobs: response.data });
    }

    registerSocket() {
        const socket = io('http://localhost:3002');
        socket.on('newjob', newjob => {
            this.setState({ jobs: [newjob, ...this.state.jobs] }); //os 3 pontos significa que o conteúdo está sendo copiado para ser atualizado            
        })
    }

    componentDidMount() {
        this.registerSocket();
        this.loadData();
    }

    render() {
        return (
            <div className='main-container'>
                {
                    this.state.jobs.map(job => (
                        <div className='jobs-container' key={job._id}>
                            <img src={jobIcon} alt='' />
                            <div>
                                <span>{job.description}</span>
                                <p>{job.company}</p>
                                <p>{job.company_address}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}