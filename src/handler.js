const {nanoid} = require(`nanoid`);
const notes = require(`./notes`)

const addNotesHandler = (request,h)=>{
  //id harus uniq jadi install nanoid@3.x.x

    const {title,tags,body} = request.payload;
    const id = nanoid(16);
    console.log(id + " dan " +id)
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
    
    const newNote = {
        title, tags, body, id, createdAt, updatedAt
    }

    notes.push(newNote);
    console.log(notes.id)
    //==============================================================
    //melihat semua isi dari array notes apabila ada id yang sama, mengembalikan nilai array
    //lalu apabila arraynya minimal terdapat 1 id yang sama(yang ditambahkan tadi, ) minimal 1 maka return true
    // berarti arraynya sudah sampai terkirim ke notes js dengan selamat
     let isSuccess = notes.filter((notes)=> {notes.id === id});
     console.log("ISSUCCESS? : "+isSuccess)
    //  let isSuccessBool = isSuccess.length >0
    // tidak working
    //===============================================================

    let isSuccess2 = (notes)=>{
        notes.foreach(ele =>{ 
            if(ele.id === id){
                return true
        } })
    }
    //  console.log(isSuccessBool)
    if(isSuccess2){

        const response = h.response({
            status : `success`,
            message : `berhasil ditambahkan`,
            data : {
                noteId : id,
            },

        });

        response.code(201);
        return response
    }

    const response = h.response({
        status : `fail`,
        message : `catatan gagal ditambahkan`

    })
    response.header(`Access-Control-Allow-Origin`,"http://localhost:5000/")
    //atau gunakan "*" untuk semua origin
    /*atau gunakan handler(), option{
        cors : {
            origin : []
        }
    }*/ 

    response.code(500);
    return response



}
const getAllNotesHandler = ()=>({
    status : `success`,
    data : {
        notes
    }

}
)
const editNoteByHandler = (request,h)=>{
        const {id} = request.params

        const {title,tags,body} = request.payload;
        const updatedAt = new Date().toISOString();

        const index = notes.findIndex((ele)=> ele.id === id)

        if (index !== -1){
            notes[index] = {
                ...notes[index],
                title, tags, body, updatedAt
            };

            const response = h.response({

                status : `berhasil`,
                message : `catatan behasil diperbarui`
            });
            response.code(200)
            return response;
        }


        const response = h.response({

            status : `gagal `,
            message : `Gagal memperbarui catatan nya`
        })
        response.code(404)
        return response;
        
    }
const deleteNoteByHandler = (request,h)=>{

const {id} = request.params;
    
    const index = notes.findIndex((ele)=> ele.id === id)
   
    

    console.log(index)
    if(index !== -1){

        notes.splice(index,1);
        const response = h.response({
            status : `suksess`,
            message : `catatan berhasil dihapus`
        })
        response.code(200)
        return response
    }


    const response = h.response({
        status : `gagal`,
        message : `error dalam menghapus catatan`
    })
    response.code(404)
    return response
}


module.exports = {addNotesHandler, getAllNotesHandler,editNoteByHandler, deleteNoteByHandler};