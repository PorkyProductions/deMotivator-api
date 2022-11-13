import e from 'express';
const app = e();
import { insults, GenerateInsult } from 'demotivator';
app.get('/insult', (res) => res.send(GenerateInsult()));
app.get('/insults', (res) => res.send(insults));
