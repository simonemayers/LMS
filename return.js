// setTimeout(() => {
//     reader = fs.createReadStream('tests/test-report.html'); 
//     reader.on('data', function(chunk){
//         results = chunk.toString(); 
//         res.write(results);
//         res.writeProcessing()
//         console.log("WORKINGGG", results)
//     })
//     let output = fetch("http://127.0.0.1:3000/", {
//         method:'POST', 
//         headers: {'Accept': 'plain/text','Content-Type': 'application/json; charset=UTF-8'}, 
//         body : results
//     });
// }, 7000)