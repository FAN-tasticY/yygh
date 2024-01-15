import service from "@/utils/request";

// JSON.stringify(data)
export default {
    getPageInfo(currentPage,size,data){
        return service({
            url:`/admin/hosp/hospitalSet/pageHelper/${currentPage}/${size}`,
            method:'post',
            data:data
        })
    },
    batchDelete(ids){
        return service({
            url:'/admin/hosp/hospitalSet/batchDelete',
            method:'post',
            data:JSON.stringify(ids)
        })
    },
    oneDelete(id){
        return service({
            url:`/admin/hosp/hospitalSet/oneDelete/${id}`,
            method:'get'
        })
    },
    changeStatus(id,status){
        return service({
            url:`/admin/hosp/hospitalSet/changeStatus/${id}/${status}`,
            method:'get'
        })
    }
}