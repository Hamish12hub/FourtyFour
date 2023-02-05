const express = require('express')
const app = express()
const cors = require("cors")
const model = require('./userModel')
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json());

mongoose.connect(
    "mongodb+srv://hamishsmongodb:Qid5A97Jb4R@cluster0.hfavqp6.mongodb.net/fourtyFour?retryWrites=true&w=majority"
)

app.listen("1337", () => console.log("server started on port 1337"));

app.post("/register", async (req, res) => {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    try{
        const user = await model.create({
        name: req.body.name,
        email: req.body.email,
        password: newPassword,
        });
        const token =  await jwt.sign(
            {email: req.body.email, name: req.body.name},
            "secret123"
        );
        res.json({status: "ok1", token: token})
    }catch(err){
        res.json({status: "Duplicate Email"});
    }
})

app.post('/login', async (req, res) => {
    const email = req.body.emailLogin;
    const password = req.body.passwordLogin;
    const user = await model.findOne({email: email});
    if(user == undefined){
        res.json({ status : "wrong Email or Password"})
    }else{
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(isPasswordValid){
            const token =  await jwt.sign(
                {email: user.email, name: user.name},
                "secret123"
            );
            res.json({ status: "ok", token: token });
        }else{
            res.json({ status : "wrong Email or Password"})
        }
    }
});

app.get('/NameEnquiry', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')

    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', yourName: user.name })
    }else{
        res.json('Invalid Token');
    }
})

app.get('/CACScore', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', CACScore: user.CACScore })
    }else{
        res.json('Invalid Token');
    }
})

app.post('/UpdatingCACScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {CACScore: NewScore}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});


// Bulgarian
// creating the board
app.get('/BulgarianEnquiry', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', bulgarianScore: user.bulgarianScore })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/CreatingBulgarian', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {bulgarianScore: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/DeletingBulgarian', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {bulgarianScore: -1}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
//changing the score
app.get('/BulgarianScore', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', bulgarian: user.bulgarian })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/UpdatingBulgarianScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {bulgarian: NewScore}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/resetingBulgarianScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    // const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {bulgarian: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});

// Croatian
// creating the board
app.get('/CroatianEnquiry', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', croatianScore: user.croatianScore })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/CreatingCroatian', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {croatianScore: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/DeletingCroatian', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {croatianScore: -1}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
//changing the score
app.get('/CroatianScore', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', croatian: user.croatian })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/UpdatingCroatianScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {croatian: NewScore}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/resetingCroatianScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    // const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {croatian: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});

// Czech
// creating the board
app.get('/CzechEnquiry', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', czechScore: user.czechScore })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/CreatingCzech', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {czechScore: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/DeletingCzech', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {czechScore: -1}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
//changing the score
app.get('/CzechScore', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', czech: user.czech })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/UpdatingCzechScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {czech: NewScore}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/resetingCzechScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    // const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {czech: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});

// Danish
// creating the board
app.get('/DanishEnquiry', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', danishScore: user.danishScore })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/CreatingDanish', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {danishScore: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/DeletingDanish', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {danishScore: -1}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
//changing the score
app.get('/DanishScore', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', danish: user.danish })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/UpdatingDanishScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {danish: NewScore}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/resetingDanishScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    // const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {danish: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});

// Dutch
// creating the board
app.get('/DutchEnquiry', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', dutchScore: user.dutchScore })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/CreatingDutch', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {dutchScore: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/DeletingDutch', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {dutchScore: -1}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
//changing the score
app.get('/DutchScore', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', dutch: user.dutch })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/UpdatingDutchScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {dutch: NewScore}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/resetingDutchScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    // const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {dutch: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});

// Finnish
// creating the board
app.get('/FinnishEnquiry', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', finnishScore: user.finnishScore })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/CreatingFinnish', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {finnishScore: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/DeletingFinnish', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {finnishScore: -1}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
//changing the score
app.get('/FinnishScore', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', finnish: user.finnish })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/UpdatingFinnishScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {finnish: NewScore}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/resetingFinnishScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    // const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {finnish: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});

// French
// creating the board
app.get('/FrenchEnquiry', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', frenchScore: user.frenchScore })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/CreatingFrench', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {frenchScore: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/DeletingFrench', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {frenchScore: -1}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
//changing the score
app.get('/FrenchScore', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', french: user.french })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/UpdatingFrenchScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {french: NewScore}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/resetingFrenchScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    // const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {french: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});

// German
// creating the board
app.get('/GermanEnquiry', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', germanScore: user.germanScore })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/CreatingGerman', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {germanScore: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/DeletingGerman', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {germanScore: -1}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
//changing the score
app.get('/GermanScore', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', german: user.german })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/UpdatingGermanScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {german: NewScore}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/resetingGermanScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    // const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {german: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});

// Greek
// creating the board
app.get('/GreekEnquiry', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', greekScore: user.greekScore })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/CreatingGreek', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {greekScore: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/DeletingGreek', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {greekScore: -1}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
//changing the score
app.get('/GreekScore', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', greek: user.greek })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/UpdatingGreekScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {greek: NewScore}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/resetingGreekScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    // const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {greek: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});

// Hungarian
// creating the board
app.get('/HungarianEnquiry', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', hungarianScore: user.hungarianScore })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/CreatingHungarian', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {hungarianScore: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/DeletingHungarian', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {hungarianScore: -1}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
//changing the score
app.get('/HungarianScore', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', hungarian: user.hungarian })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/UpdatingHungarianScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {hungarian: NewScore}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/resetingHungarianScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    // const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {hungarian: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});

//  Italian
// creating the board
app.get('/ItalianEnquiry', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', italianScore: user.italianScore })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/CreatingItalian', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {italianScore: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/DeletingItalian', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {italianScore: -1}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
//changing the score
app.get('/ItalianScore', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', italian: user.italian })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/UpdatingItalianScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {italian: NewScore}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/resetingItalianScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    // const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {italian: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});

// Polish
// creating the board
app.get('/PolishEnquiry', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', polishScore: user.polishScore })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/CreatingPolish', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {polishScore: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/DeletingPolish', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {polishScore: -1}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
//changing the score
app.get('/PolishScore', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', polish: user.polish })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/UpdatingPolishScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {polish: NewScore}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/resetingPolishScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    // const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {polish: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});

// Portuguese
// creating the board
app.get('/PortugueseEnquiry', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', portugueseScore: user.portugueseScore })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/CreatingPortuguese', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {portugueseScore: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/DeletingPortuguese', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {portugueseScore: -1}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
//changing the score
app.get('/PortugueseScore', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', portuguese: user.portuguese })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/UpdatingPortugueseScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {portuguese: NewScore}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/resetingPortugueseScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    // const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {portuguese: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});

// Romanian
// creating the board
app.get('/RomanianEnquiry', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', romanianScore: user.romanianScore })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/CreatingRomanian', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {romanianScore: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/DeletingRomanian', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {romanianScore: -1}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
//changing the score
app.get('/RomanianScore', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', romanian: user.romanian })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/UpdatingRomanianScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {romanian: NewScore}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/resetingRomanianScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    // const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {romanian: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});


// Russian
// creating the board
app.get('/RussianEnquiry', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', russianScore: user.russianScore })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/CreatingRussian', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {russianScore: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/DeletingRussian', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {russianScore: -1}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
//changing the score
app.get('/RussianScore', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', russian: user.russian })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/UpdatingRussianScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {russian: NewScore}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/resetingRussianScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    // const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {russian: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});

// Spanish
// creating the board
app.get('/SpanishEnquiry', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', spanishScore: user.spanishScore })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/CreatingSpanish', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {spanishScore: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/DeletingSpanish', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {spanishScore: -1}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
//changing the score
app.get('/SpanishScore', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', spanish: user.spanish })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/UpdatingSpanishScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {spanish: NewScore}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/resetingSpanishScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    // const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {spanish: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});

// Swedish
// creating the board
app.get('/SwedishEnquiry', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', swedishScore: user.swedishScore })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/CreatingSwedish', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {swedishScore: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/DeletingSwedish', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {swedishScore: -1}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
//changing the score
app.get('/SwedishScore', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', swedish: user.swedish })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/UpdatingSwedishScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {swedish: NewScore}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/resetingSwedishScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    // const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {swedish: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});

// Turkish
// creating the board
app.get('/TurkishEnquiry', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', turkishScore: user.turkishScore })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/CreatingTurkish', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {turkishScore: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/DeletingTurkish', async (req, res) => {
    const token = req.headers["x-access-token"]
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {turkishScore: -1}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
//changing the score
app.get('/TurkishScore', async (req, res) => {
    const token = req.headers["x-access-token"];
    const isValidToken = jwt.verify(token, 'secret123')
    if(isValidToken){
        const email = isValidToken.email;
        const user = await model.findOne({email: email});
        res.json({status: 'ok', turkish: user.turkish })
    }else{
        res.json('Invalid Token');
    }
})
app.post('/UpdatingTurkishScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {turkish: NewScore}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});
app.post('/resetingTurkishScore', async (req, res) => {
    const token = req.headers["x-access-token"]
    // const NewScore = req.body.score;
    const isTokenValid = await jwt.verify(token, "secret123");
    const email = isTokenValid.email
    if(isTokenValid){
        await model.updateOne({email: email}, {$set: {turkish: 0}})
        res.json({status: "ok"})
    }else{
        res.json({ status: "Invalid Token"})
    }
});