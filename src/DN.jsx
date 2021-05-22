import React from 'react';
import './DN.css';
import icon from './cubeicon.jpeg';
import Logo from './logo.jsx';
import App from './app.jsx';
import ReactDOM from 'react-dom';
class DN extends React.Component{
  res={ books:{
        engLit:{
            links:["https://drive.google.com/file/d/1uYn1gGa4OHLLZ8cHu_hduBs6kYPnOG73/view?usp=drivesdk",
                   "https://drive.google.com/file/d/1wjtgTbwlaayEQsESnn-raPdVyYTfVGtn/view?usp=drivesdk",
                   "https://drive.google.com/file/d/1HdxGfPakT1t6SwqQg3dTe803xl8w3CgH/view?usp=drivesdk",
                   "https://drive.google.com/file/d/1M0NA4YvTS2eYUtNxOO0MATNrT3wWjqB7/view?usp=drivesdk",
                   "https://drive.google.com/file/d/1p-ENSNQHezmLeuACytRW9e7pelc1-pJM/view?usp=drivesdk",
                   "https://drive.google.com/file/d/1y1Ql0xOSty9RN9C7HFW8cHXACEJ_kPr6/view?usp=drivesdk"],
            names:["Hornbil Class 11 CBSE",
                   "Snap Shots Class 11 CBSE",
                   "Woven words Class 11 CBSE",
                   "Flamingo Class 11 CBSE",
                   "Vistas Class 11 CBSE"]
        },
        maths:{
          links:["https://drive.google.com/file/d/11DZyXjeylgLjcb4HcLLSoYgk5AnQ04o7/view?usp=drivesdk",
                 "https://drive.google.com/file/d/13epQ6XzfYrnBfa-i18qXc-P7nZ0--pBa/view?usp=sharing",
                 "https://drive.google.com/file/d/11AMIuWMCojFovg-PLvjg54eKCYwgxmx1/view?usp=drivesdk",
                 "https://drive.google.com/file/d/1xWu4P7patieR2fK3ptnxXvRM6JDzY02g/view?usp=sharing",
                 "https://drive.google.com/file/d/1ytH-U6_k8grlqSpbQGOjg_wYV05CgWYY/view?usp=sharing",
                 "https://drive.google.com/file/d/1WX9hz4-3vEZ60loW05mZ15VnmiySjHAN/view?usp=sharing"],
          names:["NCERT Maths Class 12 Part 1",
                 "NCERT Maths Class 12 Part 2",
                 "NCERT Maths Class 11",
                 "SK Goyal Arihant Objective Mathematics Mains",
                 "RD Sharma for JEE Mains and Advanced Part 1",
                 "RD Sharma for JEE mains and Advanced Part 2 "]
        },
        physics:{
            links:["https://drive.google.com/file/d/1-BWTpJViTpGXHQA0ZUjydJvHtrrsYrZR/view?usp=drivesdk",
                   "https://drive.google.com/file/d/1-3aKmtKJxhbah6nszyqiLifofkzMgUo_/view?usp=drivesdk",
                   "https://drive.google.com/file/d/1-99KMsuc5WF0VUhpyODXaSFM0BNxMCnm/view?usp=drivesdk",
                   "https://drive.google.com/file/d/1-HCMKOziyFHpQiUN_ZlBNOkr3ta01lw2/view?usp=drivesdk",
                   "https://drive.google.com/file/d/1-9Lds7IIIMYLvpJievlrFSPkn-dlm4Md/view?usp=drivesdk",
                   "https://drive.google.com/file/d/1u3TBOjuZ63OoVvC79OGBTst5nQr2LyXi/view?usp=drivesdk",
                   "https://drive.google.com/file/d/188bmXdTyYAVKQBxL_BCeEKlP03OkKz3L/view?usp=drivesdk",
                   "https://drive.google.com/file/d/1aaPRsgProCg4GefaHX1V03A3ZNEhJw1w/view?usp=drivesdk",
                   "https://drive.google.com/file/d/1dYxHyLjatogTOtvGzv8kncroGqzyTf3y/view?usp=drivesdk"],
            names:["DC Pandey Electricity and Magnetism",
                   "DC Pandey Mechanics Volume 1",
                   "DC Pandey Mechanics Volume 2",
                   "DC Pandey Optics and Modern Physics Volume 5",
                   "DC Pandey Waves and Thermodynamics Volume 3",
                   "HC Verma Part 1",
                   "HC Verma Part 1 Solutions",
                   "HC Verma Part 2",
                   "HC Verma Part 2 Solutions"]
          },
          comp:{
            links:[],
            names:[]
          },
          hindi:{
            links:[],
            names:[]
          },
          chem:{
            links:["https://drive.google.com/file/d/1hjIc7vCPiyIDoDxZEfqWnR9NFGojLb7H/view?usp=sharing",
                   "https://drive.google.com/file/d/1Mmf3e--VCowfLaRlFF2ft9Xqq_fnM4WK/view?usp=sharing",
                   "https://drive.google.com/file/d/1Bm7L6qCLeaoLO1ejfrqhT01YKGviUjmm/view?usp=sharing",
                   "https://drive.google.com/file/d/1QUtdcWGphoh9JBiqvinaoKX3Y7coEsdY/view?usp=sharing",
                   "https://drive.google.com/drive/folders/1BRXJq02_0jFmnCh6Hi9ME8fqWa-lXoM1?usp=sharing",
                   "https://drive.google.com/drive/folders/1ZJqO0N_MXBqzZNMONc9He3eIwrq0OZxp?usp=sharing"],
            names:["Organic Chemistry - M.S.Chouhan",
                   "Ms Chauhan Organic Chemistry Part 1 ",
                   "Ms Chauhan Organic Chemistry Part 2 ",
                   "Ms Chauhan Organic Chemistry Part 3 ",
                   "NCERT Chemistry Vol 1",
                   "NCERT Chemistry Vol 2"]
          },
          engLang:{
            links:[],
            names:[]
          }
    },
    notes:{
        maths:{
            links:[],
            names:[]
          },
          physics:{
              links:[],
              names:[]
            },
            comp:{
              links:[],
              names:[]
            },
            hindi:{
              links:[],
              names:[]
            },
            chem:{
              links:[],
              names:[]
            },
            engLang:{
              links:[],
              names:[]
            },
            engLit:{
                links:[],
                names:[]
              }
    },
    papers:{
        maths:{
            links:[],
            names:[]
          },
          physics:{
              links:[],
              names:[]
            },
            comp:{
              links:[],
              names:[]
            },
            hindi:{
              links:[],
              names:[]
            },
            chem:{
              links:[],
              names:[]
            },
            engLang:{
              links:[],
              names:[]
            },
            engLit:{
                links:[],
                names:[]
              }
    }
  }
  renderOriginal=()=>
  {
    ReactDOM.render(<App></App>,document.getElementById("root"))
      document.getElementsByTagName("html")[0].classList.toggle("coolbg");
}
    render(){
        let req=this.props.req;
     document.getElementsByTagName("html")[0].classList.toggle("coolbg");
        let elems=[];
        // elems.push(<div onClick={this.renderOriginal} className="returnHome"><Logo></Logo></div>)
        if(this.res[req][this.props.subject].links.length===0){
          elems.push(<h1>Oops!</h1>)
          elems.push(<code>Sorry but the resource you requested for <br/>is currently unavialabe.We will try to make it available ASAP<br/>
          Till then stay home stay safe</code>)
        }
        for(let i=0;i<this.res[req][this.props.subject].links.length;i++){
           
            elems.push(<p className="download">{this.res[req][this.props.subject].names[i]}</p>)
            elems.push(<div  class="links"><a href={this.res[req][this.props.subject].links[i]}><img src={icon} class="cubeico" alt="download"/></a></div>)
        }
        return(<div class="container">
        <div onClick={this.renderOriginal} className="returnHome"><Logo></Logo></div>
        <div className="download-wrapper">{elems}</div>
        </div>)
    }
}
export default DN;
