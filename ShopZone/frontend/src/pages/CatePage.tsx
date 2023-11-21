import { Link } from "react-router-dom";

const CatePage = () => {

    return (
        <div className="flex justify-center">
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16">

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link to={`/cate/OS`}>
                        <img
                            className="rounded-t-lg"
                    src="/static/logo.png"
                            alt=""
                        />
                    </Link>
                    <div className="p-5 ">
                        <Link to={`/cate/OS`}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Jarabes
                            </h5>
                        </Link>
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/cate/Libros`}>
<img
    className="rounded-t-lg w-16 h-16 mx-auto p-2"
    src="https://cdn-icons-png.flaticon.com/128/2702/2702162.png"
    alt="carga de imagen"
/>

                    </Link>
                    <div className="p-5 ">
                        <Link to={`/cate/Libros`}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Libros
                            </h5>
                        </Link>
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/cate/Lang`}>
                        <img
                            className="rounded-t-lg"
                    src="/static/logo.png"
                            alt="carga de imagen"
                        />
                    </Link>
                    <div className="p-5 ">
                        <Link to={`/cate/`}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Cremas
                            </h5>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default CatePage;
