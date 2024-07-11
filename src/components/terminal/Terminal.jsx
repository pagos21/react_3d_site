
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/terminalStyles.css"
import { getAnalytics, logEvent } from "firebase/analytics";
import axios from "axios";

const Terminal = () => {
    const analytics = getAnalytics()
    // eslint-disable-next-line no-unused-vars
    let cursor;
    let navigate = useNavigate();
    const [value, setValue] = useState("")
    // eslint-disable-next-line no-unused-vars
    // const [isSudoing, setIsSudoing] = useState(false)
    const initialized = useRef(false)
    const isSudoing = useRef(false)
    let git = 0;
    let pw = false;
    let pwd = false;
    let commands = [];

let before = "";
let liner = "";
let command = "";
let textarea = "";
let terminal = "";
let email = " ====> In order to DM me you have to resolve this enigma: Axpa5Qu+pzHWYeahKxMly2cRZeUz3pYvff1zDACQAUIhvggByxvD9QG7R3HaauSHt74pP2ZT9ocKH0EXl/7wYg== and execute it as 'super_user_do' <br />"

let whois = [
    "<br>",
    "Hello, I'm Nicolas",
    "I'm a web developer with a lot of passion and willing to learn new things (I said NEW things, not old things)",
    "What I like to do, you said?",
    "I start my studies with the fantastic world of IT security and Penetration Testing by achieving the eCPPTv2 certification;" ,
    "than I figured out that would not be enough so I started to learn web-dev;",
    "than I figured out that would not be enough so I achieved a 6 mouth master to become a 'full-stack web developer' by 'Boolean Carreers'",
    "than I figured out that would not be enough so I studied 'mobile dev' and I learned 'Flutter' and developed 3 Android applications;",
    "than I figured out that would not be enough and I'm beginning to study game-dev with Unity;",
    "and I alredy know that would not be enough so I'm planning to study ML and DL",
    "<br>"
];

let whoami = [
    "<br>",
    "If you are a head hunter, than welcome to my site and feel free to contact me whenever you want",
    "If you are a visitor, enjoy this humble site.",
    "<br>"
]

let social = [
    "<br>",
    "github ===> https://github.com/pagos21",
    "linkedIn ===> https://www.linkedin.com/in/nicolas-p-b0a7b994",
    "<br>"
]

let quotes = [
    "",
    "There is some fiction in your truth, and some truth in your fiction. To know the truth, you must risk everything.",
    "Maybe you regret taking the red pill. ",
    "Dodge this.",
    "As you can see, we've had our eye on you for some time now, Mr. Anderson. It seems that you've been living two lives.",
    "Follow the white rabbit",
    "Do you believe that my being stronger or faster has anything to do with my muscles in this place? You think that’s air you’re breathing now?... Again.",
    "He's beginning to believe.",
    "The answer is out there, Neo. It’s looking for you. And it will find you, if you want it to.",
    "Knock Knock Neo",
    "Please just listen. I know why you’re here, Neo. I know what you’ve been doing. I know why you hardly sleep, why you live alone, and why night after night you sit at your computer. You’re looking for him. I know, because I was once looking for the same thing. And when he found me, he told me I wasn’t really looking for him. I was looking for an answer. It’s the question that drives us, Neo. It’s the question that brought you here. You know the question just as I did.",
    "This line is tapped, so I must be brief. They got to you first, but they’ve underestimated how important you are. If they knew what I know, you’d probably be dead.",
    "You are The One, Neo. You see, you may have spent the last few years looking for me, but I’ve spent my entire life looking for you. Now do you still want to meet?",
    "Do not try to bend the spoon — that's impossible. Instead, only try to realize the truth: there is no spoon.",
    "You take the blue pill, the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill, you stay in Wonderland, and I show you how deep the rabbit hole goes.",
    " I know Kung Fu.",
    "This is the construct. It’s our loading program. We can load anything from clothing, to equipment, weapons, training simulations, anything we need.",

]

let quote = [
    "<br>",
    "<br>"
]

let secret = [
    "<br>",
    "<span class='command'>sudo</span> Only use if you're admin",
    "<br>",
]

let help = [
    "<br>",
    "<span class='command'> whois</span> Who am I?",
    "<span class='command'> whoami</span> Who are you?",
    "<span class='command'> social</span> View my socials",
    "<span class='command'> history</span> View command history",
    "<span class='command'> projects</span> See my projects",
    "<span class='command'> email</span> Contact me",
    "<span class='command'> clear</span> clear the terminal",
    "<span class='command'> help</span> Show this message",
    "<span class='command'> redpill</span> Show a random quote from the film 'The matrix'",
    "<span class='command'> bluepill </span> Show a 'not so NERD' version of this portfolio ",
    "<span class='command'> sudo </span> Resolve the enigma",
    "<br>"
]

let banner = [
    "<h1 class='index'> Nicolas.py",
    "<span class='color2'> Welcome to my portfolio</span>",
    "<span class='color2'> To get a list of all available commands, type</span> <span class='command'>'help'</span>",
    "<br>"
]

useEffect(() => {
    if (!initialized.current) {
        initialized.current = true
        console.log(`%c
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░▒▓█▓▒░      ░▒▓██████▓▒░ ░▒▓██████▓▒░░▒▓██████████████▓▒░░▒▓████████▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░     ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓██████▓▒░ ░▒▓█▓▒░     ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓██████▓▒░   
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░     ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
 ░▒▓█████████████▓▒░░▒▓████████▓▒░▒▓████████▓▒░▒▓██████▓▒░ ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░ 
                                                                                                          
                                                                                                          `, `background: #222; color: #bada55`);
        console.log(`%cYWVzMTI4`, `background: #222; color: #bada55`);
        console.log(`%c
                .,uuuuuu,,
            ,%%uuu==#uuuu%%\\
        ,,,<%%uu".a.=#uuuu%%%%
      ,;;;;;)#uu...,#/uuu%%%%%%%
       \\;;/####\\%mmmmmmmmmnu%%'%%;
      u####"""' (mmmmmmmmmmnu%%'%%%%
      uuuEE,..:;;#\\mmmmmmmnuu%;,'%%%%
       uuuu\\#####/uu,mmmmmnu%..;, :.%%%
          \\uuuuuuuuuuuuu,mnu/\\.;;  :..%%
            >##&&#######<%%%  \\;'   :.%%
         (###&&&#######%%%%%         :%'
       (###&&&&######(%%%%%%
      (#####&&&####(%%%%%%%%%
       (###########(%%%%%%%%%%%
      %%(###########(%%%%%%%%%%%%
     ;%%%(##########'%%%'%%%%%%%%%
    (%%%%; ;n####n'%%%%'n%%%%%%%%%%(@)
     \\%%%' %%nnnn'%%%%'nnnn%%%%%%%(@@@)
      ''' %%%nnnn'''nnnnnn%%%%%%%%(@@@@)-Susie Oviatt-
         ,%%%nnnnnnnnnnn%%%%%%%%%(@@@@@
  ,.,nnn%%%%nnnnn)nnnn%%%%%%%%%/  (@@)
 (u(uuuuuuuuuuuuuu/ (u;;;;;;u)
                     (uuuuuuu)
                       ()()()
            `, `background: #222; color: #bada55`);
        console.log("thereIsNoSpoon00");
        window.onload = init;
        before = document.getElementById("before");
        liner = document.getElementById("liner");
        command = document.getElementById("typer");
        command.innerHTML = value
        textarea = document.getElementById("texter");
        terminal = document.getElementById("terminal");
        setTimeout(function (){
            loopLines(banner, "", 80);
            textarea.focus();
        }, 100);
        
        window.addEventListener("keyup", enterKey)
    }
})

const addLine =(text, style, time) =>{
    
    let t = ""
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i+1) == " ") {
            t += "&nbsp;&nbsp;";
            i++;
        } else {
            t += text.charAt(i)
        }
    }
    setTimeout(async () => {
        let next = document.createElement("p")
        next.className = style;
        next.innerHTML = t
        
        // let tg = this
        let st0 = document.styleSheets[2];
        let st = null;
        if (st0 == undefined) {
            st = document.styleSheets[0].cssRules[49];
        } else {
            st = st0.cssRules[0];
        }
        if (text == "sudo") {
            next.innerHTML = "neo@matrix:$ " + text
            before.parentNode.insertBefore(next, before)
            st.style.content = '"Insert sudo password for guest:"'; 
            window.scrollTo(0, document.body.offsetHeight)
            // setIsSudoing(true)
            isSudoing.current = true
        } else {
            if (!isSudoing.current) {
                st.style.content = '"neo@matrix:$"'; 
                before.parentNode.insertBefore(next, before)
            }
        }
    }, time);
}

const loopLines = (name, style, time) => {
    name.forEach((item, i) => {
        addLine(item, style, i * time)
    })
}
const enterKey = (e) => {
    if(e.keyCode == 181){
        document.location.reload(true);
    }
    if(pw) {
        let et = "*"
        let w = value.length
        command.innerHTML = et.repeat(w)
        if (pwd && e.keyCode == 13) {
            loopLines(secret, "color2 margin", 120)
            command.innerHTML = ""
            textarea.value = ""
            pwd = false
            pw = false
            liner.classList.remove("password")
        } else if(e.keyCode == 13){
            addLine("Wrong password", "error", 0)
            command.innerHTML = ""
            textarea.value = ""
            pw = false
            liner.classList.remove("password")
        }
    } else {
        if (e.keyCode == 13) {
            commands.push(command.innerHTML)
            git = commands.length
            if (command.innerHTML != "sudo") {
                addLine("neo@matrix:$ " + command.innerHTML, "no-animation", 0)
            }
            // }
            commander(command.innerHTML.toLowerCase())
            command.innerHTML = ""
            textarea.value = ""
        }
        if (e.keyCode == 38 && git != 0) {
            git -= 1
            textarea.value = commands[git]
            command.innerHTML = textarea.value
        }
        if (e.keyCode == 40 && git != command.length) {
            git += 1
            if (commands[git] == undefined) {
                textarea.value = ""
            } else {
                textarea.value = commands[git]
            }
            command.innerHTML = textarea.value
        }
    }
    
}

    const commander = async (cmd) =>{
        switch(cmd.toLowerCase()){
            case "help":
                loopLines(help, "colors2 margin", 80)
                break;
            case "whois":
                loopLines(whois, "colors2 margin", 80)
                break;
            case "whoami":
                loopLines(whoami, "colors2 margin", 80)
                break;
            case "social":
                loopLines(social, "colors2 margin", 80)
                break;
            case "projects":
                addLine("type 'bluepill' to view all my projects", "colors2", 80)
                break;
            case "email":
                addLine(email, "colors2 margin", 80)
                break;
            case "sudo":
                addLine("sudo", "colors2", 80)
                break;
            case "redpill":
                // eslint-disable-next-line no-unused-vars, no-case-declarations
                let index = Math.floor(Math.random() * ((quotes.length-1) - 1 + 1) + 1);
                quote.splice(1, quotes[index], quotes[index])
                loopLines(quote, "colors2 margin", 80)
                quote = ["<br>", "<br>"]
                break;
            case "history":
                addLine("<br>", "", 0)
                loopLines(commands, "colors2", 80)
                addLine("<br>", "command", 80 * commands.length + 50)
                break;
            case "clear":
                setTimeout(function() {
                    terminal.innerHTML = "<a id='before'></a>"
                    before = document.getElementById("before")
                }, 1)
                break;
            case "bluepill":
                NavigateNow()
                break
            default:
                if (isSudoing.current) {
                const secret = {"secret": cmd}
                // eslint-disable-next-line no-unused-vars
                let response = await axios.post(import.meta.env.VITE_LOCAL_API, secret, {headers: {"Content-Type": "application/json", Authorization: import.meta.env.VITE_LOCAL_ANON_KEY}}).catch(e =>{console.log("error");});
                if (response && response.status ==  200) {
                    addLine(response.data.message, "colors2", 500)
                } else {
                    addLine("ah ah ah you didn't say the magic word", "colors2", 200)
                }
                isSudoing.current =false
                    break
                } else {
                    addLine("<span class='inherit'>Command not found.</span>", "error", 100)
                    break
                }
        }
    }

    const NavigateNow = () => {
        logEvent(analytics, "User took the bluePill")
        window.scrollTo(0, 0)
        navigate("/");
    }

    const handleChange = (event0) => {
        // moveIt(value.length, event0)
        setValue(event0.target.value)
        typeIt(value, event0)
    }

    function $(elid){
        return document.getElementById(elid);
    }
    const init = () => {
        cursor = $("#cursor");
    }
    
    const n12br = (txt) =>{
        return txt.replace(/\n/g, "");
    }
    
    const typeIt = (value, e) =>{
        // eslint-disable-next-line no-undef, no-unused-vars
        e = e || window.event;
        var w = $("typer");
        var tw = value;
        if(!pw){
            w.innerHTML = n12br(tw);
        }
    }
    
    const moveIt = (count, e) =>{
    
        let cursor;
        cursor = $("cursor");
        e = e || window.event;
        var keycode = e.keycode || e.which;
        if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count -1) * 10))){
            cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
    
        } else if( keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0){
            cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
        }
    }


    return (
        <section>
            <div id="terminal">
                <a id="before"></a>
                </div>
                <div id="command" onClick={() => $('texter').focus()}>
                <textarea type="text" id="texter" value={value} onChange={handleChange} onKeyUp={handleChange} onKeyPress={handleChange} onKeyDown={(e) =>moveIt(value.length, e)}
                    autoFocus
                >
                </textarea>
                <div id="liner">
                    <span id="typer"></span>
                    <b className="cursor" id="cursor"></b>
                </div>
            </div>
        </section>
    )
}

export default Terminal;