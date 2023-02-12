import React, {useState, useEffect} from "react";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


function Form(){
    const [page, setPage] = useState(0)
    const FormTitles=["Sign Up", "Personal Info", "Other"]
    const steps = FormTitles
    const [data, setData] = useState({
        email:"",
        password:"",
        pwd:"",
        firstname:"",
        lastname:"",
        username:"",
        nationality:"",
        other:""
    })
   
    const DisplayPage = () => {
        if (page===0){
            return <SignUpInfo data={data} setData={setData}/>
        } else if (page===1){
            return <PersonalInfo data={data} setData={setData} />
        } else{
            return <OtherInfo data={data} setData={setData}/>
        }
    }
    return (
        <div className="form">
            <div className="progressbar">
                <div style={{width: page===0 ? "33.3%" : page===1 ? "66.3%" : "100%" , color: "blueviolet"}}></div>
            </div>
            <div className="form-container">
               <div className="header"> 
                <h2>{FormTitles[page]}</h2> 
               </div> 
               <div className="body">
                <Box sx={{ width: '100%' }}>
                <Stepper activeStep={page} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                        <StepLabel></StepLabel>
                        </Step>
                    ))}
                    </Stepper>
                </Box>
                {DisplayPage()}
                </div> 
               <div className="footer">
                 <Button disabled={page===0} onClick={() => {setPage((p) => p-1)}}>Prév</Button>
                 <Button variant="contained" 
                        onClick={() => {
                            if(page===FormTitles.length-1) {
                            alert('Form Submitted successfully')
                            } else{
                                setPage((p) => p+1)}}
                            }
                        >    
                   {page===FormTitles.length - 1 ? "Submit" : "Next" } 
                  
                 </Button>
                </div> 
            </div>
        </div>
    )
} 
export default Form
