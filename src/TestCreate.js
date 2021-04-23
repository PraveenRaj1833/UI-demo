import React, { Component } from 'react'
import { Button } from 'reactstrap'
import {RadioGroup,Radio} from 'react-radio-group'
import { FormGroup,FormControl,FormLabel,FormCheck } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './testCreate.css'
import { Form } from 'reactstrap'
export class TestCreate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             questions : [
                 {
                     type : "mcq",
                     options : [],
                     marks : 1,
                     selectedValue : 0,
                     questionDescription : ""
                 }
             ]
        }
    }

    handleQuestionChange = (e,index) => {
        const Questions = this.state.questions;
        Questions[index][e.target.name]=e.target.value;
        this.setState({
            ...this.state,
            questions : Questions
        });
        // ,()=>console.log(this.state.questions)
    }

    handleRightAnswer = (right,index) => {
        const Questions = this.state.questions;
        Questions[index].options.forEach((option,index)=>{
            if(option.optDesc===right) {
                Questions[index].selectedValue = index;
            }
        });
        this.setState({
            ...this.state,
            questions : Questions
        });
    }
    
    addQuestion = () => {
        const Questions = this.state.questions;
        Questions.push({
            type : "mcq",
            options : [],
            marks : 1,
            selectedValue : 0,
            questionDescription : ""
        });
        this.setState({
            ...this.state,
            questions : Questions
        });
    }

    addOption = (index) => {
        const Options = this.state.questions[index].options;
        Options.push({
            optDesc : "",
            right : false
        });
        const Questions = this.state.questions;
        Questions[index].options = Options;
        this.setState({
            ...this.state,
            questions : Questions
        }) 
    }

    handleOptionChange = (index,optIndex,e)=>{
        const Questions = this.state.questions;
        Questions[index].options[optIndex] = e.target.value;
        this.setState({
            ...this.state,
            questions : Questions
        })         
    }

    render() {
        return (
            <div className="m-3">
                <h2>Create Test</h2>
                <div className="m-1">
                    {
                        this.state.questions.map((question,index)=>{
                            return (
                                <div className="col-11">
                                    <FormGroup className="form-inline w-100 qd col-11" key={index}>
                                        <FormLabel className="m-1">Description</FormLabel>
                                        <FormControl
                                        className="col-md-10 m-2"
                                        as="textarea"
                                        rows={3}
                                        name="questionDescription"
                                        width={300}
                                        columns = {200}
                                        value = {question.questionDescription}
                                        placeholder="Description"
                                        onChange={(e)=>this.handleQuestionChange(e,index)}
                                        //   value={product.description}
                                        //   className="col-lg-4 col-md-3 col-sm-3" 
                                        
                                        />
                                    </FormGroup >
                                    <RadioGroup selectedValue={question.selectedValue} name="selectedValue" 
                                        onChange={(e)=>this.handleQuestionChange(e,index)}>
                                        {
                                            question.options.map((opt,optIndex)=>{ return (
                                                <div key = {optIndex} className="inline-block">
                                                    <Radio value={opt[optIndex]}></Radio>
                                                    <FormControl 
                                                    className = "col-md-4"
                                                    value = {opt.optDesc}
                                                    placeholder = "option..."
                                                    onChnage = {(e)=>this.handleOptionChange(index,optIndex,e)}
                                                    /> 
                                                </div>
                                                )
                                            })
                                        }
                                    </RadioGroup>
                                    <Button className="float-right" onClick={()=>{this.addOption(index)}}>Add Option</Button>
                                
                                </div>
                            )
                        })
                    }
                    <br></br>
                    <br></br>
                    <Button className="float-right m-3" onClick={()=>{this.addQuestion()}}>Add Question</Button>
                </div>
            </div>
        )
    }
}

export default TestCreate
