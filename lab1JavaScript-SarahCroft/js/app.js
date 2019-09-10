// create a variable for the button
const btn = document.querySelector("#tweet");
//create a variable called tweets and assign it to an empty array
var tweets = [];


function render() {
    const newTweet = tweets.map(function(tweetTxt) {
        return `
        <div>
        <div id="paraName"><p id="name">Sarah Croft</p><p class="username">@Misspeach94</p></div>
          <div class="fbTweet">
            <img
              id="avatar"
              src="https://avatars1.githubusercontent.com/u/39812982?v=4"
              alt=""
            />
            <textarea>${tweetTxt}</textarea>
            <div class="imgGifPoll"></div>
          </div>
          <div class="fb">
            <section>
              <div id="inserts" class="btn-group mr-2">
                <button
                  type="button"
                  class="btn btn-secondary mdi mdi-message-outline"
                  aria-label="Insert image"
                ></button>
                <button
                  type="button"
                  class="btn btn-secondary mdi mdi-twitter-retweet"
                  aria-label="Insert gif"
                ></button>
                <button
                  type="button"
                  class="btn btn-secondary mdi mdi-heart"
                  aria-label="Insert Poll"
                  style=""
                ></button>
                <button
                  type="button"
                  class="btn btn-secondary mdi mdi-upload"
                  aria-label="Insert emoji"
                ></button>
              </div>
            </section>
          </div>
        </div>
            `;
  })
    .join("");

    const main = document.querySelector("main");
    main.innerHTML = newTweet;
}

//add a click event to the tweet button
//use unshift to make sure that the new tweet comes first
function addTweet(e) {
  e.preventDefault();
  let txt = document.getElementById("tweetTextArea").value;
      tweets.unshift(txt);
      render();
}
//adds the event listener to the button and calls the function
btn.addEventListener("click", addTweet);
      render();