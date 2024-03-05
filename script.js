const heading = {
    backgroundColor : 'red',
    textAlign : 'center'
}
const para = {
    // textAlign : 'center'
    marginLeft : 'auto',
    marginRight : 'auto',
    fontSize : '25px',
    fontStyle : 'italic',
    fontWeight : 'bold',
    textDecoration : 'underline'
   
}
const container ={
    display : 'flex',
    flexDirection :'column',
    gap : '20px',

}
const anchor = {
    marginLeft : '400px',
    fontSize : '22px',

}
const paragraph = {
    marginLeft : '400px',
    marginRight : '400px',
    fontSize : '20px',
    fontStyle : 'oblique'
}

function Div(){
    return <div style={container}>
        <h1 style={heading}>Topics covered</h1>
        <p style={para}>The following is a list of all the topics we cover in the MDN learning area</p>
        <a style={anchor} href={"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"}>Getting started with the Web  </a>
        <p style={paragraph}>Getting started with the Web is a concise series introducing you to the practicalities of web development. You'll set up the tools you need to construct a simple webpage and publish your own simple code.</p>
        <a style={anchor}  href ={"https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"}>HTML--Structuring the web</a>
        <p style={paragraph}> HTML provides the fundamental building blocks for structuring Web documents and apps.At its heart, HTML is a language made up of elements, which can be applied to pieces of text to give them different meaning in a document (Is it a paragraph? Is it a bulleted list? Is it part of a table?), structure a document into logical sections (Does it have a header? Three columns of content? A navigation menu?), and embed content such as images and videos into a page. This module will introduce the first two of these and introduce fundamental concepts and syntax you need to know to understand HTML.</p>
        <a style={anchor}  href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}>CSS -- Styling the web</a>
        <p style={paragraph}>Cascading Style Sheets are used to describe the appearance of Web documents and apps.CSS is among the core languages of the open web and is standardized across Web browsers according to W3C specifications. Previously, the development of various parts of CSS specification was done synchronously, which allowed the versioning of the latest recommendations. You might have heard about CSS1, CSS2.1, or even CSS3. There will never be a CSS3 or a CSS4; rather, everything is now CSS without a version number.</p>
    </div>
        
}

ReactDOM.render(<Div/>,document.querySelector(".root"));