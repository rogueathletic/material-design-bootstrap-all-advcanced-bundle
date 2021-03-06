import React from 'react';
import MDBWysiwyg from 'mdb-react-wysiwyg';

const basicExamples = () => {
    const initialContent =
        `<br>
        <p style="text-align: center;"><img src="https://mdbootstrap.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"      class="img-fluid"></p>
        <h1 style="text-align: center;">MDBootstrap</h1>
        <p style="text-align: center;">WYSIWYG Editor</p>
        <p style="text-align: center;"><a href="https://mdbootstrap.com" target="_blank" contenteditable="false" style="font-size: 1rem; text-align: left;">MDBootstrap.com</a>&nbsp;© 2018</p>
        <p><b>Features:</b></p>
        <ul>
        <li>Changing block type</li>
        <li>Text formatting (bold, italic, strikethrough, underline)</li>
        <li>Setting text color</li>
        <li>Text aligning</li>
        <li>Inserting links</li>
        <li>Inserting pictures</li>
        <li>Creating a list (bulled or numbered)</li>
        </ul>
        <p><b>Options:</b></p>
        <ul>
        <li>Translations</li>
        <li>Using your own color palette</li>
        <li>Disabling/enabling tooltips</li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</ul>
        `;


    return (
        <>
            <MDBWysiwyg initialContent={initialContent} />
        </>
    );
};

export default basicExamples;