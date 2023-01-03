(this["webpackJsonpreact-hangman"]=this["webpackJsonpreact-hangman"]||[]).push([[0],{73:function(e,t,n){},74:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(26),c=n.n(i),o=(n(73),n(14)),s=n(13),d=(n(74),n(126)),l=n(128),b=n(125),u=n(129),j=n(2),m=function(){return Object(j.jsx)(b.a,{sx:{flexGrow:1},children:Object(j.jsx)(d.a,{position:"sticky",sx:{alignItems:"center",backgroundColor:"#383838",padding:{md:"1rem"}},children:Object(j.jsx)(l.a,{children:Object(j.jsx)(u.a,{variant:"h2",sx:{color:"#f3f3f3"},children:"Hangman"})})})})},g=n(130),h=n.p+"static/media/hangman-img-0.6af191b1.png",x=n.p+"static/media/hangman-img-1.8ef2921d.png",p=n.p+"static/media/hangman-img-2.db2f8d6f.png",f=n.p+"static/media/hangman-img-3.99b9bc60.png",O=n.p+"static/media/hangman-img-4.d10b389c.png",w=n.p+"static/media/hangman-img-5.092f1051.png",S=n.p+"static/media/hangman-img-6.7fc4a972.png",v=n.p+"static/media/hangman-img-7.f6a879d2.png",y=n.p+"static/media/hangman-img-8.18dfdbdd.png",C=n.p+"static/media/hangman-img-9.9842b4b8.png",I=n.p+"static/media/hangman-img-10.4ae28320.png",L=n.p+"static/media/hangman-img-11.1d35d685.png",k=n.p+"static/media/hangman-img-12.0beb3aa4.png",M=function(e){var t=e.wrongLetters;return Object(j.jsx)(g.a,{children:Object(j.jsx)(b.a,{sx:{borderRadius:2,boxShadow:7,width:"70%",height:"70%",margin:3,padding:2,bgcolor:"#484848"},children:Object(j.jsx)("img",{src:function(e){var t=[h,x,p,f,O,w,S,v,y,C,I,L,k];return e.length>0?t[e.length-1]:t[0]}(t),alt:"figurine","max-width":"100%",height:"auto",width:"100%"})})})},W=function(e){var t=e.wrongLetters;return Object(j.jsx)(b.a,{children:Object(j.jsxs)(u.a,{children:["Mistakes: ",t]})})},P=function(e){var t=e.splitWord,n=e.correctLetters;return Object(j.jsx)(g.a,{children:t.map((function(e,t){return Object(j.jsx)("span",{className:"letter",children:n.includes(e)?e+" ":"_ "},t)}))})},R=n(120),D=n(121),A=function(e){var t=e.wordInput,n=e.handleWordInput,a=e.handleWordSubmit;return Object(j.jsxs)(b.a,{sx:{display:"flex",flexDirection:"column",bgcolor:"#383838",boxShadow:3,borderRadius:2,width:"80%",height:{xs:"15rem",md:"40rem"},margin:"4rem auto",padding:"5rem 0",alignItems:"center",justifyContent:{xs:"top",md:"center"}},children:[Object(j.jsx)(u.a,{variant:"h3",sx:{color:"white",margin:"1rem 2rem",fontSize:{xs:"2rem",md:"3rem"}},children:"Please type in a word to guess"}),Object(j.jsx)(g.a,{sx:{bgcolor:"transparent",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:{xs:"1rem",md:"2rem"},width:"80%",height:100,borderRadius:2},children:Object(j.jsxs)("form",{onSubmit:a,className:"formElement",children:[Object(j.jsx)(R.a,{required:!0,variant:"outlined",onChange:n,value:t,sx:{input:{color:"white"},border:"1px solid white",borderRadius:1.3,"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{borderColor:"white"}}}}),Object(j.jsx)(D.a,{type:"submit",sx:{color:"#f3f3f3",margin:"0.5rem",border:"1px solid #f3f3f3"},children:"Submit"})]})})]})},E=n(122),z=function(e){var t=e.openLossModal,n=e.reloadPage;return Object(j.jsx)(E.a,{open:t,children:Object(j.jsx)(b.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:Object(j.jsxs)(g.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",width:400,bgcolor:"#383838",border:"2px solid #000",borderColor:"black",borderRadius:"5px",boxShadow:24,padding:4,margin:"auto",flexDirection:"column"},children:[Object(j.jsx)(u.a,{sx:{color:"white"},children:"You Lost"}),Object(j.jsx)(D.a,{onClick:n,sx:{color:"white",fontSize:"2rem"},children:"Play Again"})]})})})},N=function(e){var t=e.openWinModal,n=e.reloadPage;return Object(j.jsx)(E.a,{open:t,children:Object(j.jsx)(b.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",bgcolor:"transparent"},children:Object(j.jsxs)(g.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",width:400,bgcolor:"#383838",border:"2px solid #000",borderColor:"black",borderRadius:"5px",boxShadow:24,padding:4,margin:"auto",flexDirection:"column"},children:[Object(j.jsx)(u.a,{sx:{color:"white"},children:"You Won"}),Object(j.jsx)(D.a,{onClick:n,sx:{color:"white",fontSize:"2rem"},children:"Play Again"})]})})})},q=function(e){var t=e.letterInput,n=e.handleLetterInput,a=e.handleLetterSubmit;return Object(j.jsx)(g.a,{children:Object(j.jsxs)("form",{onSubmit:a,children:[Object(j.jsx)(R.a,{required:!0,type:"text",onChange:n,inputProps:{maxLength:1},value:t,sx:{border:"1px solid black",borderRadius:1.3,"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{borderColor:"black"}}}}),Object(j.jsx)(D.a,{type:"submit",sx:{color:"black",padding:"0.5rem",margin:"0.5rem",border:"1px solid black"},children:"Guess"})]})})},G=n(124),J=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),c=Object(s.a)(i,2),d=c[0],l=c[1],u=Object(a.useState)(""),g=Object(s.a)(u,2),h=g[0],x=g[1],p=Object(a.useState)(""),f=Object(s.a)(p,2),O=f[0],w=f[1],S=Object(a.useState)([]),v=Object(s.a)(S,2),y=v[0],C=v[1],I=Object(a.useState)([]),L=Object(s.a)(I,2),k=L[0],R=L[1],D=Object(a.useState)(!1),E=Object(s.a)(D,2),J=E[0],Y=E[1],B=Object(a.useState)(!1),H=Object(s.a)(B,2),_=H[0],F=H[1],K=function(){document.location.reload(!0)};return Object(a.useEffect)((function(){!function(e,t){var a=function(e,t){for(var n=[],a=e.indexOf(t);-1!==a;)n.push(a),a=e.indexOf(t,a+1);return n}(n.split(""),O);if(t)if(t=t.toLowerCase(),-1===y.indexOf(t)&&-1===k.indexOf(t))if(-1!==e.indexOf(t))for(var r=function(t){C((function(n){return[].concat(Object(o.a)(n),[e[a[t]]])}))},i=0;i<a.length;i++)r(i);else R((function(e){return[].concat(Object(o.a)(e),[t])}));else alert("Already tried key")}(n.split(""),O)}),[O]),Object(a.useEffect)((function(){0!==y.length&&y.length===n.split("").length&&Y(!0),0!==k.length&&13===k.length&&F(!0)}),[k,y]),!1===d?Object(j.jsx)(A,{wordInput:n,handleWordInput:function(e){r(e.target.value.toLowerCase())},handleWordSubmit:function(e){e.preventDefault(),l(!0)}}):Object(j.jsxs)(b.a,{className:"App",children:[Object(j.jsx)(m,{}),Object(j.jsxs)(G.a,{container:!0,spacing:2,align:"center",children:[Object(j.jsx)(G.a,{item:!0,xs:12,children:Object(j.jsx)(M,{wrongLetters:k})}),Object(j.jsx)(G.a,{item:!0,xs:4,align:"center",children:Object(j.jsx)(q,{letterInput:h,handleLetterInput:function(e){x(e.target.value.toLowerCase().slice(0,1))},handleLetterSubmit:function(e){e.preventDefault(),w(h),x("")}})}),Object(j.jsx)(G.a,{item:!0,xs:4,align:"center",children:Object(j.jsx)(W,{wrongLetters:k})}),Object(j.jsx)(G.a,{item:!0,xs:4,align:"center",children:Object(j.jsx)(P,{splitWord:n.split(""),correctLetters:y})})]}),Object(j.jsx)(z,{openLossModal:_,reloadPage:K}),Object(j.jsx)(N,{openWinModal:J,reloadPage:K})]})};n(81);c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(J,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.0b94264a.chunk.js.map