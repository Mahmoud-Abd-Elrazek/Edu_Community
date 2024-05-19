
const students = [
    {
        studentId: '59855' , 
        studentName: 'Mahmoud Abderazek', 
        studentJobTitle: 'student', 
        studentSSN: '11214545464', 
        studentProfileImge: 'images/profile1.jpg', 
        studentHandel: '7hod_.h', 
        studentPosts: [
            {
                postLanguageDir: 'ltr',
                postDate: `2024-05-010`, 
                postContent: {
                    postText: 'Hello there , totay we will talk about postpead Commuintey and how can you use it.' , 
                    postImgr: 'images/obj1.jpg'
                } , 
                postComments:[
                    {
                        personName: 'Ahmed Jaml',
                        personImge: 'images/obj1.jpg', 
                        commentContent: 'it is a greeeeeeet work' ,
                        personHandle: 'gimmy_' , 
                        currentDate:`2024-05-01`
                    }
                ]
            }
        ] ,
    },
     
] ;


let objectAccount = students[0] ;
document.querySelector(`.new-tweet .img > img`).src = objectAccount.studentProfileImge ; 
document.querySelector(`.main-account`).innerHTML = `
<a href="../profileProject/index.html" class="profile-info">
    <div class="img">
        <img src="${objectAccount.studentProfileImge}" alt="profile image" width="30px">
    </div>
    <div class="name">
        <h4>${objectAccount.studentName}</h4>
        <span>${objectAccount.studentHandel}</span>
        <span style="margin-left:6px">Student</span>
    </div>
</a>
    
<i class="fa-solid fa-ellipsis"></i>
` ; 
// console.log(objectAccount); 

const userPosts = [
    {
        userImge:`images/abdo-profile-2.jpg` ,
        userName:`Abdelatty Badwy` , 
        userhandel:`glich_` , 
        jobTitle:`student`,
        postDate: `2024-05-13`, 
        lang:`rtl` , 
        tags:['oop' , 'learning' , 'solid' , 'solid principles' , 'object orinted programming' , 'object orinted design' , 'principle' , 'open close principle' , ['principle']],
        postContent:{
            text: '', 
            img:`images/solid-2.jpg` , 
            comments: [
                {
                    jobTitle:`student`,
                    personImge : `images/user8.jpg` ,
                    commentContent:`it is a greeeeeeet work` , 
                    person: `Ahmed Jaml` , 
                    personHandle: `gimmy`, 
                    currentDate:`2024-05-01`
                } , 
                {
                    jobTitle:`student`,
                    personImge : `images/user2.jpg` ,
                    commentContent:`WOW Ammazing` , 
                    person: `Ahmed Belal` , 
                    personHandle: `b3lal_`, 
                    currentDate:`2024-05-01`,
                }
            ] , 
        } , 
    } ,

    {
        userImge:`images/mod.jpeg` ,
        userName:`Mamdoh Salah` , 
        userhandel:`_doh7` , 
        jobTitle:`student`,
        postDate: `2024-05-13`, 
        lang:`rtl` , 
        tags:['learning'],
        postContent:{
            text: `الدنيا بتروح لإتنين واحد بيسعى أوي ليل نهار وبيحاول ويعافر ، وواحد نيتهُ حلوة وقلبه راضي وبيساعد باللي في إيده ..
            الأول عدل ربنا والتاني رحمة ربنا ،
             ربنا يكتب لنا نصيب ورزق الأتنين ويكتب لنا نجاة من الدنيا وعوض بالأخرة 🤲🏻
            `, 
            img:`` , 
            comments: [
                {
                    jobTitle:`student`,
                    personImge : `images/user8.jpg` ,
                    commentContent:`it is a greeeeeeet work` , 
                    person: `Ahmed Jaml` , 
                    personHandle: `gimmy`, 
                    currentDate:`2024-05-01`
                } , 
                {
                    jobTitle:`student`,
                    personImge : `images/user2.jpg` ,
                    commentContent:`WOW Ammazing` , 
                    person: `Ahmed Belal` , 
                    personHandle: `b3lal_`, 
                    currentDate:`2024-05-01`,
                }
            ] , 
        } , 
    } ,

    {
        userImge:`images/user8.jpg` ,
        userName:`Mohammed Refaat` , 
        userhandel:`r3faat_` , 
        jobTitle:`student`,
        postDate: `2024-05-010`, 
        lang:`rtl`,
        postContent:{
            text:`طيب نقول بسم الله ويلا نشرح يعني ايه Abstraction وليه هو مهم .....` , 
            img:`` , 
            comments: [
                {
                    personImge : `images/user6.jpg` ,
                    commentContent:`it is a greeeeeeet work` , 
                    person: `Mohamed Refaat` , 
                    personHandle: `gimmy`, 
                    currentDate:`2024-05-01`,
                    jobTitle:`student`,

                } , 
                {
                    personImge : `images/obj1.jpg` ,
                    commentContent:`WOW Ammazing` , 
                    person: `Mohammed Refaat` , 
                    personHandle: `mo_r3fat`, 
                    currentDate:`2024-05-01`,
                    jobTitle:`student`,
                }
            ] , 
        } ,
        tags:['oop' , 'learning' , 'abstraction' , 'object orinted programming' , 'object orinted design'],
    } ,
       
    {
        userImge:`images/profile1.jpg` ,
        userName:`Mahmoud Abdelrazek` , 
        userhandel:`7hod_.h` , 
        jobTitle:`student`,
        postDate: `2024-05-010`, 
        postContent:{
            text:`Testing leads to failure,and failure leads to understanding.` , 
            img:`` , 
            lang:`ltr`,
            comments: [
                {
                    personImge : `images/obj1.jpg` ,
                    commentContent:`it is a greeeeeeet work` , 
                    person: `Ahmed Jaml` , 
                    personHandle: `gimmy`, 
                    currentDate:`2024-05-01` ,
                    jobTitle:`student`,
                } , 
                {
                    personImge : `images/obj1.jpg` ,
                    commentContent:`WOW Ammazing` , 
                    person: `Mohammed Refaat` , 
                    personHandle: `mo_r3fat`, 
                    currentDate:`2024-05-01` ,
                    jobTitle:`student`,
                }
            ] , 
        } , 
        tags:['learning']
    } ,

    {
        userImge:`images/gomaaProfil.jpeg` ,
        userName:`Ahmed Gomma` , 
        userhandel:`gomm7_` , 
        jobTitle:`student`,
        postDate: `2024-05-010`, 
        lang:"rtl",
        postContent:{
            text:`
            السلام عليكم النهاردة حابب اتكلم معاكم عن تجربتي ك متطوع في ال icpc Finals وازاي استفدت منها 
اولا انا لما روحت هناك اتعرفت علي ناس كتير اوي في نفس المجال بتاعي وفيه منهم اللي شغال فبالتالي احتكيت اكتر ب ناس عندها خبرة وحاولت علي قد ما قدر اني استفاد منهم وأشوف هما كانوا ماشيين ازاي في فترة الدراسة بتاعتهم واحاول اني أطبق دا في حياتي ويمكن اهم حاجة نصحوني بيها وهي اني اكمل في problem solving  وأنها ازاي هي skill مهمة جدا لطالب حاسبات أو اي حد عايز يبدأ يتعلم برمجة عموما و طبعا لو بدأت فيها و حبيت ال competition تقدر انك تشارك في ال Ecpc و منها توصل لل Acpc و Icpc وطبعا في المسابقة قابلت شخصيات عالمية ومشهورة زي توريست ودا يعتبر الاب الروحي لأي بروبليم سولڤر وشخص زي مايك مؤسس كود فورسيز وبيل بوتشر icpc founder
وفي النهاية حابب اقول انها كانت تجربة ممتعة جداً ومتأكد أنها هتفرق معايا بعد كدا ♥️ ` , 
            img:`images/gomaaShare.jpeg` , 
            lang:`rtl`,
            comments: [
                {
                    personImge : `images/obj1.jpg` ,
                    commentContent:`it is a greeeeeeet work` , 
                    person: `Ahmed Jaml` , 
                    personHandle: `gimmy`, 
                    currentDate:`2024-05-01` ,
                    jobTitle:`student`,
                } , 
                {
                    personImge : `images/obj1.jpg` ,
                    commentContent:`WOW Ammazing` , 
                    person: `Mohammed Refaat` , 
                    personHandle: `mo_r3fat`, 
                    currentDate:`2024-05-01` ,
                    jobTitle:`student`,
                }
            ] , 
        } , 
        tags:['learing' , 'problem solving']
    } ,

    {
        userImge:`images/profile1.jpg` ,
        userName:`Mahmoud Abderazek` , 
        userhandel:`h7da_` , 
        jobTitle:`student`,
        postDate: `2024-05-010`, 
        lang:`rtl` , 
        tags:['oop' , 'learning' , 'encapsulation' , 'object orinted programming' , 'popular' ,],
        postContent:{
            text:`السلام عليكم يا PostPeadia Community 
            انشاء الله ف ال post  دي هشارك معكم مفهوم ال encapsulation  ف ال oop 
            ال encapsulation   أو ال data hiding  هو وضع الجوانب ' اللي  متوقع تغيرها ف المستقبل ف برنامج ما ' ف مكان محدد وإخفاء تفاصيل تنفيذها بحيث  لا تؤثر علي الاماكن الاخري التي تستخدمها ف حال تم تغيرها.
            ودا بيضمن ان مفيش حد يقدر يغير ف Data attributes  الموجوده بداخل ال object   غير ال member functions  بتاعت ال object  نفسه .
            طيب السؤال . ازاي هنغير ف ال data   ؟ 
            ف الحاله دي هيكون ف واجهة استخدام خاصه بيحطها الProgrmmer  ومن خلالها يمكن التلاعب والتغير ف ال data  الخاصه ب ال object  .
            هنا ممكن ناخد مثال عشان نوضح اكتر .. 
            لو عندي class  موجود فيه data attributes  ل طالب مثلا ..
            الطالب عندي Name  وانا استخدمت ال attribute دا خارج ال class  مثلا اخدته عملت عليه Validation  وبعد أرسلت ال name   دا لأكتر من function  كل  function  بتعمل مهمه مختلفة.
            المهم يعني ال attribute  اللي اسمه name  دا موجود ف أماكن كتير ال program  بتاعي .
            السوال هنا ماذا لو اكتشفت انك محتاج لكل class student  يكون عندك first name  وكمان last name  ؟ 😂🤔
            اكيد انت دلوقتي تخيلت معاي كميه التغيرات اللي هيحصل ف الكود اللي انت كاتبه ..
            حرفيا هتغير ف كل مكان انت استخدمت فيه ال attribute  اللي اسمه name  وكمان تغيره ال first name and last name  👎.
            هنا بقا يظهر ال encapsulation   عشان يخليك تغير ف مكان واحد وبس وهو ال class  نفسه .
            ازاي بقا ؟ عن طريق function  بسيطه هنسميها مثلا getName()  حرفيا ال فنكشن بتعمل return  لل data  اللي انت محتاجها.
             طيب ازاي ممكن احقق ال encapsulation  ؟؟ 
            ودا بيحصل من خلال ال getter  and setter functions  يعني بدل ما انا اوصل واغير ف ال data  بطريقه مباشره هستخدم ال functions  .
            وكمان بنحقق ال encapsulation  من خلال access spcifire  ودي هي اللي بتسمحلك  انك تخلي ال data prvaivte or protected or public  المهم يعني ف لغات البرمجه ف levels  عشان إن اقدر احمي ال  data  من التعديل عليها .
            السؤال هنا .. اخفي ال data لحد امتا يعني هل اخفي كل ال data  وكمان اخفي ال functions  عشان اطبق ال encapsulation  ؟ 
             الاجابه طبقه   as much as possible  بقدر الإمكان وهي دي القاعده اللي بنمشي عليها.
            بس في النهايه متنساش الفيد باك ف كومنت 🤙🤩❤.
            علمكم الله بما ينفعكم وزادكم علما.
            ` , 
            img:`` , 
            comments: [
                {
                    jobTitle:`student`,
                    personImge : `images/user8.jpg` ,
                    commentContent:`it is a greeeeeeet work` , 
                    person: `Ahmed Jaml` , 
                    personHandle: `gimmy`, 
                    currentDate:`2024-05-01`
                } , 
                {
                    jobTitle:`student`,
                    personImge : `images/user2.jpg` ,
                    commentContent:`WOW Ammazing` , 
                    person: `Ahmed Belal` , 
                    personHandle: `b3lal_`, 
                    currentDate:`2024-05-01`,
                }
            ] , 
        } , 
    } ,
    
    {
        userImge:`images/user13.jpg` ,
        userName:`Ahmed Belal` , 
        userhandel:`b3lal_` , 
        jobTitle:`student`,
        postDate: `2024-05-010`, 
        lang:`rtl` , 
        tags:['learning' , 'pobular','lecturs'],
        postContent:{
            text:` الناس اللي محضرتش و محتاجه تذاكر  .. 😁 ان شاء الله  هنلخص المحاضره الاخيره للدكتور عماد وايه هي اهم النقاط اللي كان بيتكلم فيها علشان ان شاء الله لما تروح تذاكر تكون مستوعب المحاضره استنو البوست كمان ساعه علي البروفايل بتاعي 😘😍✔️` , 
            img:`` , 
            comments: [
                {
                    personImge : `images/obj1.jpg` ,
                    commentContent:`WOW Ammazing` , 
                    person: `Mohammed Refaat` , 
                    personHandle: `mo_r3fat`, 
                    currentDate:`2024-05-01` ,
                    jobTitle:`student`,
                }, 
                {
                    personImge : `images/obj1.jpg` ,
                    commentContent:`WOW Ammazing` , 
                    person: `Mohammed Refaat` , 
                    personHandle: `mo_r3fat`, 
                    currentDate:`2024-05-01` ,
                    jobTitle:`student`,
                }
                , 
                {
                    personImge : `images/obj1.jpg` ,
                    commentContent:`WOW Ammazing` , 
                    person: `Mohammed Refaat` , 
                    personHandle: `mo_r3fat`, 
                    currentDate:`2024-05-01` ,
                    jobTitle:`student`,
                }
            ] , 
        } , 
    } ,

    {
        userImge:`images/abdo-profile-2.jpg` ,
        userName:`Abdelatty Badwy` , 
        userhandel:`glich_` , 
        jobTitle:`student`,
        postDate: `2024-05-13`, 
        lang:`rtl` , 
        tags:['oop' , 'learning' , 'solid' , 'solid principles' , 'principles' , 'object orinted programming' , 'object orinted design' , 'single responsibility principle'],
        postContent:{
            text: '', 
            img:`images/solid-1.jpg` , 
            comments: [
                {
                    jobTitle:`student`,
                    personImge : `images/user8.jpg` ,
                    commentContent:`it is a greeeeeeet work` , 
                    person: `Ahmed Jaml` , 
                    personHandle: `gimmy`, 
                    currentDate:`2024-05-01`
                } , 
                {
                    jobTitle:`student`,
                    personImge : `images/user2.jpg` ,
                    commentContent:`WOW Ammazing` , 
                    person: `Ahmed Belal` , 
                    personHandle: `b3lal_`, 
                    currentDate:`2024-05-01`,
                }
            ] , 
        } , 
    } ,
    ,


] ; 

function rturnCurrentDateFormated() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
    return  formattedDate ; 
}

// add all posts when window loaded 
let postsContainer = document.querySelector('.posts') ; 
window.onload = _=> { 
    userPosts.forEach(obj => {
        let commentsArray = [] ; 
        obj.postContent.comments.forEach(i => { 
            commentsArray.push(i) ; 
        }) ; 
        let mapComments = [] ; 
        commentsArray.forEach( i => {
            let temp = `
            <div class="comment">
                <div class="comment-header">
                    <img src="${i.personImge}" width="30px" alt="">
                    <span>${i.person}</span>
                    <small>${i.personHandle}</small>
                    <small>${i.currentDate}</small>
                    <small class="job-title">${i.jobTitle}</small>
                </div>
            <p>${i.commentContent}</p>
                <div class="comment-footer">
                    <small class="response-btn">
                        <i class="fa-solid fa-reply"></i>
                    </small>
                    <small class="response-btn">
                        <i class="fa-regular fa-thumbs-up"></i></i>
                    </small>
                    <small class="response-btn">
                        <i class="fa-regular fa-thumbs-down"></i></i>
                    </small>
                </div>
           </div> ` ; 
            mapComments.push(temp) ; 
        }) ; 

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
              <p dir="${obj.lang}">${obj.postContent.text}</p>
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
        ` ; 
        postsContainer.prepend(post) ; 
    });
} ; 

// auto focus in text are content objectAccount
let focusButton = document.querySelector('.tweet-btn') ; 
let inputFiled = document.querySelector('.post-content');
focusButton.addEventListener('click', function() {
    document.querySelector('.post-content').focus();
    document.querySelector('.upload-img-text').classList.remove(`show-upload-img-text`) ; 
});
// add post 
let addPostBtn = document.querySelector('.add-post-btn') ; 
let postContent = document.querySelector('.post-content');
addPostBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (!postContent.value.trim()) {
      alert('Please enter some content for your post.');
      return;
    }
    addPost2(postContent.value);
});


// here comments logic , // Add comment as a text to post of another object by using objectAccount
window.addEventListener('load' ,_=> { 
    // show-comments container 
    const postComments = document.querySelectorAll(`.posts-comments`) ;
    const commentBtns = document.querySelectorAll(`.comment-icon`) ; 
    commentBtns.forEach(btn => { 
        btn.addEventListener('click' , ev => {
            const btnParent = btn.parentElement.previousElementSibling.parentElement.parentElement ; 
            postComments.forEach(p => { 
                const commentsParent = p.previousElementSibling.previousElementSibling.parentElement ; 
                if (btnParent == commentsParent) { // now this requre comments to show fo the user 
                    // go to close all comments and display this. 
                    if(p.classList.contains('show-comments')) { 
                        p.classList.remove('show-comments') ; 
                    }
                    else {
                        postComments.forEach(post => { 
                            post.classList.remove('show-comments') ; 
                        }) ; 
                        p.classList.toggle('show-comments') ;
                    } 
                }
            }) ; 
        }) ; 
    }) ; 
    // =====================================================

    // =====================================================

    // write and add post into comments container 
    let upCommentBtns = document.querySelectorAll('.comment-now');
    let commentInputs = document.querySelectorAll('.commentIntput') ; 
    upCommentBtns.forEach( btn => {
       btn.addEventListener('click' , ev => { 
         const content = btn.previousElementSibling ;
         ev.preventDefault();
         if (!content.value.trim()) {
           alert('Please enter some content for your comment.');
           return;
         } 
        addComment(content , btn.parentElement.parentElement);

       }); 
    }) ; 

    // function addComment (content , continrePosts) { 
    //     let div = document.createElement('div') ; 
    //     div.innerHTML = `
    //     <div class="comment-header">
    //         <img src="${objectAccount.studentProfileImge}" width="30px" alt="">
    //         <span>${objectAccount.studentName}</span>
    //         <small>${objectAccount.studentHandel}</small>
    //     </div>
    //     <p>${content.value}</p>
    //     ` ;
    //     continrePosts.prepend(div);
    //     content.value = ' ' ;
    // } ; 

    function addComment (content , continrePosts) { 

        const formattedDate = rturnCurrentDateFormated() ; 

        let div = document.createElement('div') ; 
        div.innerHTML = `
        <div class="comment-header">
            <img src="${objectAccount.studentProfileImge}" width="30px" alt="">
            <span>${objectAccount.studentName}</span>
            <small>@${objectAccount.studentHandel}</small>
            <small>${formattedDate}</small>
            <small class="job-title">student</small>
        </div>
        <p> ${content.value} </p>
        <div class="comment-footer">
            <small class="response-btn">
                <i class="fa-solid fa-reply"></i>
            </small>
            <small class="response-btn">
                <i class="fa-regular fa-thumbs-up"></i></i>
            </small>
            <small class="response-btn">
                <i class="fa-regular fa-thumbs-down"></i></i>
            </small>
        </div>
        ` ;
        continrePosts.prepend(div);
        content.value = ' ' ;
    } ; 

}) ; 


/*coose imge with discription*/
let box = document.querySelector(`.upload-img-text`) ; 
let toggleBtn = document.querySelector(`.upload-img-text .close`) ; 
let btnIcon = document.querySelector(`.new-tweet-actions .post-icon`) ; 
btnIcon.addEventListener('click' , _=> { 
    box.classList.toggle('show-upload-img-text') ; 
    if(box.classList.contains('show-upload-img-text')) {
        document.querySelector('#descriptionInput').focus(); 
    }
}) ; 

document.querySelector(`.nav-links .add-post`).addEventListener('click' , _=> { 
    box.classList.toggle('show-upload-img-text') ; 
    document.querySelector('#descriptionInput').focus(); 
}) ; 

toggleBtn.addEventListener('click' , _=> { 
    box.classList.remove('show-upload-img-text') ; 
}) ; 


window.addEventListener('scroll' , _=> { 
    box.classList.remove('show-upload-img-text') ; 
}) ; 

/* uplooooooooooding*/
document.getElementById('addImageButton').addEventListener('click', function() {
    var imageInput = document.getElementById('imageInput');
    imageInput.click();
  });
  
  document.getElementById('imageInput').addEventListener('change', function(e) {
    var file = e.target.files[0];
    var description = document.getElementById('descriptionInput').value;
    var imgSrc ; 
    if (file) {
      var reader = new FileReader();
      reader.onload = function(e) {  
        var image = new Image();
        image.src = e.target.result;
        image.onload = function() {
          var img = document.createElement('img');
          img.src = e.target.result;
          addPost2(description , img.src)
        };
      };
      reader.readAsDataURL(file);
    }
  });
  
  function addPost2(content , imgSrc = ' ') {
    var postsContainer = document.querySelector('.posts');
    var postElement = document.createElement('div') ; 
    const obj = objectAccount;   
    postElement.innerHTML = `                    
    <div class="feed-tweet">
    <div class="img">
     <img src="${objectAccount.studentProfileImge}">
     </div>

    <div class="feed-tweeter-details">
       <div class="tweeter-details">
          <a href="" class="tweeter-name">${objectAccount.studentName}
             <span class="tweeter-handel">@${objectAccount.studentHandel}</span>
             <small class="date">${rturnCurrentDateFormated()}</small>
             <small class="job-title">${objectAccount.studentJobTitle}</small>
          </a>
          <a href="" class="post-icon">
             <i class="fa-solid fa-ellipsis"></i>
          </a>
       </div>

       <div class="tweeter-text" dir="ltr">
          <p>${content}<p>
        </div>
        <div class="tweeter-img">
            <img src="${imgSrc}">
        </div>
       <div class="tweet-icons" >
          <button class="post-icon comment-icon" title="add comment">
             <i class="fa-solid fa-message"></i>
             <span>${0}</span>
          </button>
          <a href=""class="post-icon" title="share">
             <i class="fa-solid fa-retweet"></i>   
          </a>
          <a href=""class="post-icon" title="love">
             <i class="fa-solid fa-heart"></i>
          </a>

       </div>
    </div>

    <div class="posts-comments" >
        <div class="commentIntput" title="comment this">
            <input type="text" placeholder="comment here">
           <button class="comment-now">
              <i class=" fa-solid fa-circle-arrow-up"></i>
           </button>
        </div>
    </div>

 </div>`;    
    postsContainer.prepend(postElement);
    postContent.value = '';
    box.classList.remove('show-upload-img-text') ;
    document.querySelector('#descriptionInput').value = '' ;  
}


//  Start Fixed home bar &  Seach bar  
// let homeBar = document.querySelector('.home-bar') ; 

// window.addEventListener('scroll' , _=>  {
//      //returns number of pixels the document has been scrolled virtically.
//     if(window.scrollY >= homeBar.offsetHeight && document.querySelector('body').classList.contains('light-mode')) { // return the height of the element
//         homeBar.classList.add('fixed-home-bar') ;
//     } 
//     else { 
//         homeBar.classList.remove('fixed-home-bar') ; 
//     }

// }) ; 

// let searchBar = document.querySelector('.search') ; 
// document.querySelector('.side-feed').addEventListener('scroll' , _=>  {
//     if(window.scrollY >= searchBar.offsetHeight && document.querySelector('body').classList.contains('light-mode')) { 
//         searchBar.classList.add('fixed-home-bar') ;
//     } 
//     else { 
//         searchBar.classList.remove('fixed-home-bar') ;
//     }
// }) ; 
//  Start Fixed home bar &  Seach bar  

// ================== Start Dark Mode Icon ==================
document.getElementById('dark-mode-icon').addEventListener('click' , _=> { 
    if(document.body.classList.contains('dark-mode')) { 
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        document.getElementById('dark-mode-icon').innerHTML = `
                <i class="fa-regular fa-sun"></i>
                <span>Light</span>
        `; 
    } else { 
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        document.getElementById('dark-mode-icon').value = 'Dark' ; 
        document.getElementById('dark-mode-icon').innerHTML = `
        <i class="fa-solid fa-moon"></i> 
        <span>Dark</span>
        `; 
        window.localStorage.theme = 'dark-mode' ; 
    } 
}) ; 
// ================== End Dark Mode Icon ==================

//  ========================== Start Search Bar ========================== 
function getAllSubStr(str) { 
    let minWin = 3 ;
    let ar1 = [] , ar2 = [] ; 
    let lef = 0 , r = 0 ; 
    let N = str.length ; 
    while (r < N) { 
        ar1.push(str.substr(lef , minWin)); 
        lef++; 
        r++ ; 
    }
    return ar1 ;
}

function generatAllSubstring(str , mnLen = 3) { 
    let ret = [] ; 
    let low = 0 , high = 0 ;
    let tmp = []  , N = str.length; 
    while(high < N) { 
        if(high - low + 1 == mnLen) { 
            ret.push(str.slice(low , high+1)) ;  
            ++low; 
        }
        ++high ;
    } 
    return ret ; 
} ; 

function hasShaerdSubtr (tag , searchValue) { // function to return if has at least one shared substring of lent 3 or not 
    if (searchValue.length >= 3 && tag.includes(searchValue)) { 
        return 1 ; 
    }
    if(searchValue.length >= 3 && searchValue.includes(tag)) { 
        return 1 ;
    }
    // let ar1 = getAllSubStr(tag) ; 
    // let ar2 = getAllSubStr(searchValue) ;

    let allPi = generatAllSubstring(searchValue) ; 
    allPi.forEach(p => { 
        if (tag.includes(p)) { 
            return 1 ; 
        }
    }) ; 
    
    // let mnLen = Math.min(ar1.length , ar2.length) ;
    // for (let i = 0 ; i < mnLen ; ++i) 
    //     if (ar1[i] == ar2[i]) 
    //         return 1 ; 
        
    return 0 ; 
}



const searchBtn = document.querySelector('.search > div > button') ; 
searchBtn.addEventListener('click' , _=> {
    const inputSearch = document.querySelector('.search input') ;
    if (!inputSearch.value.trim()) { // check if the input feld is empty or not 
      alert('Please enter some content to show results.');
      return;
    }
    let searchResult = [] ; 
    const searchValue = inputSearch.value.toLowerCase().trim(); // convert it to lower case & trim the input    

    userPosts.forEach(post => { 
        let tagsArray = post.tags ; // post tags
        tagsArray.forEach(tag => {
            if (tag == searchValue || hasShaerdSubtr(tag , searchValue) )
                searchResult.push(post) ; 
        }) ; 
    }) ; 

    let resultContainer = document.querySelector('.result-item') ;
    let postsContainer = document.querySelector('.result-item') ;
    
    if (searchResult.length) {
        searchResult.forEach(obj => {
            let commentsArray = [] ; 
            obj.postContent.comments.forEach(i => { 
                commentsArray.push(i) ; 
            }) ; 
            let mapComments = [] ; 
            commentsArray.forEach( i => {
                let temp = `
                <div class="comment">
                    <div class="comment-header">
                        <img src="${i.personImge}" width="30px" alt="">
                        <span>${i.person}</span>
                        <small>${i.personHandle}</small>
                        <small>${i.currentDate}</small>
                        <small class="job-title">${i.jobTitle}</small>
                    </div>
                <p>${i.commentContent}</p>
                    <div class="comment-footer">
                        <small class="response-btn">
                            <i class="fa-solid fa-reply"></i>
                        </small>
                        <small class="response-btn">
                            <i class="fa-regular fa-thumbs-up"></i></i>
                        </small>
                        <small class="response-btn">
                            <i class="fa-regular fa-thumbs-down"></i></i>
                        </small>
                    </div>
               </div> ` ; 
                mapComments.push(temp) ; 
            }) ; 
    
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
            ` ; 
            postsContainer.prepend(post) ; 
            document.querySelector('.search').classList.remove('show-invalid-search-input') ; 
        });
    } else { 
        let inputSearch = document.querySelector('.search input') ; 
        inputSearch.value = 'No Results'
        document.querySelector('.search').classList.add('show-invalid-search-input') ; 
        //  here you can show the no answer is founded in your search 

    }

    //  inputSearch.value = '' ; 
    // ================================================================
    // ================================================================
    // ================================================================
    // ================================================================
    // ================================================================
    // ================================================================
    // ================================================================
    // ================================================================
    // ================================================================
    
}) ; 
const inputSearch = document.querySelector('.search input') ;
document.querySelectorAll('.tag').forEach( tag => {
    tag.addEventListener('click' , _=> {
        let str =  tag.textContent.substr(1) ; 
        // inputSearch.value = str ;
        let text = [] ; 
        str.split('').forEach(ch => {
            if (ch != '_') { 
                text.push(ch); 
            } else {
                text.push(' '); 
            }
        }) ; 
        inputSearch.value = text.join('') ;
        document.querySelector('.search > div > button').click() ;  
    }) ; 
}) ; 
// Sample array of objects
// Custom comparison function to sort by date
// const compareDates = (a, b) => {
//     return b.date - a.date ;
// };

let more = document.querySelector('.more') ; 
document.querySelector('.see-more').addEventListener('click' , _=> {
    more.classList.add('shor-more-latest-posts-in-search-bar') ; 
    document.querySelector('.see-more').classList.add('hide-more-latest-posts-in-search-bar') ; 
}) ; 

document.querySelector('.see-less').addEventListener('click' , _=> {
    more.classList.remove('shor-more-latest-posts-in-search-bar') ; 
    document.querySelector('.see-more').classList.remove('hide-more-latest-posts-in-search-bar') ; 
})

//  ========================== End Search Bar ========================== 


// =========================== Start Code ===========================
    // ========================= Start Themes =========================
    const themeBtns = document.querySelectorAll('.themes button') ;
    const allParent =  document.querySelectorAll('.themes') ; 
    themeBtns.forEach(btn => {      
      btn.addEventListener('click' , ev => { 
        let x = btn.parentElement.parentElement.previousElementSibling.previousElementSibling;
        if(btn.classList.contains('dark-btn-theme')) { 
          x.classList.remove('ligth-code-theme-header');
          x.classList.remove('custom-code-theme-header');
          x.classList.remove('black-code-theme-header') ; 
        } else if (btn.classList.contains('custom-btn-theme')) { 
            x.classList.remove('black-code-theme-header') ; 
            x.classList.remove('ligth-code-theme-header');
            x.classList.add('custom-code-theme-header');
        }
        else if(btn.classList.contains('black-btn-theme')) {
            x.classList.add('black-code-theme-header') ; 
            x.classList.remove('ligth-code-theme-header');
            x.classList.remove('custom-code-theme-header');
        } 
        else { 
            x.classList.add('ligth-code-theme-header');
            x.classList.remove('custom-code-theme-header');
            x.classList.remove('black-code-theme-header') ; 
        }

        themeBtns.forEach(btn => { 
          btn.classList.remove('active-click')
        }) ; 
        btn.classList.add('active-click')
        
      }) ; 
    }) ; 

    // black-code-theme-header
    // ========================= End Themes =========================
    // =============== Start copy code function ===============
    // Once you clicked on the button show the code copied 
    let arBtns = document.querySelectorAll(`.copy-btn`) ; 
    arBtns.forEach(btn=> { 
      let hander ; 
      btn.addEventListener('click' , _ => {  
        btn.textContent = '...copied' ; 
        hander = setTimeout( _=> {
          btn.textContent = 'Copy' ; 
        },1000) ; 
      }) ; 
      clearTimeout(hander) ; 
    }) ; 
    // clicked function end
    // =============== End copy code function ===============

    // =========== Start fixed header file of code and smoothe events =========== 
    document.querySelectorAll('.copy-btn').forEach(copyBtn => { 
        copyBtn.addEventListener('click' , _=> { 
            console.log(copyBtn.parentElement.nextElementSibling.firstElementChild.firstElementChild);
        }) ; 
    }) ; 
    function copyText(textArea) { 
        textArea.select();
        document.execCommand('copy') ; 
        alert("Text copied to clipboard: " + textArea.value);
    } ; 
    // =========== End fixed header file of code and smoothe events =========== 
// =========================== End Code ===========================


// =========== Start scroll in search bar ==============
window.addEventListener('load' , _=>  {
    document.querySelector('.side-feed').classList.add('hideBodyScroll') ; 
}) ; 
document.querySelector('.side-feed').addEventListener('scroll' , _=> { 
    document.body.classList.add('hideBodyScroll');
    document.querySelector('.side-feed').classList.remove('hideBodyScroll') ; 
})  ; 

window.addEventListener('scroll' , ev => { 
    document.body.classList.remove('hideBodyScroll');
    document.querySelector('.side-feed').classList.add('hideBodyScroll') ; 
})
// =========== End scroll in search bar ==============


// start an overLay to show the code inputs from the user 
// document.querySelector('#btn-code').addEventListener('click' , _=> { 
//     runOverlay() ; 
// }) ;  
document.querySelector('.code-icon').addEventListener('click' , _=> { 
    runOverlay() ; 
}) ; 
function runOverlay() { 
    window.scrollTo(0 , 0); // go to the top of the window to can make a new post code 
    document.querySelector('.after-overlay').classList.toggle('show-blur-overlay') ; 
}
window.addEventListener('scroll' , _=> { 
    document.querySelector('.after-overlay').classList.remove('show-blur-overlay') ; 
}) ; 
// end an overLay to show the code inputs from the user