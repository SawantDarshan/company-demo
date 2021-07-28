const comments = [
  {
    message: "This company is the best. I am so happy with the result!",
    name: "Michael Roe",
    position: "Vice President",
  },
  {
    message: "One word... WOW!!",
    name: "John Doe",
    position: "Salesman, Rep Inc",
  },
  {
    message: "Could I... BE any more happy with this company?",
    name: "Chandler Bing",
    position: "Actor, FriendsAlot",
  },
];

const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", (e) => {
  const toggleDiv = document.querySelector(".nav-bottom");
  toggleDiv.classList.toggle("toggle-div");
});

// set initial count
let count = 0;

// select value and buttons
let btns = document.querySelectorAll(".comment-btn");

console.log(btns);

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("left-button")) {
      count--;
    } else if (styles.contains("right-button")) {
      count++;
    } else if (styles.contains("dot-left")) {
      count = 0;
    } else if (styles.contains("dot-middle")) {
      count= 1;
    } else if (styles.contains("dot-right")) {
      count= 2;
    } else {
      count = 0;
    }
    if (count < 0) {
      count = 2;
    }
    if (count > 2) {
      count = 0;
    }
    showComment(comments[count]);
    console.log(count);
  });
});

function showComment(comment) {
  console.log(comment);
  const commentBox = document.querySelector(".comment-box");
  commentBox.innerHTML = `<h3>"${comment.message}"</h3><p>${comment.name},${comment.position}</p>`;
}

showComment(comments[0]);

// const leftBtn = document.querySelector(".left-button");
// const rightBtn = document.querySelector(".right-button");
// var counter = 1;

// leftBtn.addEventListener("click", ()=>{
//   counter = counter - 1;
//   showComment(comments[counter]);
// })

// rightBtn.addEventListener("click", ()=>{
//   counter = counter + 1;
//   showComment(comments[counter]);
// })
// function showComment(comment) {
//   if ( counter < 0 || counter > 2){
//     counter = 1;
//   }

//   console.log(comment);
//   const commentBox = document.querySelector(".comment-box");
//   commentBox.innerHTML = `<h3>"${comment.message}"</h3><p>${comment.name},${comment.position}</p>`;
// }

// showComment(comments[1]);
