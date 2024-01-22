// how many time use any sentence in paragraph and first time which index find  this sentence, return index number?   

const sentence = `Learn with Sumit is all about teaching web development skills and techniques in an 
                    efficient and practical manner. If you are just getting started in web development, 
                    Learn with Sumit has all the tools you need to learn the newest and most popular technologies 
                    to convert you from a no stack to full stack developer.
                    Learn with Sumit also deep dives into advanced topics using  the latest best practices for you seasoned web developers. `;

const matches = sentence.match(/sumit/gi);   //return array, g - global, i - case-sensitive
console.log(matches);

const occurances = matches.length;
console.log(occurances);  // return 3




// ------------ if user search a name and if this name is not exist an array what happen ------------
// try some error handing


const sentence1 = `Learn with Sumit is all about teaching web development skills and techniques in an 
                    efficient and practical manner. If you are just getting started in web development, 
                    Learn with Sumit has all the tools you need to learn the newest and most popular technologies 
                    to convert you from a no stack to full stack developer.
                    Learn with Sumit also deep dives into advanced topics using  the latest best practices for you seasoned web developers. `;

const matches1 = sentence1.match(/sumits/gi);   //return array, g - global, i - case-sensitive
const occurances1 = matches1 ? matches.length : 0;    // if any word match, then return this match length otherwise return 0
console.log(occurances1);




// ----------------- First time find position ? -------------------

// search return first position, if not found return -1


let position = sentence.search(/sumit/i);
position = position >= 0 ? position : "not found!";  

console.log(position);  
