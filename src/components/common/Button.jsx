
const Button = ({btnText , className}) => {
    return (
        <button className={`lg:py-3.5 lg:px-7 px-3 py-2 font-semibold lg:text-base text-sm rounded-[100px] bg-[#FF7628] text-white border border-[#FF7628] hover:bg-white hover:text-[#FF7628] duration-500 ${className}`}>{btnText}</button>
    )
}

export default Button