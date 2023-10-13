const CardCategory = ({categories}) => {
    return (
        <>
            {
                categories.map(category => (
                    <div className="my-2 col-sm-12 col-md-6 col-lg-3" key={category}>
                        <div className="card col-12 rounded-0">
                            <img className="card-img-top img-fluid" style={{ width: "100%", height: "12rem" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbpTWYcd7pvgiV3kKdoWot03kpzNtmM7iXg&usqp=CAU" alt="Card image cap" />
                            <div className="card-body p-1 mt-1">
                                <h5>{category}</h5>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default CardCategory;