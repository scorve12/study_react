// src/components/WysiwygInput.jsx
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

function WysiwygInput() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>내용을 입력하세요</p>',
  });

  return (
    <div className="max-w-3xl mx-auto my-6">
      <EditorContent editor={editor} className="p-4 border border-gray-300 rounded-md bg-white" />
    </div>
  );
}

export default WysiwygInput;