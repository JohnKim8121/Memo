
//const notesContainer = document.querySelector(".notes-container");
//const createBtn = document.querySelector(".btn");
//let notes = document.querySelectorAll(".input-box");
//function showNotes(){ 
    //    notesContainer.innerHTML = localStorage.getItem("notes");
//}
//showNotes();

//function updateStorage(){
//        localStorage.setItem("notes",notesContainer.innerHTML);
//}

//createBtn.addEventListener("click",()=>{
     //   let inputBox = document.createElement("p");
     //   let img = document.createElement("img");
 //       inputBox.className="input-box";
   //     inputBox.setAttribute("contenteditable","true")
 //       img.src = "./image/trash.png";
  ///      notesContainer.appendChild(inputBox).appendChild(img);
//})
//notesContainer.addEventListener("click",function(e){
  //     if(e.target.tagName==="IMG"){
    //     e.target.parentElement.remove();
     //    updateStorage()
    //   } else if(e.target.tagName==="p"){
     //    notes=document.querySelectorAll(".input-box");
     //    notes.forEach(nt=>{
      //          nt.onkeyup = function(){
      //                  updateStorage()
      //          }
     //    })
      // }
//})
//Enter 눌렀을때 생기는 오 잡아줌 
//Enter 눌렀을때 Enter가 linebreak 역할로 바꿔줌
//document.addEventListener("keydown",event=>{
  //      if(event.key=== "Enter"){
    //         document.execCommand ("insertLineBreak");
      //       event.preventDefault();
        //}
//})

const addBtn = document.querySelector("#addBtn")
const main =document.querySelector(".main")
const saveNotes = ()=>{
  const notes = document.querySelectorAll(".note textarea");
  const data = [];
  notes.forEach(
    (note)=> { data.push(note.value) }
  )
  if (data.length===0){
    localStorage.removeItem("notes")
  }else{
    localStorage.setItem("notes", JSON.stringify(data))
  }
}

addBtn.addEventListener(
        "click",
        function(){
           addNote()
        }
)



const addNote = (text="")=>{
        const note =document.createElement('div');
        note.classList.add("note")
        note.innerHTML = `
        <div class="aaa">
        <div class="tool">
        <i class="save fas fa-save"></i>
        <i class="trash fas fa-trash"></i>
      </div>
      <textarea >${text}</textarea></div>
        `;

      note.querySelector(".trash").addEventListener(
        "click",
        function(){
          note.remove()
          saveNotes()
        }
      )
      note.querySelector(".save").addEventListener(
        "click",
        function(){
          saveNotes()
        }
      )
      note.querySelector("textarea").addEventListener(
        "focusout",
        function(){
          saveNotes()
        }
      )
      main.appendChild(note);  
     saveNotes()
}

(
  function(){
      const lsNotes = JSON.parse(localStorage.getItem("notes"));
      if (lsNotes===null){
          addNote()
      }else{
        lsNotes.forEach(
          (lsNote)=>{
            addNote(lsNote)
          }
        )
      }
      
  }
)()

//})asfslakdfjlsdkjflksjflkdsjalfkajdslkfjalskjdflkasjflskajlfkjlaskfjlaskjf

const addBtn2 = document.querySelector("#addBtn2")
const main2 =document.querySelector(".main2")
const saveNotes2 = ()=>{
  const notes2 = document.querySelectorAll(".note2 textarea");
  const data2 = [];
  notes2.forEach(
    (note2)=> { data2.push(note2.value) }
  )
  if (data2.length===0){
    localStorage.removeItem("notes2")
  }else{
    localStorage.setItem("notes2", JSON.stringify(data2))
  }
}

addBtn2.addEventListener(
        "click",
        function(){
           addNote2()
        }
)



const addNote2 = (text="")=>{
        const note2 =document.createElement('div');
        note2.classList.add("note2")
        note2.innerHTML = `
        <div class="aaa">
        <div class="tool">
        <i class="save fas fa-save"></i>
        <i class="trash fas fa-trash"></i>
      </div>
      <textarea >${text}</textarea></div>
        `;

      note2.querySelector(".trash").addEventListener(
        "click",
        function(){
          note2.remove()
          saveNotes2()
        }
      )
      note2.querySelector(".save").addEventListener(
        "click",
        function(){
          saveNotes2()
        }
      )
      note2.querySelector("textarea").addEventListener(
        "focusout",
        function(){
          saveNotes2()
        }
      )
      main2.appendChild(note2);  
     saveNotes2()
}

(
  function(){
      const lsNotes2 = JSON.parse(localStorage.getItem("notes2"));
      if (lsNotes2===null){
          addNote2()
      }else{
        lsNotes2.forEach(
          (lsNote2)=>{
            addNote2(lsNote2)
          }
        )
      }
      
  }
)()

//})asfslakdfjlsdkjflksjflkdsjalfkajdslkfjalskjdflkasjflskajlfkjlaskfjlaskjf

const addBtn3 = document.querySelector("#addBtn3")
const main3 =document.querySelector(".main3")
const saveNotes3 = ()=>{
  const notes3 = document.querySelectorAll(".note3 textarea");
  const data3 = [];
  notes3.forEach(
    (note3)=> { data3.push(note3.value) }
  )
  if (data3.length===0){
    localStorage.removeItem("notes3")
  }else{
    localStorage.setItem("notes3", JSON.stringify(data3))
  }
}

addBtn3.addEventListener(
        "click",
        function(){
           addNote3()
        }
)



const addNote3 = (text="")=>{
        const note3 =document.createElement('div');
        note3.classList.add("note3")
        note3.innerHTML = `
        <div class="aaa">
        <div class="tool">
        <i class="save fas fa-save"></i>
        <i class="trash fas fa-trash"></i>
      </div>
      <textarea >${text}</textarea></div>
        `;

      note3.querySelector(".trash").addEventListener(
        "click",
        function(){
          note3.remove()
          saveNotes3()
        }
      )
      note3.querySelector(".save").addEventListener(
        "click",
        function(){
          saveNotes3()
        }
      )
      note3.querySelector("textarea").addEventListener(
        "focusout",
        function(){
          saveNotes3()
        }
      )
      main3.appendChild(note3);  
     saveNotes3()
}

(
  function(){
      const lsNotes3 = JSON.parse(localStorage.getItem("notes3"));
      if (lsNotes3===null){
          addNote3()
      }else{
        lsNotes3.forEach(
          (lsNote3)=>{
            addNote3(lsNote3)
          }
        )
      }
      
  }
)()

//})asfslakdfjlsdkjflksjflkdsjalfkajdslkfjalskjdflkasjflskajlfkjlaskfjlaskjf

const addBtn4 = document.querySelector("#addBtn4")
const main4 =document.querySelector(".main4")
const saveNotes4 = ()=>{
  const notes4 = document.querySelectorAll(".note4 textarea");
  const data4 = [];
  notes4.forEach(
    (note4)=> { data4.push(note4.value) }
  )
  if (data4.length===0){
    localStorage.removeItem("notes4")
  }else{
    localStorage.setItem("notes4", JSON.stringify(data4))
  }
}

addBtn4.addEventListener(
        "click",
        function(){
           addNote4()
        }
)



const addNote4 = (text="")=>{
        const note4 =document.createElement('div');
        note4.classList.add("note4")
        note4.innerHTML = `
        <div class="aaa">
        <div class="tool">
        <i class="save fas fa-save"></i>
        <i class="trash fas fa-trash"></i>
      </div>
      <textarea >${text}</textarea></div>
        `;

      note4.querySelector(".trash").addEventListener(
        "click",
        function(){
          note4.remove()
          saveNotes4()
        }
      )
      note4.querySelector(".save").addEventListener(
        "click",
        function(){
          saveNotes4()
        }
      )
      note4.querySelector("textarea").addEventListener(
        "focusout",
        function(){
          saveNotes4()
        }
      )
      main4.appendChild(note4);  
     saveNotes4()
}

(
  function(){
      const lsNotes4 = JSON.parse(localStorage.getItem("notes4"));
      if (lsNotes4===null){
          addNote4()
      }else{
        lsNotes4.forEach(
          (lsNote4)=>{
            addNote4(lsNote4)
          }
        )
      }
      
  }
)()

//})asfslakdfjlsdkjflksjflkdsjalfkajdslkfjalskjdflkasjflskajlfkjlaskfjlaskjf

const addBtn5 = document.querySelector("#addBtn5")
const main5 =document.querySelector(".main5")
const saveNotes5 = ()=>{
  const notes5 = document.querySelectorAll(".note5 textarea");
  const data5 = [];
  notes5.forEach(
    (note5)=> { data5.push(note5.value) }
  )
  if (data5.length===0){
    localStorage.removeItem("notes5")
  }else{
    localStorage.setItem("notes5", JSON.stringify(data5))
  }
}

addBtn5.addEventListener(
        "click",
        function(){
           addNote5()
        }
)



const addNote5 = (text="")=>{
        const note5 =document.createElement('div');
        note5.classList.add("note5")
        note5.innerHTML = `
        <div class="aaa">
        <div class="tool">
        <i class="save fas fa-save"></i>
        <i class="trash fas fa-trash"></i>
      </div>
      <textarea >${text}</textarea></div>
        `;

      note5.querySelector(".trash").addEventListener(
        "click",
        function(){
          note5.remove()
          saveNotes5()
        }
      )
      note5.querySelector(".save").addEventListener(
        "click",
        function(){
          saveNotes5()
        }
      )
      note5.querySelector("textarea").addEventListener(
        "focusout",
        function(){
          saveNotes5()
        }
      )
      main5.appendChild(note5);  
     saveNotes5()
}

(
  function(){
      const lsNotes5 = JSON.parse(localStorage.getItem("notes5"));
      if (lsNotes5===null){
          addNote5()
      }else{
        lsNotes5.forEach(
          (lsNote5)=>{
            addNote5(lsNote5)
          }
        )
      }
      
  }
)()

//})asfslakdfjlsdkjflksjflkdsjalfkajdslkfjalskjdflkasjflskajlfkjlaskfjlaskjf

const addBtn6 = document.querySelector("#addBtn6")
const main6 =document.querySelector(".main6")
const saveNotes6 = ()=>{
  const notes6 = document.querySelectorAll(".note6 textarea");
  const data6 = [];
  notes6.forEach(
    (note6)=> { data6.push(note6.value) }
  )
  if (data6.length===0){
    localStorage.removeItem("notes6")
  }else{
    localStorage.setItem("notes6", JSON.stringify(data6))
  }
}

addBtn6.addEventListener(
        "click",
        function(){
           addNote6()
        }
)



const addNote6 = (text="")=>{
        const note6 =document.createElement('div');
        note6.classList.add("note6")
        note6.innerHTML = `
        <div class="aaa">
        <div class="tool">
        <i class="save fas fa-save"></i>
        <i class="trash fas fa-trash"></i>
      </div>
      <textarea >${text}</textarea></div>
        `;

      note6.querySelector(".trash").addEventListener(
        "click",
        function(){
          note6.remove()
          saveNotes6()
        }
      )
      note6.querySelector(".save").addEventListener(
        "click",
        function(){
          saveNotes6()
        }
      )
      note6.querySelector("textarea").addEventListener(
        "focusout",
        function(){
          saveNotes6()
        }
      )
      main6.appendChild(note6);  
     saveNotes6()
}

(
  function(){
      const lsNotes6 = JSON.parse(localStorage.getItem("notes6"));
      if (lsNotes6===null){
          addNote6()
      }else{
        lsNotes6.forEach(
          (lsNote6)=>{
            addNote6(lsNote6)
          }
        )
      }
      
  }
)()

//})asfslakdfjlsdkjflksjflkdsjalfkajdslkfjalskjdflkasjflskajlfkjlaskfjlaskjf

const addBtn7 = document.querySelector("#addBtn7")
const main7 =document.querySelector(".main7")
const saveNotes7 = ()=>{
  const notes7 = document.querySelectorAll(".note7 textarea");
  const data7 = [];
  notes7.forEach(
    (note7)=> { data7.push(note7.value) }
  )
  if (data7.length===0){
    localStorage.removeItem("notes7")
  }else{
    localStorage.setItem("notes7", JSON.stringify(data7))
  }
}

addBtn7.addEventListener(
        "click",
        function(){
           addNote7()
        }
)



const addNote7 = (text="")=>{
        const note7 =document.createElement('div');
        note7.classList.add("note7")
        note7.innerHTML = `
        <div class="aaa">
        <div class="tool">
        <i class="save fas fa-save"></i>
        <i class="trash fas fa-trash"></i>
      </div>
      <textarea >${text}</textarea></div>
        `;

      note7.querySelector(".trash").addEventListener(
        "click",
        function(){
          note7.remove()
          saveNotes7()
        }
      )
      note7.querySelector(".save").addEventListener(
        "click",
        function(){
          saveNotes7()
        }
      )
      note7.querySelector("textarea").addEventListener(
        "focusout",
        function(){
          saveNotes7()
        }
      )
      main7.appendChild(note7);  
     saveNotes7()
}

(
  function(){
      const lsNotes7 = JSON.parse(localStorage.getItem("notes7"));
      if (lsNotes7===null){
          addNote7()
      }else{
        lsNotes7.forEach(
          (lsNote7)=>{
            addNote7(lsNote7)
          }
        )
      }
      
  }
)()