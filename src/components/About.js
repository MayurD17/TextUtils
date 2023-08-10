 import React from 'react'
 
 function about(props) {
   return (
     <div className='container my-5' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className='my-3'><b>About Us :</b></h2>
        <h5>Text Utilities is a simple and user-friendly web application that provides a variety of text-related 
            tools to help make your life easier. Whether you're a writer, student, or professional, we've got you covered.
            Our website includes tools for text manipulation, analysis, formatting, and more. Need to convert a
            block of text from uppercase to lowercase, or vice versa? No problem. Want to count the number of words or characters in your text? We've got you covered.
            At Text Utilities, we're committed to making text-related tasks as easy and streamlined as possible. 
            We believe that text should be a tool that helps you, not a source of frustration or inconvenience. That's why we're constantly working to improve and expand our toolset to meet the needs of our users.
            So whether you're a blogger, writer, or just someone who works with text on a regular basis, give
            Text Utilities a try. We're confident that you'll find our tools to be a valuable addition to your 
            workflow.t that you'll find our tools to be a valuable addition to your workflow.
        </h5>
     </div>
   )
 }
 
 export default about