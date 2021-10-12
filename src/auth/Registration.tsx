import React from "react";
import { useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore"


//Now import this 
import 'firebase/firestore';
import { db } from "../config/firebaseConfig";

const createCharacter = (uid, nickname) => {
    return db.collection("users").doc(uid).set({
        exp: 0,
        level: 1,
        nextLevel: 100,
        language: 0,
        isOnline: true,
        name: nickname,
        role: "player",
        uid,
        stats: {
            agi: 1,
            def: 1,
            dmg: 1,
            int: 1,
            perc: 1,
            str: 1,
            tough: 1,
            vit: 1,
            luck: 0,
        },
        buildings: {
            agora: 1,
            gold_mine: 1,
            gymnasion: 1,
            hippodrome: 1,
            mausoleum: 0,
            quarry: 1,
            sawmill: 1,
            temple: 0,
            theatre: 0,
        }
    })

    })
}