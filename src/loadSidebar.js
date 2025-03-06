import { addButton } from "./addButton";

function initialSidebar () {
    // Declare the object that will store the img
    let imgArray = {};
    let pArray = {};
    // Create all the elements
    const theAddDialog = document.createElement("dialog");
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
    // theAddDialog.classList.add("addDialog");
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
    document.querySelector(".p0").textContent = "Ivanovichi";
    document.querySelector(".p1").textContent = "Search";
    document.querySelector(".p2").textContent = "Inbox";
    document.querySelector(".p3").textContent = "Friend";
    document.querySelector(".p4").textContent = "Today";
    document.querySelector(".p5").textContent = "Upcoming";
    document.querySelector(".p6").textContent = "Add";

    //Function that sets the divs to have a click event
    const clickEvents = () => {
        document.querySelector(".p0").addEventListener("click", () => {
            alert("You click the profile");
        })

        document.querySelector(".p1").addEventListener("click", () => {
            alert("You click the search");
        })

        document.querySelector(".p2").addEventListener("click", () => {
            alert("You click the inbox");
        })

        document.querySelector(".p3").addEventListener("click", () => {
            alert("You click the friend");
        })

        document.querySelector(".p4").addEventListener("click", () => {
            alert("You click the today");
        })

        document.querySelector(".p5").addEventListener("click", () => {
            alert("You click the upcoming");
        })
    }

    //Make the html content for the add button 
    const addButtonLogic = () => {
        //Create all the elements
        const theForm = document.createElement("form");
        const theFormText = document.createElement("p");
        const theFormLabel = document.createElement("label");
        const theTitleInput = document.createElement("input");
        const theLabelBr = document.createElement("br");
        const theButtonSpace = document.createElement("div");
        const cancelButton = document.createElement("button");
        const confirmButton = document.createElement("button");
        //Create the description elements
        const theDescriptionText = document.createElement("p");
        const theDescriptionLabel = document.createElement("label");
        const theDescriptionInput = document.createElement("textarea");
        const theDescriptionLabelBr = document.createElement("br");
        //Create the dueDate elements
        const theDueDateText = document.createElement("p");
        const theDueDateLabel = document.createElement("label");
        const theDueDateInput = document.createElement("input");
        const theDueDateBr = document.createElement("br");
        //Create the note elements
        const theNotesText = document.createElement("p");
        const theNotesLabel = document.createElement("label");
        const theNotesInput = document.createElement("input");
        const theNotesBr = document.createElement("br");
        //Add text
        theFormLabel.textContent = "Write a title: ";
        theDescriptionLabel.textContent = "Add a description: ";
        theDueDateLabel.textContent = "Add a due date: ";
        theNotesLabel.textContent = "Add some notes: ";
        cancelButton.textContent = "Cancel";
        confirmButton.textContent = "Confirm";
        //Append the elements
        theFormLabel.append(theLabelBr,theTitleInput);
        theDescriptionLabel.append(theDescriptionLabelBr,theDescriptionInput);
        theDueDateLabel.append(theDueDateBr,theDueDateInput);
        theNotesLabel.append(theNotesBr,theNotesInput);
        theFormText.appendChild(theFormLabel);
        theDescriptionText.appendChild(theDescriptionLabel);
        theDueDateText.appendChild(theDueDateLabel);
        theNotesText.appendChild(theNotesLabel);
        theButtonSpace.append(cancelButton,confirmButton);
        theForm.append(theFormText,theDescriptionText,theDueDateText,theNotesText,theButtonSpace);
        theAddDialog.appendChild(theForm);
        document.querySelector(".p6").appendChild(theAddDialog);
        //Add id, classes and properties
        theTitleInput.setAttribute("placeholder", "My first project");
        theTitleInput.setAttribute("value", "Ivan");
        theTitleInput.setAttribute("type","text");
        theDescriptionInput.setAttribute("placeholder","Hi I am the description (You only have 200 characters)");
        theDescriptionInput.setAttribute("rows","3");
        theDescriptionInput.setAttribute("maxlength","200")
        theDescriptionInput.classList.add("description");
        theDueDateInput.setAttribute("type","input");
        theDueDateInput.classList.add("dueDate");
        theDueDateInput.setAttribute("value", "03/05/24");
        theNotesInput.setAttribute("type","input");
        theNotesInput.classList.add("notes");
        theNotesInput.setAttribute("value", "Hi I am a note");
        theAddDialog.classList.add("favDialog");
        cancelButton.setAttribute("value","cancel");
        cancelButton.setAttribute("formmethod","dialog");
        cancelButton.classList.add("cancel");
        confirmButton.classList.add("confirm");
        confirmButton.setAttribute("autofocus","");
        confirmButton.setAttribute("value","default");
    }

    clickEvents();
    addButtonLogic();
    addButton();
}
// `
export {initialSidebar};