import { useState } from 'react'
import './App.css'
import Editor from "@monaco-editor/react";

function App() {
   

  return (
    <>
      <Editor height="80vh"  
          defaultLanguage="SQL"
          // defaultValue="//" 
          width={600} 
          theme='vs-dark'
          value='//write SQL Query'
          options={Option}
      />;
      {
        <><div className="cipher">
          <h1>
            CipherSQL
          </h1>
        </div>
        <div className='button'>
          <Button:submit>
            
          </Button:submit>
          </div></>
      }
    </>
  )
}

export default App

 