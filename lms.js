const http = require('http'); 
// const fileSystem = require('fs');
// const path = require('path');
const { report } = require('process');
const {convert} = require('html-to-text');
const fs = require('fs');
const simpleGit = require('simple-git');
const fetch = require('node-fetch');
const { response } = require('express');
simpleGit().clean(simpleGit.CleanOptions.FORCE);

var link = ''; 
let app = http.createServer((req,res) => {
    

    res.writeHead(200, {
        'Content-Type': 'text/plain', 
        'Access-Control-Allow-Origin': 'https://cfhwin.talentlms.com', 
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type', 
        'Access-Control-Allow-Credentials': true
    }); 
    
    let results = '';

    if(req.method == 'POST') {
        var body = ''; 
        req.on('data', function (data) {
            body += data; 
            link = body;
        }); 
        
        req.on('end', function() {
            //clones repo from body link
            const git = simpleGit(); 
            let folder = link.match(/com.*[.]/g)[0].split(/com[\\/\\]\w*[\\/\\]/g)[1].slice(0, -1); 
            git.clone(body, `./repos/${folder}`);
        })

        setTimeout(() => {
            //isolates folder name
            let folder = link.match(/com.*[.]/g)[0].split(/com[\\/\\]\w*[\\/\\]/g)[1].slice(0, -1); 
            
            //executes the script file in the folder
            const { exec, spawn } = require("child_process");
            //copy cloned file contents to a new js file inside the repo folder
            exec(`cat repos/${folder}/script.js >> repos/${folder}.js`, (err, stdout, stderr) => {
                if (err) {
                    console.error(`exec error: ${err}`);
                    return;
                }
                exec(`node repos/${folder}.config.js`, (err, stdout, stderr) => {
                    if (err) {
                        console.error(`exec error: ${err}`);
                        return;
                    }
                    //removes original cloned folder
                    exec(`rm -rf repos/${folder}`, (err, stdout, stderr) => {
                        if (err) {
                            console.error(`exec error: ${err}`);
                            return;
                        }
                    })
                })
            })        
        }, 800);


        const { exec, spawn } = require("child_process");
        exec(`npm --prefix tests/ test`, (err, stdout, stderr) => {
            if (err) {
                console.error(`exec error: ${err}`);
                return;
            }
        })

        
        //setTimeout(() => {
           // reader = fs.createReadStream('tests/test-report.html'); 
           // reader.on('data', function(chunk){
               // results = chunk.toString(); 
               // res.write(results);
               // res.writeProcessing()
                // console.log("WORKINGGG", results)
          //  })
            // let output = fetch("http://127.0.0.1:3000/", {
            //     method:'POST', 
            //     headers: {'Accept': 'plain/text','Content-Type': 'application/json; charset=UTF-8'}, 
            //     body : results
            // });
            // fetch("http://127.0.0.1:3000/", {
            //     method: "PUT", 
            //     headers: {'Accept': 'plain/text','Content-Type': 'text/html'},
            //     body: results
            // })
            // .then(res => res.json())
            // .then(data => console.log(data))
     //   }, 7000)

        // res.setTimeout(9000, () => {
        //     reader = fs.createReadStream('tests/test-report.html'); 
        //     reader.on('data', function(chunk){
        //         results = chunk.toString(); 
        //         res.write(results);
        //         console.log("WORKINGGG", results)
        //     })
        // })
        
    }
    res.write(results);
    res.end(results);

})







app.listen(3000, "127.0.0.1"); 
console.log('Node server running on port 3000');
