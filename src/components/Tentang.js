import React, { Component } from 'react';
// import axios from 'axios';
import { OrganizationChart } from 'primereact/components/organizationchart/OrganizationChart';
import './css/OrganizationChartCustomStyle.css' ;

class Tentang extends Component {

    constructor() {
        super();
        this.state = {
            data1: [{
                label: 'CEO',
                type: 'person',
                className: 'ui-person',
                expanded: true,
                data: {name:'', 'avatar': 'walter.jpg'},
                children: [
                    {
                        label: 'CFO',
                        type: 'person',
                        className: 'ui-person',
                        expanded: true,
                        data: {name:'Saul Goodman', 'avatar': 'saul.jpg'},
                        children:[{
                            label: 'Tax',
                            className: 'department-cfo'
                        },
                        {
                            label: 'Legal',
                            className: 'department-cfo'
                        }],
                    },
                    {
                        label: 'COO',
                        type: 'person',
                        className: 'ui-person',
                        expanded: true,
                        data: {name:'Mike E.', 'avatar': 'mike.jpg'},
                        children:[{
                            label: 'Operations',
                            className: 'department-coo'
                        }]
                    },
                    {
                        label: 'CTO',
                        type: 'person',
                        className: 'ui-person',
                        expanded: true,
                        data: {name:'Jesse Pinkman', 'avatar': 'jesse.jpg'},
                        children:[{
                            label: 'Development',
                            className: 'department-cto',
                            expanded: true,
                            children:[{
                                label: 'Analysis',
                                className: 'department-cto'
                            },
                            {
                                label: 'Front End',
                                className: 'department-cto'
                            },
                            {
                                label: 'Back End',
                                className: 'department-cto'
                            }]
                        },
                        {
                            label: 'QA',
                            className: 'department-cto'
                        },
                        {
                            label: 'R&D',
                            className: 'department-cto'
                        }]
                    }
                ]
            }],
            data2 : [{
                label: 'F.C Barcelona',
                expanded: true,
                children: [
                    {
                        label: 'F.C Barcelona',
                        expanded: true,
                        children: [
                            {
                                label: 'Chelsea FC'
                            },
                            {
                                label: 'F.C. Barcelona'
                            }
                        ]
                    },
                    {
                        label: 'Real Madrid',
                        expanded: true,
                        children: [
                            {
                                label: 'Bayern Munich'
                            },
                            {
                                label: 'Real Madrid'
                            }
                        ]
                    }
                ]
            }],
            selection: []
        };
        
        this.nodeTemplate = this.nodeTemplate.bind(this);
    }

    nodeTemplate(node) {
        if (node.type === "person") {
            return (
                <div>
                    <div className="node-header ui-corner-top">{node.label}</div>
                    <div className="node-content">
                        <img alt={node.data.avatar} src={'showcase/resources/demo/images/organization/${node.data.avatar}'} style={{ width: '32px' }}/>
                        <div>{node.data.name}</div>
                    </div>
                </div>
            );
        }

        if (node.type === "department") {    
            return node.label;
        }
    }

    componentDidMount() {
    
        
    }

    render() {
        return (
            <div>
                
                <div class="contaiiner">

                    <div className="content-section implementation">
                        <h3>Offis Struktur Organisasi</h3>
                        <p>Organization with advanced customization.</p>
                        <OrganizationChart value={this.state.data1} nodeTemplate={this.nodeTemplate} selectionMode="multiple" 
                            selectionChange={(data) => this.setState({selections: data})} className="company"></OrganizationChart>

                        {/* <OrganizationChart value={this.state.data2}></OrganizationChart> */}
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Tentang;