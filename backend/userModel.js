const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {type: String, required: true },
    email: {type: String, required: true, unique: true },
    password: {type: String, required: true },
    //actual scores
    CACScore: {type: Number, default: 0},
    FlagScore: {type: Number, default: 0},
    // Scores
    bulgarianScore: {type: Number, default: -1},
    croatianScore: {type: Number, default: -1},
    czechScore: {type: Number, default: -1},
    danishScore: {type: Number, default: -1},
    dutchScore: {type: Number, default: -1},
    finnishScore: {type: Number, default: -1},
    frenchScore: {type: Number, default: -1},
    germanScore: {type: Number, default: -1},
    greekScore: {type: Number, default: -1},
    hungarianScore: {type: Number, default: -1},
    italianScore: {type: Number, default: -1},
    polishScore: {type: Number, default: -1},
    portugueseScore: {type: Number, default: -1},
    romanianScore: {type: Number, default: -1},
    russianScore: {type: Number, default: -1},
    spanishScore: {type: Number, default: -1},
    swedishScore: {type: Number, default: -1},
    turkishScore: {type: Number, default: -1},
    //Langagues
    bulgarian: {type: Number, default: 0},
    croatian: {type: Number, default: 0},
    czech: {type: Number, default: 0},
    danish: {type: Number, default: 0},
    dutch: {type: Number, default: 0},
    finnish: {type: Number, default: 0},
    french: {type: Number, default: 0},
    german: {type: Number, default: 0},
    greek: {type: Number, default: 0},
    hungarian: {type: Number, default: 0},
    italian: {type: Number, default: 0},
    polish: {type: Number, default: 0},
    portuguese: {type: Number, default: 0},
    romanian: {type: Number, default: 0},
    russian: {type: Number, default: 0},
    spanish: {type: Number, default: 0},
    swedish: {type: Number, default: 0},
    turkish: {type: Number, default: 0},


})

const UserModel = mongoose.model("UserModel", userSchema);

module.exports = UserModel;