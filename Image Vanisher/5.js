// document.getElementById('owl').onclick = function(){
    //     alert("owl clicked")
    // }

//clicking on the elements and an alert pops "owl clicked " in the document

     // attachEvent()
    // jQuery - on

    // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode

//the attributes mentioned above represents when event iS Printed in console eg addEventListener('click', function(e){
        // console.log(e);

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, false)

// this false represents event propagation. Even if we dont use it, the effect remains the same

   // false comes under bubbling, as it prints what is clicked first and then whole scene
   
  //true comesunder capturing, which says,print the outer first the the clicked one 

    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked");
    //     e.stopPropagation()
    // }, false)
    
    // document.getElementById('google').addEventListener('click',function(e){
    //     e.preventDefault();
    //     e.stopPropagation()
    //     console.log("google clicked");
    // }, false)

  //preventDefault - STOPS THE DEFAULT FUNCTIONING OF EVENT


    //stopPropagation - It prevents the event from bubbling up or capturing down further in the DOM hierarchy.

    
    document.querySelector('#images').addEventListener('click', function(e){
        console.log(e.target.tagName);
        if (e.target.tagName === 'IMG') {
            console.log(e.target.id);
            let removeIt = e.target.parentNode
            removeIt.remove()
        }
    
        
    })
    
    //removeIt.parentNode.removeChild(removeIt)
