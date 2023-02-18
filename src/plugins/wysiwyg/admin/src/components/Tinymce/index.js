// /src/plugins/wysiwyg/admin/src/components/Tinymce/index.js

import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import PropTypes from "prop-types";
const TinyEditor = ({ onChange, name, value, disabled }) => {
  const onChangeRef = useRef(onChange);
  function onBlur(ev, editor) {
    const content = editor.getContent();
    onChangeRef.current({ target: { name, value: content, type: "wysiwyg" } });
  }
  return (
    <>
      <Editor
        apiKey="nqqnjzazyobwi43ye9zvzrxtr0scimf91leeki23p56yyo3u"
        value={value}
        tagName={name}
        onEditorChange={(editorContent) => {
          onChange({ target: { name, value: editorContent } });
        }}
        outputFormat="html"
        init={{
          selector: "textarea",
          menubar: false,
          plugins:
            "print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern noneditable help formatpainter permanentpen pageembed charmap mentions quickbars linkchecker emoticons advtable export",
          toolbar:
            "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange removeformat | pagebreak | charmap emoticons | fullscreen preview | insertfile image media pageembed template link anchor codesample",
        }}
      />
    </>
  );
};
TinyEditor.defaultProps = {
  value: "",
};
TinyEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
export default TinyEditor;
