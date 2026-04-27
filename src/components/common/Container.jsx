
const Container = ({ children, className }) => {
    return (
        <div className={`lg:max-w-[1320px] max-w-[290px] mx-auto ${className}`}>{children}</div>
    )
}

export default Container