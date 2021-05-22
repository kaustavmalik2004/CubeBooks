import React from 'react';
import './DN.css';
import icon from './cubeicon.jpeg';
import Logo from './logo.jsx';
import App from './app.jsx';
import ReactDOM from 'react-dom';
class DN extends React.Component{
  res={ books:{
        engLit:{
            links:["https://drive.google.com/file/d/1uYn1gGa4OHLLZ8cHu_hduBs6kYPnOG73/view?usp=sharing",
                   "https://drive.google.com/file/d/1wjtgTbwlaayEQsESnn-raPdVyYTfVGtn/view?usp=sharing",
                   "https://drive.google.com/file/d/1HdxGfPakT1t6SwqQg3dTe803xl8w3CgH/view?usp=sharing",
                   "https://drive.google.com/file/d/1M0NA4YvTS2eYUtNxOO0MATNrT3wWjqB7/view?usp=sharing",
                   "https://drive.google.com/file/d/1y1Ql0xOSty9RN9C7HFW8cHXACEJ_kPr6/view?usp=sharing",
                   "https://drive.google.com/file/d/1p-ENSNQHezmLeuACytRW9e7pelc1-pJM/view?usp=sharing"],
            names:["Hornbil Class 11 CBSE",
                   "Snap Shots Class 11 CBSE",
                   "Woven words Class 11 CBSE",
                   "Flamingo Class 12 CBSE",
                   "Vistas Class 12 CBSE",
                   "Kalidieo Class 12 CBSE"]
        },
        maths:{
          links:["https://drive.google.com/file/d/11DZyXjeylgLjcb4HcLLSoYgk5AnQ04o7/view?usp=sharing",
                 "https://drive.google.com/file/d/13epQ6XzfYrnBfa-i18qXc-P7nZ0--pBa/view?usp=sharing",
                 "https://drive.google.com/file/d/11AMIuWMCojFovg-PLvjg54eKCYwgxmx1/view?usp=sharing",
                 "https://drive.google.com/file/d/1xWu4P7patieR2fK3ptnxXvRM6JDzY02g/view?usp=sharing",
                 "https://drive.google.com/file/d/1ytH-U6_k8grlqSpbQGOjg_wYV05CgWYY/view?usp=sharing",
                 "https://drive.google.com/file/d/1WX9hz4-3vEZ60loW05mZ15VnmiySjHAN/view?usp=sharing",
                 "https://drive.google.com/file/d/10w9et-a30QbDQFEa0QbRMZNa6gKAD6Ii/view?usp=sharing"],
          names:["NCERT Maths Class 12 Part 1",
                 "NCERT Maths Class 12 Part 2",
                 "NCERT Maths Class 11",
                 "SK Goyal Arihant Objective Mathematics Mains",
                 "RD Sharma for JEE Mains & Advanced Part 1",
                 "RD Sharma for JEE mains & Advanced Part 2",
                 "Complete Companion for JEE Main Mathematics Volume 1"]
        },
        physics:{
            links:["https://drive.google.com/file/d/1-3aKmtKJxhbah6nszyqiLifofkzMgUo_/view?usp=sharing",
                   "https://drive.google.com/file/d/1-3aKmtKJxhbah6nszyqiLifofkzMgUo_/view?usp=sharing",
                   "https://drive.google.com/file/d/1-9Lds7IIIMYLvpJievlrFSPkn-dlm4Md/view?usp=sharing",
                   "https://drive.google.com/file/d/1-BWTpJViTpGXHQA0ZUjydJvHtrrsYrZR/view?usp=sharing",
                   "https://drive.google.com/file/d/1-HCMKOziyFHpQiUN_ZlBNOkr3ta01lw2/view?usp=sharing",
                   "https://drive.google.com/file/d/1u3TBOjuZ63OoVvC79OGBTst5nQr2LyXi/view?usp=drivesdk",
                   "https://drive.google.com/file/d/188bmXdTyYAVKQBxL_BCeEKlP03OkKz3L/view?usp=sharing",
                   "https://drive.google.com/file/d/1aaPRsgProCg4GefaHX1V03A3ZNEhJw1w/view?usp=drivesdk",
                   "https://drive.google.com/file/d/1dYxHyLjatogTOtvGzv8kncroGqzyTf3y/view?usp=sharing",
                   "https://drive.google.com/file/d/11lv8jOqmwInJDymd6u8VEV2JgQdwWmBn/view?usp=sharing",
                   "https://drive.google.com/file/d/11pNNpAWHsSDZ_2ryoZ7SRkEpXbs4ZcQ-/view?usp=sharing",
                   "https://drive.google.com/file/d/10rIIfj0JUyLg40QOz6VAlONfVMy_SkaU/view?usp=sharing",
                   "https://drive.google.com/file/d/10rguzSUtTWhT5ZcwxDksYMiJ74XFOJXy/view?usp=sharing"],
            names:["DC Pandey Mechanics Volume 1",
                   "DC Pandey Mechanics Volume 2",
                   "DC Pandey Waves and Thermodynamics Volume 3",
                   "DC Pandey Electricity and Magnetism Volume 4",
                   "DC Pandey Optics and Modern Physics Volume 5",
                   "HC Verma Part 1",
                   "HC Verma Part 1 Solutions",
                   "HC Verma Part 2",
                   "HC Verma Part 2 Solutions",
                   "Resnick Halliday"
                   "Physics Handbook by Arihant",
                   "Problems in General Physics I.E. Irodov",
                   "Solution to I.E. Irodov"]
          },
          comp:{
            links:["https://drive.google.com/file/d/13zka_gumPfuQlVeIGwv2n_zQ2zbptEiR/view?usp=sharing"],
            names:["Preeti Arora Python"]
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
                   "https://drive.google.com/drive/folders/1ZJqO0N_MXBqzZNMONc9He3eIwrq0OZxp?usp=sharing",
                   "https://drive.google.com/file/d/10ZmFtPKZgjM-WzK7wBZYEzNyxwl2AV5z/view?usp=sharing",
                   "https://drive.google.com/file/d/11HiNpNK37mv7jAPhbsp6yl3m3qY7WD_3/view?usp=sharing"],
            names:["Organic Chemistry - M.S.Chouhan",
                   "Ms Chauhan Organic Chemistry Part 1 ",
                   "Ms Chauhan Organic Chemistry Part 2 ",
                   "Ms Chauhan Organic Chemistry Part 3 ",
                   "NCERT Chemistry Class 12 Vol 1",
                   "NCERT Chemistry Class 12 Vol 2",
                   "JD Lee Adapted By Sudarshan Guha",
                   "Master Resource Book for Chemistry"]
          },
          engLang:{
            links:[],
            names:[]
          }
    },
    notes:{
        maths:{
            links:["https://drive.google.com/file/d/1PVzsfhSvix-uPSyVcyGFTnnjweEmVBoV/view?usp=sharing",
                   "https://drive.google.com/file/d/11B7P-7NA7XI46oxbl2dSTKkVoJ_RE1q3/view?usp=sharing",
                   "https://drive.google.com/file/d/11A07EEaRwONMumJhVCEoCYrkecJs98to/view?usp=sharing",
                  "https://drive.google.com/file/d/11FTYOCK4ftrijl9gvJpg_GkaVDgTeG0b/view?usp=sharing",
                  "https://drive.google.com/file/d/112Mm5tyzJ88JLIiKkz0qv_mM05_7QdbO/view?usp=sharing",
                  "https://drive.google.com/file/d/10x_m_qTKs5EOKEXU0pECiHpdQ1JKEmRl/view?usp=sharing",
                  "https://drive.google.com/file/d/11JnAOSf5CK_XfRkB8GA452sJfmpMwvUY/view?usp=sharing"],
            names:["Complex Number",
                  "Algebra all formulas",
                  "Sequence and Series all formulas",
                  "Sets all formulas",
                  "Straight line all Formulas",
                  "Triangle all formulas iit jee",
                  "Vectors all formulas"]
          },
          physics:{
              links:["https://drive.google.com/file/d/1rzq_b604NJRr7hCNu2y5v53LpJeGtk7A/view?usp=sharing"],
              names:["ALL CHAPTER NOTES"]
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
              links:["https://drive.google.com/file/d/1SH64hogNzHE9Yd3TkeJJ6pFKhsyYz3pm/view?usp=sharing",
                     "https://drive.google.com/file/d/1SH64hogNzHE9Yd3TkeJJ6pFKhsyYz3pm/view?usp=sharing",
                     "https://drive.google.com/file/d/1SH64hogNzHE9Yd3TkeJJ6pFKhsyYz3pm/view?usp=sharing",
                     "https://drive.google.com/file/d/1a1IoXBr3JcETSz5oYZvM_tyXKLCy0DdG/view?usp=sharing",
                     "https://drive.google.com/file/d/1iF8r3r_vBjsMNh7Ola89Wty0E3YmmduT/view?usp=sharing",
                     "https://drive.google.com/file/d/11FNDcU17WbAZCn67QwpaGRer--JGRzv5/view?usp=sharing",
                     "https://drive.google.com/file/d/11AbI7XF7qVrsBdL5IJ81dScgREXi2oaw/view?usp=sharing"],
              names:["51 Chemistry Reactions",
                     "Chemistry MIND MAP",
                     "Important Organic Conversion For You",
                     "Organic Reactions Conversions Mechanisms & Problems",
                     "P-block",
                     "Chemistry Hydrogen, S-block",
                     "Important Conversion in Organic Chemistry"]
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
            links:["https://drive.google.com/file/d/16YY8yGjQhabolOwEKu2bdpE0PdG0M3hI/view?usp=sharing",
                   "https://drive.google.com/file/d/1-yHOm6zGzBnZfAOR5VGyNC1ATHtePvV0/view?usp=sharing",
                   "https://drive.google.com/file/d/10wVR3kT5eHZ2sypeYxsZ5dyj-TxY6LBs/view?usp=sharing"],
            names:["750 BLOCKBUSTER PROBLEMS",
                   "Scoremore 21 Sample Paper Mathematics",
                   "Chapterwise Question-bank with Solutions 11 & 12"]
          },
          physics:{
              links:["https://drive.google.com/file/d/10rr1dK6Ihl7cxSdDS8CaJk3k5WTrFI19/view?usp=sharing",
                     "https://drive.google.com/file/d/10u8rs8Zmo8tTHDi-ZxaGO6Ve5MFgzth_/view?usp=sharing",
                     "https://drive.google.com/file/d/10n2GdJ7rD3mt_s2x948kAvMrFiwqQBnH/view?usp=sharing",
                     "https://drive.google.com/file/d/10kNEdTn2-v2mLUGfsOXK5dAp4jyJH_cL/view?usp=sharing"],
              names:["750+ BLOCKBUSTER PROBLEMS",
                    "43 Years JEE Mains & Advance Solved Papers",
                    "Chapterwise Question Bank with Solution Class 11 & 12",
                    "Scormore 21 Sample Paper Physics"]
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
              links:["https://drive.google.com/file/d/10J-JpRxOsFaNh7fjigE15EWhCFElT-ws/view?usp=sharing",
                     "https://drive.google.com/file/d/10kEccIOc0IWByv9KjOVlqW2TKt4zxcZn/view?usp=sharing"],
              names:["Chapterwise Question Bank With Solutions Class 11 & 12",
                     "Most Difficult Previous Year Question Papers"]
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
