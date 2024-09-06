import { ClassicEditor, Context, Bold, Essentials, Italic, Paragraph, ContextWatchdog } from 'ckeditor5';
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';

import 'ckeditor5/ckeditor5.css';

function Editor() {
  return (
    <div style={{
      width: '80%',
      height:'80%',
      color:'black'
    }}>
      <CKEditorContext style={{}} context={ Context } contextWatchdog={ ContextWatchdog }>
        <CKEditor
          editor={ ClassicEditor }
          config={ {
            plugins: [ Essentials, Bold, Italic, Paragraph ],
            toolbar: [
                  'undo', 'redo',
                  '|',
                  'heading',
                  '|',
                  'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
                  '|',
                  'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
                  '|',
                  'link', 'uploadImage', 'blockQuote', 'codeBlock',
                  '|',
                  'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent'
              ],
              shouldNotGroupWhenFull: false
          }
          } 
          data=''
          onReady={ ( editor ) => {
            // You can store the "editor" and use when it is needed.
            console.log( 'Editor 1 is ready to use!', editor );
          } }
        />
      </CKEditorContext>
    </div>
  );
}

export default Editor;
