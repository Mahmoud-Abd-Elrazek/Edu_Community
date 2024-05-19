let post = document.createElement('div') ; 
post.innerHTML = `
<div class="feed-tweet">
<div class="img">
 <img src="${obj.userImge}">
 </div>

<div class="feed-tweeter-details">
   <div class="tweeter-details">
      <a href="" class="tweeter-name">${obj.userName}
         <span class="tweeter-handel">@${obj.userhandel}</span>
         <small class="date">${obj.postDate}</small>
         <small class="job-title">${obj.jobTitle}</small>
      </a>
      <a href="" class="post-icon">
         <i class="fa-solid fa-ellipsis"></i>
      </a>
   </div>

   <div class="tweeter-text" dir="${obj.lang}">
      <p>${obj.postContent.text}</p>
    </div>
    <div class="tweeter-img">
        <img src="${obj.postContent.img}">
    </div>

   <div class="tweet-icons" >
      <button class="post-icon comment-icon" title="add comment">
         <i class="fa-solid fa-message"></i>
         <span>${commentsArray.length}</span>
      </button>
      <a href=""class="post-icon" title="share">
         <i class="fa-solid fa-retweet"></i>   
      </a>
      <a href=""class="post-icon" title="love">
         <i class="fa-solid fa-heart"></i>
      </a>

   </div>
</div>

<div class="posts-comments">
   ${mapComments.join(" ")}
    <div class="commentIntput" title="comment this">
        <input type="text" placeholder="comment here">
       <button class="comment-now">
          <i class=" fa-solid fa-circle-arrow-up"></i>
       </button>
    </div>
</div>

</div>


.blur { 
   position: relative;
   overflow-x: hidden;
}
.after-overlay{ 
   position: absolute;
   width: 100%;
   height: 100vh;
   z-index: 5000000;

   background-position: center;
   background-repeat: no-repeat;
   background-size: contain;
   background-size: cover;
   
   
   transition: 0.3s ease-in;
   background-color: rgba(0, 0, 0, 0.8);
   backdrop-filter:saturate(180%) blur(5px);
   /* background-color: rgba(255, 255, 255, 0.3); dark mode */
   /* transform: translate(100% , 100%) ;  */
}

.show-blur-overlay { 
   transform: translate(0% , 0%);
   /* border-radius: 0%; */
}
