// https://github.com/Marak/faker.js/wiki
var faker = require('faker')
module.exports = function() {
    return {
        "code": 200,
        "data": {
            "message": "",
            "orderDto": {
                "cancelRemark": "",
                "carBrandId": "",
                "carBrandName": "",
                "carDisplaceName": "",
                "carEngineNo": "",
                "carLicenseNo": "",
                "carTypeName": "",
                "connectAddress": "北京市北京好望山",
                "connectMobile": "18610535297",
                "connectName": "李双宝",
                "couponPrice": "",
                "couponWay": 0,
                "createAt": 1499225004415,
                "gorderCode": "MN32000011707051123242452",
                "id": "bdb77ed9d4194f389eb3d1f23ad13af6",
                "invoiceFlag": 0,
                "invoiceTitile": "",
                "invoiceType": 0,
                "managerRemark": "",
                "mechanicId": "",
                "mechanicMobile": "18610987651",
                "mechanicName": "王师傅",
                "memberId": "5c4dbbdef16349d49d2f983f7725fef3",
                "memberMobile": "18610535297",
                "memberName": "李双宝",
                "memberRemark": "",
                "orderRefund": null,
                "orderServiceList": [{
                    "orderId": "bdb77ed9d4194f389eb3d1f23ad13af6",
                    "serviceName": "机油更换",
                    "servicePartDtoList": [{
                        "brand": "美孚",
                        "model": "速霸2000 SN 5W-40 1升",
                        "num": 7,
                        "orderId": "bdb77ed9d4194f389eb3d1f23ad13af6",
                        "price": "6500.0",
                        "serviceId": "570e0021c5e24d978f5cd27482fa3e77",
                        "size": "1.0",
                        "thirdPartId": "57d6649d71f4adbe58001e77",
                        "thirdPartName": "",
                        "totalPrice": "45500.0",
                        "type": "机油",
                        "unit": "速霸2000 SN 5W-40 半合成"
                    }],
                    "servicePrice": "5000.0",
                    "thirdServiceId": "595c5b35ba535e3282000066"
                }, {
                    "orderId": "bdb77ed9d4194f389eb3d1f23ad13af6",
                    "serviceName": "空调滤更换",
                    "servicePartDtoList": [],
                    "servicePrice": "3000.0",
                    "thirdServiceId": "595c5b35ba535e3282000068"
                }, {
                    "orderId": "bdb77ed9d4194f389eb3d1f23ad13af6",
                    "serviceName": "基础服务费",
                    "servicePartDtoList": [],
                    "servicePrice": "5000.0",
                    "thirdServiceId": "595c5b35ba535e3282000070"
                }, {
                    "orderId": "bdb77ed9d4194f389eb3d1f23ad13af6",
                    "serviceName": "32项安全检测",
                    "servicePartDtoList": [],
                    "servicePrice": "0.0",
                    "thirdServiceId": "595c5b35ba535e328200006a"
                }, {
                    "orderId": "bdb77ed9d4194f389eb3d1f23ad13af6",
                    "serviceName": "空滤更换",
                    "servicePartDtoList": [],
                    "servicePrice": "2000.0",
                    "thirdServiceId": "595c5b35ba535e328200006c"
                }, {
                    "orderId": "bdb77ed9d4194f389eb3d1f23ad13af6",
                    "serviceName": "机滤更换",
                    "servicePartDtoList": [],
                    "servicePrice": "0.0",
                    "thirdServiceId": "595c5b35ba535e328200006e"
                }],
                "partnerId": "1001015",
                "partnerName": "北京好望山",
                "partnerRemark": "",
                "payAt": 1499225012213,
                "payStatus": 105,
                "payWay": 61,
                "payeeId": "0",
                "payeeName": "",
                "projectId": 76,
                "projectName": "北京好望山",
                "promotionList": [{
                    "couponCode": "",
                    "create_at": 1499225004381,
                    "create_by": "",
                    "discount": "50",
                    "discountCostProvider": "",
                    "discountCostType": 0,
                    "id": "2c9180c25d0d218d015d10c6194b000c",
                    "isPayCallBack": 0,
                    "isRefundall": 0,
                    "isUseCoupon": 0,
                    "isdel": 0,
                    "orderCode": "MN32000011707051123242452",
                    "payCallBackType": 0,
                    "payCallBackURL": "",
                    "promotionId": "2c9180905d0d3583015d0d3967330000",
                    "promotionName": "卡拉丁订单促销",
                    "subOrderCode": "",
                    "totalCouponPrice": "",
                    "type": 2,
                    "update_at": 0,
                    "update_by": ""
                }],
                "realpayPrice": "55500.00",
                "regionId": 1,
                "regionName": "北京市",
                "serviceEndAt": 0,
                "serviceStartAt": 1499299200000,
                "shouldPayPrice": "",
                "skuId": "17584",
                "skuImage": "https://img1.qdingnet.com/image-3686b6da-0404-4634-8d44-1979c2ec3b0c.png",
                "skuName": "机油三滤",
                "sourceType": 0,
                "status": 2,
                "thirdCategoryId": "58de099771f4adef6a000085",
                "thirdCategoryName": "机油三滤套餐",
                "thirdOrderNo": "665344",
                "totalPrice": "60500.0"
            },
            "toast": ""
        }
    }
};