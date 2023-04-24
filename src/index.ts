import express, {Request, Response} from 'express';
const app = express();
const port = 3000;


app.get('/', (req: Request, res: Response) => {
    res.send('hello world!!! fhfh')
})

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})