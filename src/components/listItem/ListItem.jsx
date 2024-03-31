import './listItem.scss'
import {Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined} from '@material-ui/icons'
import { useState } from 'react'
export default function ListItem({index}) {
    const [isHoverd, setIsHoverd] = useState(false)
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"

    return (
        <div className="listItem" 
        onMouseEnter={()=> setIsHoverd(true)}
        onMouseLeave={()=> setIsHoverd(false)}
        style={{left : isHoverd && 225*index - 50 + index*2.5}}
        >
             <img
                src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
                alt=""
            />

            {isHoverd && (
                <>
                    <video src={trailer} autoPlay={true} loop></video><div className="item-info">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpOutlined className="icon" />
                            <ThumbDownOutlined className="icon" />
                        </div>

                        <div className="item-info-top">
                            <span>1 hour 15 min</span>
                            <span className="limit">+16</span>
                            <span>1999</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolore qui est unde officia velit minima perferendis modi autem quis.
                        </div>

                        <div className="genre">Action </div>
                    </div>
                </>
            )}
            

        </div>
    )
}
