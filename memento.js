function createPhotoEditor(){
    let photo ='original photo';
    return{
        edit(newPhoto){
            photo = newPhoto;
        },
        save(){
            return photo;
        },
        undo(savedPhoto){
            photo=savedPhoto;
        },
        show(){
            console.log(photo);
        }
    }
}
const editor = createPhotoEditor();
editor.show();
const savedPhoto = editor.save();
editor.edit("Bright Photo");
editor.show();
editor.undo(savedPhoto);
editor.show();
