const {addNotesHandler, getAllNotesHandler,editNoteByHandler, deleteNoteByHandler} = require(`./handler`);
const notes = require("./notes");

const routes = [
    {
        path : `/`,
        method : `GET`,
        handler : ()=> {
            return "responsif get berhasil";
        }
    },
        
        {
            path : `/notes/`,
            method : `POST`,
            handler : addNotesHandler
        },
        {
            path : `/notes/{id}`,
            method : `PUT`,
            handler : editNoteByHandler


        },
        {
            path : `/notes/{id}`,
            method : `DELETE`,
            handler : deleteNoteByHandler
        },
        {
            path : `/notes/`,
            method : `GET`,
            handler : getAllNotesHandler
        },
        {
            path : `/notes`,
            method : `GET`,
            handler : getAllNotesHandler
        }
    ];
    
    module.exports = routes;