import Editor from "../../../components/CKeditor/editor"

const TextEditor = () => {
    return(
        <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            width:'100vw',
            height:'100vh',
        }}>
            <Editor/>
        </div>
    )
}
export default TextEditor