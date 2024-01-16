import service from "@/utils/request";

export default {
    getInfoByPid(pid){
        return service({
            url:`http://localhost:8202/admin/cmn/childList/${pid}`
            ,method:'get'
        })
    }
}