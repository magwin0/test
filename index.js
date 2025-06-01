
const allnote=[
{
   id:1, 
    update:'2025-05-27T10:58:33.687Z'},
{update:'2029-05-27T10:58:33.687Z'}
]








class note{

static getAllNote(){
const notes=JSON.parse(localStorage.getItem("notes")) || [];

return notes.sort((a, b) => {
    return new Date(a.update)> new Date(b.update) ?-1 :1
})


}

static saveNote(noteToSave){
let notes=note.getAllNote()
let existnote=notes.find((n)=>{
  
    return n.id==noteToSave.id
})
 
console.log(existnote);
if(existnote){
    existnote.title=noteToSave.title
    existnote.content=noteToSave.content
    existnote.update=new Date().toISOString()

}else{
noteToSave.id=new Date().getTime()
noteToSave.update=new Date().toISOString()
notes.push(noteToSave)

}
localStorage.setItem("notes",JSON.stringify(notes))


}


static deleteNote(id){
    let notes=note.getAllNote()
let exist=notes.filter((n)=>{
    return id!=n.id
})
localStorage.setItem("notes",JSON.stringify(exist))


}

}


