import './App.css';

function App() {
  return (
<div>
  <div class="header">
    <div class="logo">
    <i class="fa-solid fa-people-pulling"></i>
    </div>
    <div class="title"> Bert and Ernie </div>
  </div>
  
  <div class="body">
    <div class="section">
      <div class="heading">About</div>
      <div class="paragraph">
        Bert and Ernie are two Muppet characters who appear together in numerous skits on the longrunning PBS/HBO children's television show, Sesame Street. Originated by Frank Oz and Jim Henson, the characters are currently performed by puppeteers Eric Jacobson and Peter Linz; Oz performed Bert until 1 January 2006.
      </div>
      <div class="horizontal-rule"></div>
  </div>
    
  <div class="section">
     <div class="heading">
        History
     </div>
    <div class="split">
      <div class="paragraph">
       Bert and Ernie were built by Don Sahlin from a simple design scribbled by Jim Henson, creator of The Muppets. Initially, Henson performed Bert and Oz performed Ernie, but after just one day of rehearsal, they switched characters. The original idea was to show that even though two people can have totally different characteristics, they can still be good friends.[1]        Bert and Ernie were built by Don Sahlin from a simple design scribbled by Jim Henson, creator of The Muppets. Initially, Henson performed Bert and Oz performed Ernie, but after just one day of rehearsal, they switched characters. The original idea was to show that even though two people can have totally different characteristics, they can still be good friends.[1]
      </div>
      
       <img class="bert" src={require("./images/bertnernie.png")}/>
   
    </div>
    <div class="space paragraph">
      According to writer Jon Stone, the relationship between Bert and Ernie reflected the real life friendship between Oz and Henson.[2] Although their names are commonly believed to have been drawn from those of two minor characters in the Frank Capra film It's A Wonderful Life, sources from within the Sesame Street production team suggest that the identical names were coincidental.[3]
    </div>
    <div class="space paragraph">
      According to A&E's Biography, Bert and Ernie were virtually the only Muppets to appear in the Sesame Street pilot episode, which was screen-tested to a number of families in July 1969. Their brief appearance was the only part of the pilot that tested well, so it was decided that not only should Muppet characters be the "stars" of the show, but would also interact with the human characters, something that was not done in the pilot.
    </div>
    <div class="space paragraph">
      An ordinary Bert and Ernie sketch involves Ernie coming up with a harebrained idea, and Bert trying to talk him out of it, usually getting him frustrated and Ernie dumbfounded. For example, if Ernie wanted to do something loud if Bert is doing something quiet like reading a book or the newspaper, Bert would teach him how to be quiet; however, Ernie would still make some noise, which would cause Bert to either lose his temper or leave the room.
    </div>
    <div class="space paragraph">
      Sesame Street Live performer Taylor Morgan said in an interview that "I just kind of try to think like a six year old or a seven year old, because that's how old Bert is."
    </div>
    </div>
  </div>
</div>
  );
}

export default App;
