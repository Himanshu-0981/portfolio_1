import './Button.css'
function Button(props) {
    const { title, btnIcon, onhandleClick ,customClass} = props;
    return (
        <>
            <button className={customClass} onClick={onhandleClick}>{title} {btnIcon}  </button>
        </>
    )
}
export default Button;                          