import e from 'express'

const app = e()

type Res = {
    send: (thingToSend: string) => void 
}
import {
    insults,
    GenerateInsult
} from 'demotivator'

app.get('/insult', (res: Res) => res.send(GenerateInsult()))
app.get('/insults', (res: Res) => res.send(insults))