import { Router } from 'express';

// Middleware para lidar com multipart/form-data:
import multer from "multer";

import { Readable } from "stream";

// Prove interface para litura de dados do Readable
import readLine from "readline";

import medInterface from './Meds/interface';
import medHeader from './Meds/header';

const router = Router();
const multerConfig = multer();

router.post(
  '/meds',
  async (req: any, res: any) => {
    const medsJson = req.body
    const meds = JSON.stringify(medsJson)
    console.log(meds);

    medHeader.forEach((header) => {
      // if(!(header in  JSON.parse(medsJson))) console.log(`falta o header ${header}`)
    })

    return res.json({test: 'ok'})
  }
);

// router.post(
//   '/meds',
//   multerConfig.single('file'),  // Recebe um arquivo e nomeia file
//   async (request: any, response: any) => {
//     const { file } = request;
//     const { buffer } = file;

//     const readableFile = new Readable();
//     readableFile.push(buffer);
//     readableFile.push(null)

//     const medsLine = readLine.createInterface({
//       input: readableFile
//     });


//     const meds: medInterface[] = [];
//     let cont = 0;

//     for await(let line of medsLine) {
//       if(cont === 0) {
//         cont++;
//       } 
//       // const medsLineSplit = line.split(';');

//       // if(cont == 0) {
//       //   medHeader.forEach((header: string, index: number) => {
//       //     const headerWhithoutAccent = medsLineSplit[index].replace(
//       //       /([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, 
//       //       ''
//       //     );
//       //     // if(header !==  medsLineSplit[index]) console.log(`erro no header ${head}`);
//       //   });

//       //   cont++;
//       // } else {
//       //   meds.push({
//       //     substancia: medsLineSplit[0],
//       //   });
//       // }
//     }

//     return response.json({test: 'ok'});
//   }
// );

export { router };