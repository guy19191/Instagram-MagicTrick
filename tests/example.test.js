const puppeteer = require("puppeteer")
var express = require('express');
var router = express.Router();
var cors = require('cors');
const user = require('./config');

const { clickSelector, clickXpath, typetext } = require('../lib/helpers');
const { PASS } = require("./config");
router.post('/send', (req, res, next) => {
    (async() => {
        let browsser
        let page
        let instName=req.body.user
        let conent = req.body.num
        let timer = Number(req.body.time)
        await new Promise(r => setTimeout(r,timer));
             browser = await puppeteer.launch({headless:true})
             page = await browser.newPage()
             await page.goto("http://instegram.com")
             await page.waitForSelector('input[name="username"]')
             await page.type('input[name="username"]', user.USER)
             await page.type('input[name="password"]', user.PASS)
             await clickSelector(page,'button[type="submit"]')
             await clickXpath(page, '//button[contains(text(), "Not Now")]')
             await clickXpath(page, '//button[contains(text(), "Not Now")]')
             await page.goto("https://www.instagram.com/"+instName+"/")
             await clickXpath(page, '//button[contains(text(), "Message")]')
             await page.waitForSelector('textarea[placeholder="Message..."]')
             await page.type('textarea[placeholder="Message..."]', conent)
             await page.keyboard.press('Enter')
             await page.close()
             await browser.close()
             res.send();
             res.end();
        })()
    })

   

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3004)
