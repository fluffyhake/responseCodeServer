import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { v4 as uuid } from 'uuid';
import https from 'https';
import fs from 'fs';
import path from 'path';

const app: Express = express();
const port = 3001;
let counter: number = 0


app.get("*", (req: Request, res: Response) => {
    const response: String = uuid();

    // if(req.url.slice(-1) === "/"){
    //     res.status(403).send()
    // }


    const min = 1;
    const max = 6000;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    // Reset counter after reaching 10

    if (random === 1 || random === 2) {
        res.status(200).send("Express + TypeScript Server " + response);
    } else if (random === 3) {
        // res.status(301).redirect("http://172.28.48.221:3000/dsaadl" + random);
        res.status(403).send("Express + TypeScript Server " + response);
    } else if (random === 4 && req.url.slice(-1) !== "/"){
        res.status(301)
        res.setHeader("Location", req.url + "/")
        res.send()

    }
    else{
        res.status(404).send()
    }
});


// app.listen(port, () => {
//     console.log(`[server]: Server is running at http://localhost:${port}`);
// });


const httpsServer = https.createServer({
    cert: fs.readFileSync(path.resolve(__dirname, '../certs/cert.pem')),
    key: fs.readFileSync(path.resolve(__dirname, '../certs/key.pem'))
  }, app);
  
  httpsServer
   .listen(3001, () => {
      console.log('Server listening on port 3001. URL: https://localhost:3001');
    });