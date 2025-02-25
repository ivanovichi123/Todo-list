function initialSidebar () {
    // Declare the object that will store the img
    let imgArray = {};
    let pArray = {};
    // Create all the elements
    const theSidebar = document.querySelector("#theSidebar");
    const theSidebarContainer = document.createElement("div");
    const theFriendTag = document.createElement("div");
    const theSearchTag = document.createElement("div");
    const theInboxTag = document.createElement("div");
    const theTodayTag = document.createElement("div");
    const theUpcomingTag = document.createElement("div");
    const theAddMoreTag = document.createElement("div");
    const theProfilePicture = document.createElement("div");
    const theFriendTagText = document.createElement("p");
    const theSearchTagText = document.createElement("p");
    const theInboxTagText = document.createElement("p");
    const theTodayTagText = document.createElement("p");
    const theUpcomingTagText = document.createElement("p");
    const theAddMoreTagText = document.createElement("p");
    const theProfilePictureText = document.createElement("p");
    // Add a class to all the elements
    theSidebarContainer.classList.add("sidebarContainer");
    theFriendTag.classList.add("friendTag");
    theSearchTag.classList.add("searchTag");
    theInboxTag.classList.add("inboxTag");
    theTodayTag.classList.add("todayTag");
    theUpcomingTag.classList.add("upcomingTask");
    theAddMoreTag.classList.add("addMoreTag");
    theProfilePicture.classList.add("profilePicture");
    theFriendTagText.classList.add("friendTagText");
    theSearchTagText.classList.add("searchTagText");
    theInboxTagText.classList.add("inboxTagText");
    theTodayTagText.classList.add("todayTagText");
    theUpcomingTagText.classList.add("upcomingTaskText");
    theAddMoreTagText.classList.add("addMoreTagText");
    theProfilePictureText.classList.add("profilePictureText");
    // Store all of the elements in an array
    let sidebarContentsArray = [theProfilePicture,theSearchTag,theInboxTag,theFriendTag,theTodayTag,theUpcomingTag,theAddMoreTag];

    // Function that creates the images div
    const createImagesDiv = () => {
        for (let i = 0; i < 7; i++) {
            imgArray[`img${i}`] = document.createElement("div");
            imgArray[`img${i}`].classList.add(`img${i}`);
        }
    };

    //Function that creates the paragraph 
    const createPDiv = () => {
        for (let i = 0; i < 7; i++) {
            pArray[`p${i}`] = document.createElement("p");
            pArray[`p${i}`].classList.add(`p${i}`);
        }
    };

    // Function that appends the elements
    const AppendChildren = () => {
        for (let i = 0; i < 7; i++) {
            sidebarContentsArray[i].append(imgArray[`img${i}`]);
            sidebarContentsArray[i].append(pArray[`p${i}`]);
        }
    };
    createImagesDiv();
    createPDiv();
    AppendChildren();
    theSidebarContainer.append(theProfilePicture,theSearchTag,theInboxTag,theFriendTag,theTodayTag,theUpcomingTag,theAddMoreTag);
    theSidebar.appendChild(theSidebarContainer);

    //Give text to all the p tags
    document.querySelector(".p0").textContent = "Hi I am the profile picture";
    document.querySelector(".p1").textContent = "Hi I am the search tag";
    document.querySelector(".p2").textContent = "Hi I am the inbox tag";
    document.querySelector(".p3").textContent = "Hi I am the friend tag";
    document.querySelector(".p4").textContent = "Hi I am the today tag";
    document.querySelector(".p5").textContent = "Hi I am the upcoming tag";
    document.querySelector(".p6").textContent = "Hi I am the add more tag";
    
    //Give images to all the img tags
    document.querySelector(".img0").textContent = "A";
    document.querySelector(".img1").textContent = "B";
    document.querySelector(".img2").textContent = "C";
    document.querySelector(".img3").textContent = "D";
    document.querySelector(".img4").textContent = "E";
    document.querySelector(".img5").textContent = "F";
    document.querySelector(".img6").textContent = "G";


    



}
// `
export {initialSidebar};