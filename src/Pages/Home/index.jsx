import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const [value, setValue] = useState();
    const navigate = useNavigate();
    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`)

    }, [navigate, value])
    return (
        <>
            <div style={{"background":"black","width": "100vw", "height": "100vh","paddingTop":"40px"}}>
                <div style={{ "width": "500px", "height": "500px", "background": "tranparent", "padding":" 200px 150px","margin": "auto" ,"paddingTop":"190px","border":"2px dotted white  " ,"borderRadius":"50%"}}>
                    <div style={{ "margin": "auto"}}>
                        <input value={value} style={{"width": "200px", "height": "50px", "background": "tranparent","fontFamily":"cursive","textAlign":"center","fontSize":"1.2rem","borderRadius":"8px"}}
                            onChange={(e) => setValue(e.target.value)} type='text' placeholder='Enter Room code'></input>
                      <hr/>
                        <button onClick={handleJoinRoom} style={{"width":"100px","height":"30px","background":"green","fontFamily":"cursive","textAlign":"center","fontSize":"1rem","borderRadius":"5px","color":"white","marginLeft":"45px","border":"1px solid white"}}>Join</button>
                    </div>

                </div>
            </div>

        </>

    );
};
export default HomePage;