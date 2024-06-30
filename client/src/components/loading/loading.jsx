import loadingcss from "./loading.css"
import loadUI from "./assets/spinner.svg"
import Image from "next/image"


function LoadingUI() {
    return(
        <div className="loading-ui">
            <Image src={loadUI} />
        </div>
    )
}
export default LoadingUI