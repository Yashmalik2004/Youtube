
const searchTextQuery = window.location.search;
const queryArr = searchTextQuery.split("=");
const videoId = queryArr[queryArr.length - 1];

const iframeElement= document.getElementsByTagName("iframe")[0];

iframeElement.setAttribute('src',`https://www.youtube.com/embed/${videoId}`);


/* Here first we took all the values from the local storage, it looks like array but it was a STRING, i.e., because its in JSON format, so we converted it into an array by using parse method, because we took value from local storage, converted it, used it, added it and other new values ( video id) from other searched video into the array, then finally converted the array into the string using stringify function, and then finally add this JSON value into the Local storage*/ 
const val=window.localStorage.getItem('video_history') ?? "[]"; /* "??" => means NULLISH COALESCING OPERATOR, which only check if LHS have null or undefined value, if yes then use RHS value, else use LHS value. It is a fallback function. On RHS we put square bracket in double quotes because JSON requires String value.*/
const arr=JSON.parse(val); // to convert JSON to Object
arr.push(videoId);
const str=JSON.stringify(arr); // to convert JS object to JSON.
window.localStorage.setItem('video_history',str); 