import multer from "multer";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const imageStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, path.join(__dirname, `../images`));
    },
    filename: (request, file, callback) => {
        // Definir nome único para o arquivo (timestamp + aleatório)
        callback(null, Date.now() + String(Math.floor(Math.random() * 10000)) +
            path.extname(file.originalname)); 
    }
});


const imageUpload = multer({
    storage: imageStorage,
    fileFilter(request, file, callback) {
        // Filtra para aceitar apenas png, jpg ou jpeg
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            return callback(new Error("Por favor, envie apenas arquivos jpg ou png!"));
        }
        callback(null, true);  
    }
});

export default imageUpload;
