(this.webpackJsonpspellingbee=this.webpackJsonpspellingbee||[]).push([[0],{11:function(e,t,n){},5:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n(0),r=n(1),u=n.n(r),i=n(4),o=n.n(i),d=(n(11),function(e){var t=e.word,n=e.setGuess,c=t.match(/.{1,3}/g);return Object(s.jsx)("div",{class:"container",children:c.map((function(e){return Object(s.jsx)("div",{class:"row",children:e.split("").map((function(e){return Object(s.jsx)("button",{class:"button button5",onClick:function(){n(e)},children:e})}))})}))})}),j=function(e){var t=e.checkAndAdd;return Object(s.jsx)("button",{class:"button button2",onClick:function(){return t()},children:"Guess Word"})},a=function(e){var t=e.setGuess;return Object(s.jsx)("button",{class:"button button2",onClick:function(){return t("")},children:"Reset Word"})},b=function(e){var t=e.guess;return Object(s.jsx)("div",{children:t})},l=function(e){var t=e.words;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Answers"}),Object(s.jsx)("ol",{children:t.map((function(e){return Object(s.jsx)("li",{children:e})}))})]})},h=function(e){var t=e.letters,n=u.a.useState(""),r=Object(c.a)(n,2),i=r[0],o=r[1],h=["abc","ded"],O=u.a.useState([]),x=Object(c.a)(O,2),f=x[0],v=x[1],p=u.a.useState(" "),w=Object(c.a)(p,2),m=w[0],g=w[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Adam's Spelling Bee Game!"}),Object(s.jsx)("div",{children:Object(s.jsx)("h4",{children:m})}),Object(s.jsx)(d,{word:t,setGuess:function(e){o(i+e)}}),Object(s.jsx)(j,{checkAndAdd:function(){return e=i,o(""),void(h.includes(e)?f.includes(e)?g("You already found '"+e+"'!"):(g("Nice one! '"+e+"' is a word!"),v(f.concat(e))):g("Incorrect guess: '"+e+"'"));var e}}),Object(s.jsx)(a,{setGuess:o}),Object(s.jsx)(b,{guess:i}),Object(s.jsx)(l,{words:f})]})};o.a.render(Object(s.jsx)(h,{letters:"bamozle"}),document.querySelector("#root"))}},[[5,1,2]]]);
//# sourceMappingURL=main.79eede5a.chunk.js.map