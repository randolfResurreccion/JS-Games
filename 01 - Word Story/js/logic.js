
function tellStory () {
    // gather elements
    let txtBoy = document.getElementById("txtBoy");
    let txtGirl = document.getElementById("txtGirl");
    let txtGeologic = document.getElementById("txtGeologic");
    let txtVerb = document.getElementById("txtVerb");
    let txtContainer = document.getElementById("txtContainer");
    let txtLiquid = document.getElementById("txtLiquid");
    let txtBodyPart = document.getElementById("txtBodyPart");
    let txtGerund = document.getElementById("txtGerund");
    
    // create variables for input
    let boy = txtBoy.value;
    let girl = txtGirl.value;
    let geologic = txtGeologic.value;
    let verb = txtVerb.value;
    let container = txtContainer.value;
    let liquid = txtLiquid.value;
    let bodyPart = txtBodyPart.value;
    let gerund = txtGerund.value;

    // write the story

    let story = boy + " and " + girl + " went up the ";
    story += geologic + " to " + verb + " a " + container;
    story += " of " + liquid + " .<br/> <br/>";
    story +=  boy + " fell down and broke his " + bodyPart;
    story += " and " + girl + " came " + gerund + " after.";

    // copy story to output
    // output.innerHtml = story;
    document.getElementById("output").innerHTML = story;
   
}