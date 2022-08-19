# Talent LMS code 
document.querySelector(".icon-pencil").addEventListener("click", () => {
	let finalContent = "";
	let link = ""; 
	alert("Make sure your link is in the correct format before submitting! e.g. 'https://github.com/user/repo-name.git'");
		document.querySelector(".tl-complete-button-assignment").addEventListener("mouseover", () => {
           	let regex = /git\b/;
			finalContent = document.querySelector(".tl-assignment-reply-editor").textContent;
			if(!regex.test(finalContent) || !/https:/.test(finalContent)){
               alert("You are about to submit an incorrect link format. Please use the HTTPS remote repo link from github. The link should look similar to this: 'https://github.com/username/repo-name.git'. Wait 10 seconds and try again.");
				document.querySelector(".tl-complete-button-assignment").classList.add('disabled'); 
				setTimeout(() => {
					document.querySelector(".tl-complete-button-assignment").classList.remove('disabled');  
				}, 10000)
			} else{
            	localStorage.setItem("link", finalContent);
				link = localStorage.getItem("link"); 
				const response = fetch("http://127.0.0.1:3000/", {
					method: 'POST',
					headers: {'Accept': 'plain/text','Content-Type': 'application/json; charset=UTF-8'},
					body: link
				}); 
			}
        })
})
