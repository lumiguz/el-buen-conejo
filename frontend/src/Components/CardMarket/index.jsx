const index = () => {
    return (
        <div className="my-2 col-sm-12 col-md-6 col-lg-3">
            <div className="card col-12 rounded-0">
                <img className="card-img-top img-fluid" style={{width: "100%", height: "12rem"}} src="https://th.bing.com/th/id/OIP.XRlOnjf2ZKcd6OvKLsOazgHaHa?pid=ImgDet&rs=1" alt="Card image cap"/>
                    <div className="card-body p-1 mt-1">
                        <h5>Titulo</h5>
                        <h6 className="text-muted">$999</h6>
                        <h6 className="text-muted">Ubicación</h6>
                    </div>
            </div>
        </div>
    );
};

export default index;