import React, { Component } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

export class ShowStudents extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             students : []
        }
    }

    getStudents = ()=>{
        fetch('https://demo833.herokuapp.com/student/get',{
            method : 'GET',
            headers : {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin' : 'https://demo833.herokuapp.com'
            }
        }).then(res=>{
            return res.json();
            // this.setState({
            //     students : results
            // })
        }).then(res=>{
            console.log(res);
            this.setState({
                students : res.results
            })
        })
        .catch(err=>{
            console.log(err);
        });
    }

    componentDidMount() {
        this.getStudents();
    } 
    
    render() {
        return (
            <div>
                <h1>Students</h1>
                <Table  striped bordered hover size="sm" id="users" className="m-2 w-100 table table-striped table-bordered dt-responsive nowrap">
                    {/* <Thead className="bg-success text-white">
                        {/* <Tr>
                            <Th>Id</Th>
                            <Th>Name</Th>
                            <Th>Student Id</Th>
                            <Th>Password</Th>
                            <Td>H</Td>
                        </Tr> */
                   // </Thead> */}}
                }
                    {/* <Thead> */}
                        <Tr>
                            <Th>Id</Th>
                            <Th>Name</Th>
                            <Th>Student Id</Th>
                            <Th>Password</Th>
                            {/* <Td>H</Td> */}
                        </Tr>
                    {/* </Thead> */}
                    <Tbody>

                        {this.state.students.map((student,index)=>{
                            return (
                               <Tr key={index}>
                                   <Td>{student._id}</Td>
                                   <Td>{student.name}</Td>
                                   <Td>{student.studentId}</Td>
                                   <Td>{student.password}</Td>
                                    {/* <Td>Hello</Td> */}
                               </Tr> 
                            )
                        })}
                    </Tbody>
                </Table>
            </div>
        )
    }
}

export default ShowStudents
