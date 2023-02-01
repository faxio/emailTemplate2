import React, { useEffect, useRef, useState } from 'react'
import EmailEditor from 'react-email-editor'
import { NavLink } from 'react-router-dom';
import { Header } from './components/Header';
import { render } from 'react-dom';

export const EmailTemplate = (props) => {

    const editorEmail = useRef(null);

    const [ state, setState] = useState(false)

    if ( state ){
      const templateJson = JSON.parse( localStorage.getItem('Template') )
      editorEmail.current?.editor.loadDesign(templateJson);
    }

    const saveDesign = () => {
        editorEmail.current?.editor.saveDesign(design => {
            console.log('saveDesign', design)
            localStorage.setItem('Template', JSON.stringify(design))
        })
    }

    const exportHtml = () => {
      editorEmail.current?.editor.exportHtml((data) => {
          const { design, html } = data;
          console.log(html);
        });
      };

    const onLoad = () => {
        // editor instance is created
        // you can load your template here;
        const templateJson = JSON.parse( localStorage.getItem('Template') )
        editorEmail.current?.editor.loadDesign(templateJson);
      }

      const onReady = () => {
        // editor is ready
        console.log('onReady');
        setState(!state)
      };

    const OnVolver = () => {
      console.log("Volviendo")
    }
  
    return (
        <>
            <Header>
              <NavLink to="../"> Volver</NavLink>
              <button onClick={saveDesign}>Save Design</button>
              <button onClick={exportHtml}>Export Design</button>
            </Header>
            <EmailEditor className="emailTemplate" onLoad={onLoad} onReady={onReady} ref={editorEmail}/>
        </>
      
  )
}
