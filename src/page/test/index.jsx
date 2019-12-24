import React, { useRef, useEffect } from 'react';
import './index.less';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/oceanic-next.css';
import 'codemirror/mode/markdown/markdown.js';   
// import 'codemirror/theme/' //可以在这个文件下引入所有主题样式

const Test = () => {
  const codeMirror = useRef();
  useEffect(() => {
    let myCodeMirror = CodeMirror(
      codeMirror.current,
      { 
        mode: 'markdown',
        value: '请输入',
        lineSeparator: '/n',
        theme: 'oceanic-next',
        indentUnit: 2,
        smartIndent: true,
        tabSize: 2,
        indentWithTabs: true,
        electricChars: true,
        lineWrapping: true,
        lineNumbers: true,
        cursorBlinkRate: 100,
        /**
         * 两个配合使用
         * specialChars: RegExp
         * specialCharPlaceholder: function(char) → Element
         */
      }
    );
    myCodeMirror.on('change', (e) => {
      console.log(e.display.input.prevInput, '----!>2133131');
    })

  }, []);

  return (
    <div className="test">
      <div
        style={{ height: '100%', background: 'red' }}
        ref = {codeMirror}
      >
      </div>
    </div>
  );
}
export default Test;