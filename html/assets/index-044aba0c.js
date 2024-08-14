import{n as o,r,j as e,a as p,R as x}from"./index-da1875fb.js";const m=()=>{const t="0123456789ABCDEF";let i="#";for(let n=0;n<6;n++)i+=t[Math.floor(Math.random()*16)];return i},g=o.div`
  background-color: #ffffff;
  padding: 16px;
  max-width: 800px;
  padding-block: 12px;
  cursor: pointer;
  &:hover {
    background-color: #f6f8f9;
    border-radius: 24px;
  }
`,u=o.div`
  max-width: 800px;
  background-color: #e1e4e8;
  height: 1.5px;
  margin-block: 12px;
`,f=o.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`,v=o.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${()=>m()};
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
`,b=o.span`
  font-weight: bold;
  color: #24292e;
`,j=o.span`
  color: #586069;
  margin-left: 8px;
`,w=o.h2`
  font-size: 18px;
  margin: 0 0 12px 0;
  font-weight: 600;
`,y=o.p`
  color: #24292e;
  line-height: 1.5;
  margin: 0 0 16px 0;
`,k=o.div`
  display: flex;
  align-items: center;
  color: black;
  font-size: 14px;
  font-weight: 500;
  gap: 12px;
`,c=o.span`
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  background-color: #dee2e5;
  height: 32px;
  border-radius: 100px;
  padding-inline: 12px;
`,A=o.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #94e044;
  height: 16px;
  border-radius: 100px;
  padding-inline: 12px;
  width: fit-content;
  margin-block: 12px;
  font-size: 12px;
  color: white;
`,C=t=>r.createElement("svg",{rpl:"",fill:"currentColor",height:16,"icon-name":"upvote-outline",viewBox:"0 0 20 20",width:16,xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{d:"M12.877 19H7.123A1.125 1.125 0 0 1 6 17.877V11H2.126a1.114 1.114 0 0 1-1.007-.7 1.249 1.249 0 0 1 .171-1.343L9.166.368a1.128 1.128 0 0 1 1.668.004l7.872 8.581a1.25 1.25 0 0 1 .176 1.348 1.113 1.113 0 0 1-1.005.7H14v6.877A1.125 1.125 0 0 1 12.877 19ZM7.25 17.75h5.5v-8h4.934L10 1.31 2.258 9.75H7.25v8ZM2.227 9.784l-.012.016c.01-.006.014-.01.012-.016Z"})),P=t=>r.createElement("svg",{rpl:"",fill:"currentColor",height:16,"icon-name":"downvote-outline",viewBox:"0 0 20 20",width:16,xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{d:"M10 20a1.122 1.122 0 0 1-.834-.372l-7.872-8.581A1.251 1.251 0 0 1 1.118 9.7 1.114 1.114 0 0 1 2.123 9H6V2.123A1.125 1.125 0 0 1 7.123 1h5.754A1.125 1.125 0 0 1 14 2.123V9h3.874a1.114 1.114 0 0 1 1.007.7 1.25 1.25 0 0 1-.171 1.345l-7.876 8.589A1.128 1.128 0 0 1 10 20Zm-7.684-9.75L10 18.69l7.741-8.44H12.75v-8h-5.5v8H2.316Zm15.469-.05c-.01 0-.014.007-.012.013l.012-.013Z"})),E=t=>r.createElement("svg",{rpl:"","aria-hidden":"true",className:"icon-comment",fill:"currentColor",height:20,"icon-name":"comment-outline",viewBox:"0 0 20 20",width:20,xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{d:"M7.725 19.872a.718.718 0 0 1-.607-.328.725.725 0 0 1-.118-.397V16H3.625A2.63 2.63 0 0 1 1 13.375v-9.75A2.629 2.629 0 0 1 3.625 1h12.75A2.63 2.63 0 0 1 19 3.625v9.75A2.63 2.63 0 0 1 16.375 16h-4.161l-4 3.681a.725.725 0 0 1-.489.191ZM3.625 2.25A1.377 1.377 0 0 0 2.25 3.625v9.75a1.377 1.377 0 0 0 1.375 1.375h4a.625.625 0 0 1 .625.625v2.575l3.3-3.035a.628.628 0 0 1 .424-.165h4.4a1.377 1.377 0 0 0 1.375-1.375v-9.75a1.377 1.377 0 0 0-1.374-1.375H3.625Z"})),S=t=>r.createElement("svg",{rpl:"","aria-hidden":"true",className:"icon-share",fill:"currentColor",height:20,"icon-name":"share-new-outline",viewBox:"0 0 20 20",width:20,xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{d:"m18.8 8.286-6.466-7.064a.759.759 0 0 0-1.295.537v3.277C5.623 5.365 1 9.918 1 15.082v2.907h1.274C2.516 15 5.81 12.62 9.834 12.62h1.205v3.226a.757.757 0 0 0 1.315.515l6.422-7.021A.756.756 0 0 0 19 8.8a.736.736 0 0 0-.2-.514Zm-6.508 6.3V12a.625.625 0 0 0-.625-.625H9.834A9.436 9.436 0 0 0 2.26 14.7c.228-4.536 4.525-8.435 9.4-8.435a.626.626 0 0 0 .625-.625V3.023L17.576 8.8l-5.284 5.786Zm5.586-6.107a.176.176 0 0 0-.023.024.171.171 0 0 1 .02-.028l.003.004Zm-.011.642a.53.53 0 0 0-.003-.004l.003.004Z"}));function H({initials:t,username:i,timeAgo:n,title:s,content:a,upvotes:l,comments:d,tag:h}){return e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx(v,{children:t}),e.jsx(b,{children:i}),e.jsxs(j,{children:["• ",n]})]}),e.jsx(w,{children:s}),e.jsx(y,{children:a}),e.jsx(A,{children:h}),e.jsxs(k,{children:[e.jsxs(c,{children:[e.jsx(C,{})," ",l,e.jsx(P,{})]}),e.jsxs(c,{children:[e.jsx(E,{})," ",d]}),e.jsxs(c,{children:[e.jsx(S,{})," Share"]})]})]})}const Z=o.div`
  max-width: 300px;
  border: 1px solid transparent;
  border-radius: 24px;
  background-color: #f6f8f9;
`,I=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 24px;
`,R=o.h2`
  font-size: 14px;
  font-weight: 600;
  margin-block: 12px;
  color: #576f76;
`,M=o.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`,T=o.li`
  padding: 6px 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,z=o.span`
  display: flex;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${t=>t.color};
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
  margin-bottom: 6px;
`,B=o.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #5c6c74;
`,F=o.div`
  font-size: 14px;
  margin-bottom: 3px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`,V=o.div`
  font-size: 12px;
  color: #787c7e;
`,L=o.div`
  background-color: #e1e4e8;
  height: 1.5px;
  margin-block: 12px;
`,U=[{id:1,subreddit:"r/nextjs",title:"I just launched a new monitoring SDK for Nextjs, looking for some help testi...",upvotes:7,comments:7,color:"#000000"},{id:2,subreddit:"r/nextjs",title:"How do I test user authentication using JEST?",upvotes:1,comments:1,color:"#000000"},{id:3,subreddit:"r/AskReddit",title:"What's an effortless way to burn calories quickly ?",upvotes:23,comments:148,color:"#0079d3"},{id:4,subreddit:"r/reactjs",title:"Best React Course 2023 (intermediate / advanced)",upvotes:2,comments:5,color:"#61dafb"},{id:5,subreddit:"r/reactjs",title:"What's the best place or website to learn react.js?",upvotes:76,comments:62,color:"#61dafb"},{id:6,subreddit:"r/reactjs",title:"Best React Course? I'm struggling to learn from Max.",upvotes:160,comments:216,color:"#61dafb"},{id:7,subreddit:"r/Frontend",title:"Which React course should I take on Udemy?",upvotes:0,comments:0,color:"#818384"}],N=()=>e.jsxs(Z,{children:[e.jsx(I,{children:e.jsx(R,{children:"RECENT POSTS"})}),e.jsx(M,{children:U.map(t=>e.jsxs(e.Fragment,{children:[e.jsxs(T,{children:[e.jsxs(B,{children:[e.jsx(z,{color:t.color,children:t.subreddit.charAt(2).toUpperCase()}),t.subreddit]}),e.jsx(F,{children:t.title}),e.jsxs(V,{children:[t.upvotes," upvotes · ",t.comments," comments"]})]},t.id),e.jsx(L,{})]}))})]}),D=()=>{const[t,i]=r.useState([]);return r.useEffect(()=>{p.get("http://localhost:8080/public/publication/lister").then(n=>{i(n.data)}).catch(n=>{console.error("There was an error fetching the publications!",n)})},[]),e.jsxs("div",{style:{display:"flex",gap:"24px"},children:[e.jsx("div",{children:t.map(n=>{const s=n.user.username.slice(0,2).toUpperCase();return e.jsxs(x.Fragment,{children:[e.jsx(H,{initials:s,tag:n.tag,username:n.user.username,timeAgo:n.date,title:n.title,content:n.pcontenu,upvotes:n.score,comments:n.commentaires.length}),e.jsx(u,{})]},n.idP)})}),e.jsx(N,{})]})};export{D as default};
