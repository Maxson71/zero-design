const HomeIcon = (props) => {
    return (
        <div className="home-icon flex gap-4 items-center">
            <div className="icon flex items-center justify-center rounded-full w-12 h-12">
                <img src={props.icon} alt="icon" className="w-16 h-16"/>
            </div>
            <div className="info">
                <h3 className="title">{props.title}</h3>
            </div>
        </div>
    )
}

export default HomeIcon;