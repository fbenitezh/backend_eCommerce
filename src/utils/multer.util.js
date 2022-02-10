import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination:path.resolve() + "/public/img/profiles/",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
});

export const upload = multer({storage});