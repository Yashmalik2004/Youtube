

const rootElement = document.getElementById("root");

const showTrendingVideos = (data) => { // for api call
// const showTrendingVideos = () => { // for offline call
  const { list } = data;
  list.forEach((video) => {
    const {
      author,
      title,
      publishedText,
      viewCountText,
      authorThumbnails,
      videoThumbnails,
      videoId,
    } = video;

    const newDiv = document.createElement("div");
    newDiv.className = "video-card";
    newDiv.innerHTML = `
      <div>
        <img class='video-thumbnail' src="${videoThumbnails[3].url}"> 
      </div>
      <div class='card-footer-container'>
        <div class='video-author-img-container'>
          <img src="${authorThumbnails[1].url}">    
        </div>
        <div class='video-info-container'>
          <p>${title}</p>
          <div class='video-metadata-container'>
            <p>${author}</p>
            <div class='dot-v1'></div>
            <p>${viewCountText}</p>
            <div class='dot-v1'></div>
            <p>${publishedText}</p>
          </div>
          
        </div>
      </div>
      `;
      newDiv.addEventListener('click',()=>{
      window.open(`./NewPage/newpage.html?videoId=${videoId}`,"_self")
    });

    rootElement.appendChild(newDiv);
  });
};

const getTrendingVideos = () => {
    const request = fetch("https://youtube138.p.rapidapi.com/v2/trending", {
        method: "GET",
        headers: {
            "x-rapidapi-host": "youtube138.p.rapidapi.com",
            "x-rapidapi-key": "YASH MALIK",
        },
    });

    request.then((resp) => {
        const pr2 = resp.json();
        pr2.then((data) => {
          showTrendingVideos(data); // for api call
        });
      });
      // showTrendingVideos(); // for offline call
};

getTrendingVideos(); // for api purpose

const getSuggestionAPI = (search) => {
  console.log("API CALLED...", search);
  const request = fetch(`https://youtube138.p.rapidapi.com/auto-complete/?q=${search}&hl=en&gl=US`, {
    method: "GET",
    headers: {
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
    "x-rapidapi-key": "a3e1a43d1cmshc780918109af492p11a868jsn9ee0f6a88eca",
    },
  });
  request.then((response) => {
    const pr2=response.json();

    pr2.then((data)=>{
      // console.log("result: ",data);
      renderSuggestionData(data); //closed for api purpose
    })

  }).catch((err) =>{
    alert("Suggestion error: ",err.message);
  })
  // renderSuggestionData(); // for offline call
};

let id = null;

const searchContainerElement = document.getElementById(
  "search-suggestion-container",
);
const searchInput = document.getElementById("searchText-input");

const getSmartSuggestion = (txt) => {
  clearTimeout(id);
  id = setTimeout(() => {
    getSuggestionAPI(txt);
  }, 600);
};

const HandleAutoSuggest = (e) => {
  const search = e.target.value;

  getSmartSuggestion(search);
};

const renderSuggestionData = (obj) => {
  const dummyOBJ = {
    query: "comedy",
    results: [
      "comedy",
      "comedy club",
      "comedy movies",
      "comedy stand up",
      "comedy nights with champions",
      "comedy darbar",
      "comedy scenes telugu",
      "comedy movies 2025 full movie",
      "comedy movies free",
      "comedy movies hindi full",
      "comedy scenes tamil",
      "comedy special",
      "comedy video",
      "comedy central",
    ],
  };

  searchContainerElement.innerHTML = "";
  const { query, results } =/*dummyOBJ*/obj;

  results.slice(0, 10).forEach((result) => {
    const newText = document.createElement("p");
    newText.innerHTML = `<b>${result.substring(0, query.length)}</b>${result.substring(query.length)}`;
    newText.addEventListener("click", (e) => {
      searchInput.value = e.target.innerText;
      searchContainerElement.innerHTML = "";
    });
    searchContainerElement.appendChild(newText);
  });
};

const handleSearch = () => {
  const inputElement = document.getElementById("searchText-input");
  const val = inputElement ? inputElement.value : "";
  if (val.trim()) {
    window.location.href = `searchPage/search-pg.html?searchText=${encodeURIComponent(val)}`;
  } else {
    alert("Please enter a search term");
  }
};

const showHistoryOnSearch=()=>{
  searchInput.addEventListener('click',()=>{
    
  })
};

const takeToHistory = ()=>{
  window.open("./history/history.html");
};
