const express = require("express")
const router = express.Router()
const db = require("../db/index");


// CHART FOR FLOOD

router.get("/flood/jan", async (req, res, next) => {
    try {
        const result = await db.query("SELECT * FROM thereports WHERE category = 'flood' AND month = 'jan'");
        res.json(result.rows.length)
        // console.log(result.length)
    } catch (error) {
        next(error)
    }
})

router.get("/flood/feb", async (req, res, next) => {
    try {
        const result = await db.query("SELECT * FROM thereports WHERE category = 'flood' AND month = 'feb'");
        res.json(result.rows.length)
        // console.log(result.rows)
    } catch (error) {
        next(error)
    }
})

router.get("/flood/mar", async (req, res, next) => {
    try {
        const result = await db.query("SELECT * FROM thereports WHERE category = 'flood' AND month = 'mar'");
        res.json(result.rows.length)
        // console.log(result.length)
    } catch (error) {
        next(error)
    }
})


// Chart for Health emergency

router.get("/health/jan", async (req, res, next) => {
    try {
        const result = await db.query("SELECT * FROM thereports WHERE category = 'health emergency' AND month = 'jan'");
        res.json(result.rows.length)
        // console.log(result.length)
    } catch (error) {
        next(error)
    }
})

router.get("/health/feb", async (req, res, next) => {
    try {
        const result = await db.query("SELECT * FROM thereports WHERE category = 'health emergency' AND month = 'feb'");
        res.json(result.rows.length)
        // console.log(result.length)
    } catch (error) {
        next(error)
    }
})

router.get("/health/mar", async (req, res, next) => {
    try {
        const result = await db.query("SELECT * FROM thereports WHERE category = 'health emergency' AND month = 'mar'");
        res.json(result.rows.length)
        // console.log(result.length)
    } catch (error) {
        next(error)
    }
})



// Chart for Armed Robbery

router.get("/robbery/jan", async (req, res, next) => {
    try {
        const result = await db.query("SELECT * FROM thereports WHERE category = 'armed robbery' AND month = 'jan'");
        res.json(result.rows.length)
        // console.log(result.length)
    } catch (error) {
        next(error)
    }
})

router.get("/robbery/feb", async (req, res, next) => {
    try {
        const result = await db.query("SELECT * FROM thereports WHERE category = 'armed robbery' AND month = 'feb'");
        res.json(result.rows.length)
        // console.log(result.rows)
    } catch (error) {
        next(error)
    }
})

router.get("/robbery/mar", async (req, res, next) => {
    try {
        const result = await db.query("SELECT * FROM thereports WHERE category = 'armed robbery' AND month = 'mar'");
        res.json(result.rows.length)
        // console.log(result.rows)
    } catch (error) {
        next(error)
    }
})































module.exports = router;