export const handleCommentLike = (event:any) =>{
    let color = event.target.style.color;
    event.target.style.color = color === "tomato"?"#2f2d2d": "tomato";
};

export const focusOnComment = (postID:string) => {
    document.querySelector<any>(".comment-input-" + postID).focus();
  };

export const likePost =(postID:string) => {
    let icon = document.querySelector(`.like-post-${postID}`);
    icon?.classList.add("active");

    setTimeout(() =>{
        icon?.classList.remove("active");
    },600);
;}

export const handleShowMore = (event:any, postID:string) =>{
    event.preventDefault();
    let node = document.querySelector(`.content-${postID}`);
    
    if(node?.classList[1] === "hideContene") {
        node.classList.replace("hideContent", "showContent");
        event.target.innerHTML = `<a href="#">...less</a>`;
    }
    else{
        node?.classList.replace("showContent", "hideContent");
        event.target.innerHTML = `<a href="#"...more</a>`
    }
};