(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={feedback_block:"feedback_feedback_block__2XHdJ",title:"feedback_title__1jHGr",btn_block:"feedback_btn_block__l99PD",rating:"feedback_rating__1L7Xk"}},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(6),s=a.n(n),r=(a(12),a(13),a(3)),i=a(5),b=a(7),o=a(1),l=a.n(o),d=a(0),j=function(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.positivePercentage;return Object(d.jsxs)("div",{className:l.a.statistics_block,children:[Object(d.jsxs)("p",{children:["Good: ",Object(d.jsx)("span",{className:l.a.rating,children:t})]}),Object(d.jsxs)("p",{children:["Neutral: ",Object(d.jsx)("span",{className:l.a.rating,children:a})]}),Object(d.jsxs)("p",{children:["Bad: ",Object(d.jsx)("span",{className:l.a.rating,children:c})]}),Object(d.jsxs)("p",{children:["Total: ",Object(d.jsx)("span",{className:l.a.rating,children:n})]}),Object(d.jsxs)("p",{children:["Positive Feedback: ",Object(d.jsxs)("span",{className:l.a.rating,children:[s,"%"]})]})]})},u=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(d.jsx)("div",{className:l.a.btn_block,children:t.map((function(e){return Object(d.jsx)("button",{type:"button",onClick:a,name:e,children:e},e)}))})},h=function(e){var t=e.title,a=e.children;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{className:l.a.title,children:t}),a]})},O=function(e){var t=e.message;return Object(d.jsx)("p",{className:l.a.notificationMsg,children:t})},k=["good","neutral","bad"],x=function(){var e=Object(c.useState)({good:0,neutral:0,bad:0}),t=Object(b.a)(e,2),a=t[0],n=t[1],s=a.good,o=a.neutral,x=a.bad,p=s+o+x,f=Math.round(s/p*100);return Object(d.jsxs)("div",{className:l.a.feedback_block,children:[Object(d.jsx)("h2",{className:"lessonHeader",children:"Your feedback"}),Object(d.jsx)(h,{title:"Please leave feedback",children:Object(d.jsx)(u,{options:k,onLeaveFeedback:function(e){var t=e.target.name;return n(Object(i.a)(Object(i.a)({},a),{},Object(r.a)({},t,a[t]+1)))}})}),Object(d.jsx)(h,{title:"Statistics",children:p>0?Object(d.jsx)(j,{good:s,neutral:o,bad:x,total:p,positivePercentage:f}):Object(d.jsx)(O,{message:"No feedback given"})})]})},p=function(){return Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)(x,{})})};s.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.56ac082f.chunk.js.map