## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?

<sec>
    <div>
        <button>

this where the user will make a choice as to which object they are going to use

they will do this by pressing on the image onscreen 
    image is represented in the <div> container
            <button> is under the image (radio)

x3

<sec>
    <div>
        <button>

this is where the user will click the "do you want to play button" <button> to intialize the computer state to change

a function will happen here

1. what did the user choose?
    a. rockRadioButton.value

<!-- 2. what is the computers choice?
    b. random number choosen between 1 and 3 decide    DONE
        1=rock
        2=paper
        3=scissor -->

<!-- 3. How do they compare and determine a winner
    function take in the user choice and computer choice and will write if else statements -->

4. show these results on the screen
    textContent displayed from #3 into computerVisualState



    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps


<!-- inside ap.js the eventListener will be the function written -->