import service from "@/utils/request";

// JSON.stringify(data)
export default {
    getPageInfo(currentPage,size,data){
        return service({
            url:`/admin/hosp/hospitalSet/pageHelper/${currentPage}/${size}`,
            method:'post',
            data:data
        })
    }
}