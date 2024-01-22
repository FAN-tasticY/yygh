import service from "@/utils/request";

export default {
    getInfoByPid(pid){
        return service({
            url:`/admin/cmn/childList/${pid}`
            ,method:'get'
        })
    }
}