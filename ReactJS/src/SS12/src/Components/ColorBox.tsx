
type ColorBoxProps = {
    color: string;
}
function ColorBox({color}: ColorBoxProps){
    return(
        <div>
        <div 
            style={{
                width: "200px", 
                height: "200px",    
                backgroundColor: color,
                color: "white",
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}> 
            Box
        </div>
    </div>
    )
}
export default ColorBox;