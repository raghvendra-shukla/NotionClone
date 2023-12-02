import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';

// Import codemirror styles
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';

const Editor = (props) => {
  const {text}=props;
  const [code, setCode] = useState(text);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(code).then(
      () => {
        console.log('Code copied to clipboard');
      },
      (err) => {
        console.error('Error copying code to clipboard', err);
      }
    );
  };

  return (
    <div>
      <CodeMirror
        value={code}
        options={{
          mode: 'javascript',
          theme: 'dracula',
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
      />
      <button onClick={handleCopyClick}>Copy Code</button>
    </div>
  );
};

export default Editor;
