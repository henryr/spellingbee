(this.webpackJsonpspellingbee=this.webpackJsonpspellingbee||[]).push([[0],{11:function(e,t,n){},5:function(e,t,n){"use strict";n.r(t);var o=n(2),b=n(0),l=n(1),c=n.n(l),a=n(4),s=n.n(a),r=(n(11),function(e){var t=e.word,n=e.setGuess,o=t.match(/.{1,3}/g);return Object(b.jsx)("div",{class:"container",children:o.map((function(e){return Object(b.jsx)("div",{class:"row",children:e.split("").map((function(e){return Object(b.jsx)("button",{class:"button button5",onClick:function(){n(e)},children:e})}))})}))})}),u=function(e){var t=e.checkAndAdd;return Object(b.jsx)("button",{class:"button button2",onClick:function(){return t()},children:"Guess Word"})},i=function(e){var t=e.setGuess;return Object(b.jsx)("button",{class:"button button2",onClick:function(){return t("")},children:"Reset Word"})},j=function(e){var t=e.guess;return Object(b.jsx)("div",{children:t})},m=function(e){var t=e.words;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Answers"}),Object(b.jsx)("ol",{children:t.map((function(e){return Object(b.jsx)("li",{children:e})}))})]})},d=function(e){var t=e.letters,n=c.a.useState(""),l=Object(o.a)(n,2),a=l[0],s=l[1],d=["bamboozle","blameable","emblaze","ablaze","embalm","emblem","bamboo","amoeba","booze","mambo","bloom","mamba","bezel","able","alma","aloe","babe","bale","baba","ball","balm","beam","bell","blam","blob","boba","boll","bolo","bomb","boob","boom","lamb","lame","laze","lobe","loom","male","mall","maze","meal","mole","moll","oboe","ooze","zeal","zoom","all","ale","baa","bee","boo","bob","ebb","eel","elm","lab","lob","mam","mob","moo"],h=c.a.useState([]),O=Object(o.a)(h,2),x=O[0],f=O[1],v=c.a.useState(" "),p=Object(o.a)(v,2),z=p[0],w=p[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Adam's Spelling Bee Game!"}),Object(b.jsx)("div",{children:Object(b.jsx)("h4",{children:z})}),Object(b.jsx)(r,{word:t,setGuess:function(e){s(a+e)}}),Object(b.jsx)(u,{checkAndAdd:function(){return e=a,s(""),void(d.includes(e)?x.includes(e)?w("You already found '"+e+"'!"):(w("Nice one! '"+e+"' is a word!"),f(x.concat(e))):w("Incorrect guess: '"+e+"'"));var e}}),Object(b.jsx)(i,{setGuess:s}),Object(b.jsx)(j,{guess:a}),Object(b.jsx)(m,{words:x})]})};s.a.render(Object(b.jsx)(d,{letters:"mableoz"}),document.querySelector("#root"))}},[[5,1,2]]]);
//# sourceMappingURL=main.074f9c2c.chunk.js.map