const val = window.localStorage.getItem('video_history');
const arr = val ? JSON.parse(val) : [];

const rootElement = document.getElementById('root');

arr.reverse().forEach((videoId) => {
  const newDiv = document.createElement("div");

  newDiv.innerHTML = `
    <iframe width="360" height="315"
      src="https://www.youtube.com/embed/${videoId}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  `;

  rootElement.appendChild(newDiv);
});
