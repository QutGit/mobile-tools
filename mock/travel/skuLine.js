// https://github.com/Marak/faker.js/wiki
var faker = require('faker')
module.exports = function() {
    return {
        code: 200,
        "data": {
            "list": [{
                "packageName": "成人/2017-03-17/三星级/提供热水",
                "sellPrice": 12,
                "skuId": "b28469f3fe4e11e6bf9444a8421ae0af",
                "specPeople": "267",
                "specPeopleVal": "成人",
                "special1": "101",
                "special1Val": "三星级",
                "special2": "102",
                "special2Val": "提供热水",
                "special3": "",
                "special3Val": "",
                "special4": "",
                "special4Val": "",
                "special5": "",
                "special5Val": "",
                "special6": "",
                "special6Val": "",
                "special7": "",
                "special7Val": "",
                "platformSkuId": 321321,
            }, {
                "packageName": "成人/2017-03-17/三星级/不提供热水",
                "sellPrice": 99,
                "skuId": "b28469f3fe4e11e6bf9444a8421ae0af",
                "specPeople": "267",
                "specPeopleVal": "成人",
                "special1": "101",
                "special1Val": "三星级",
                "special2": "102",
                "special2Val": "不提供热水",
                "special3": "",
                "special3Val": "",
                "special4": "",
                "special4Val": "",
                "special5": "",
                "special5Val": "",
                "special6": "",
                "special6Val": "",
                "special7": "",
                "special7Val": "",
                "platformSkuId": 321321,
            }, {
                "packageName": "成人/2017-03-17/五星级/不提供热水",
                "sellPrice": 14,
                "skuId": "b2a4ffbffe4e11e6bf9444a8421ae0af",
                "specPeople": "267",
                "specPeopleVal": "成人",
                "special1": "101",
                "special1Val": "四星级",
                "special2": "103",
                "special2Val": "不提供热水",
                "special3": "",
                "special3Val": "",
                "special4": "",
                "special4Val": "",
                "special5": "",
                "special5Val": "",
                "special6": "",
                "special6Val": "",
                "special7": "",
                "special7Val": "",
                "platformSkuId": 321321,
            }, {
                "packageName": "儿童/2017-03-17/五星级/不提供热水",
                "sellPrice": 14,
                "skuId": "b2a4ffbffe4e11e6bf9444a8421ae011",
                "specPeople": "270",
                "specPeopleVal": "儿童",
                "special1": "101",
                "special1Val": "五星级",
                "special2": "103",
                "special2Val": "不提供热水",
                "special3": "",
                "special3Val": "",
                "special4": "",
                "special4Val": "",
                "special5": "",
                "special5Val": "",
                "special6": "",
                "special6Val": "",
                "special7": "",
                "special7Val": "",
                "platformSkuId": 321321,
            }],
            "message": "查询成功",
            "specList": [{ "id": "1", "name": "酒店星级", "subConf": [{ "id": "101", "name": "四星级" }, { "id": "200", "name": "三星级" }, { "id": "300", "name": "五星级" }] }, { "id": "138", "name": "提供热水", "subConf": [{ "id": "102", "name": "不提供热水" }, { "id": "103", "name": "提供热水" }] }],
            "toast": "",
            "specPeople": {
                "id": "-2",
                "name": "人群规格",
                "subConf": [{
                    "id": "270",
                    "name": "儿童"
                }, {
                    "id": "267",
                    "name": "成人"
                }]
            }
        }

        // "data": {
        //     "list": [{
        //         "packageName": "成人/2017-03-17/三星级/提供热水/含门票",
        //         "sellPrice": 12,
        //         "skuId": "b28469f3fe4e11e6bf9444a8421ae0af",
        //         "specPeople": "267",
        //         "specPeopleVal": "成人",
        //         "special1": "101",
        //         "special1Val": "三星级",
        //         "special2": "102",
        //         "special2Val": "提供热水",
        //         "special3": "",
        //         "special3Val": "",
        //         "special4": "",
        //         "special4Val": "",
        //         "special5": "",
        //         "special5Val": "",
        //         "special6": "",
        //         "special6Val": "",
        //         "special7": "",
        //         "special7Val": "",
        //         "platformSkuId": 321321,
        //     }, {
        //         "packageName": "成人/2017-03-17/三星级/不提供热水/不含门票",
        //         "sellPrice": 99,
        //         "skuId": "b28469f3fe4e11e6bf9444a8421ae0af",
        //         "specPeople": "267",
        //         "specPeopleVal": "成人",
        //         "special1": "101",
        //         "special1Val": "三星级",
        //         "special2": "102",
        //         "special2Val": "不提供热水",
        //         "special3": "",
        //         "special3Val": "",
        //         "special4": "",
        //         "special4Val": "",
        //         "special5": "",
        //         "special5Val": "",
        //         "special6": "",
        //         "special6Val": "",
        //         "special7": "",
        //         "special7Val": "",
        //         "platformSkuId": 321321,
        //     }, {
        //         "packageName": "成人/2017-03-17/五星级/不提供热水/含门票",
        //         "sellPrice": 14,
        //         "skuId": "b2a4ffbffe4e11e6bf9444a8421ae0af",
        //         "specPeople": "267",
        //         "specPeopleVal": "成人",
        //         "special1": "101",
        //         "special1Val": "四星级",
        //         "special2": "103",
        //         "special2Val": "不提供热水",
        //         "special3": "",
        //         "special3Val": "",
        //         "special4": "",
        //         "special4Val": "",
        //         "special5": "",
        //         "special5Val": "",
        //         "special6": "",
        //         "special6Val": "",
        //         "special7": "",
        //         "special7Val": "",
        //         "platformSkuId": 321321,
        //     }, {
        //         "packageName": "儿童/2017-03-17/五星级/不提供热水/不含门票",
        //         "sellPrice": 14,
        //         "skuId": "b2a4ffbffe4e11e6bf9444a8421ae011",
        //         "specPeople": "270",
        //         "specPeopleVal": "儿童",
        //         "special1": "101",
        //         "special1Val": "五星级",
        //         "special2": "103",
        //         "special2Val": "不提供热水",
        //         "special3": "",
        //         "special3Val": "",
        //         "special4": "",
        //         "special4Val": "",
        //         "special5": "",
        //         "special5Val": "",
        //         "special6": "",
        //         "special6Val": "",
        //         "special7": "",
        //         "special7Val": "",
        //         "platformSkuId": 321321,
        //     }],
        //     "message": "查询成功",
        //     "specList": [{ "id": "1", "name": "酒店星级", "subConf": [{ "id": "101", "name": "四星级" }, { "id": "200", "name": "三星级" }, { "id": "300", "name": "五星级" }] }, { "id": "138", "name": "提供热水", "subConf": [{ "id": "102", "name": "不提供热水" }, { "id": "103", "name": "提供热水" }] }, { "id": "140", "name": "是否含门票", "subConf": [{ "id": "112", "name": "含门票" }, { "id": "119", "name": "不含门票" }] }],
        //     "toast": "",
        //     "specPeople": {
        //         "id": "-2",
        //         "name": "人群规格",
        //         "subConf": [{
        //             "id": "270",
        //             "name": "儿童"
        //         }, {
        //             "id": "267",
        //             "name": "成人"
        //         }]
        //     }
        // }

        // "data": {
        //     "list": [{
        //         "packageName": "成人/2017-03-17/三星级",
        //         "sellPrice": 12,
        //         "skuId": "b28469f3fe4e11e6bf9444a8421ae0af",
        //         "specPeople": "267",
        //         "specPeopleVal": "成人",
        //         "special1": "101",
        //         "special1Val": "三星级",
        //         "special2": "102",
        //         "special2Val": "提供热水",
        //         "special3": "",
        //         "special3Val": "",
        //         "special4": "",
        //         "special4Val": "",
        //         "special5": "",
        //         "special5Val": "",
        //         "special6": "",
        //         "special6Val": "",
        //         "special7": "",
        //         "special7Val": "",
        //         "platformSkuId": 321321,
        //     }, {
        //         "packageName": "成人/2017-03-17/三星级",
        //         "sellPrice": 99,
        //         "skuId": "b28469f3fe4e11e6bf9444a8421ae0af",
        //         "specPeople": "267",
        //         "specPeopleVal": "成人",
        //         "special1": "101",
        //         "special1Val": "三星级",
        //         "special2": "102",
        //         "special2Val": "不提供热水",
        //         "special3": "",
        //         "special3Val": "",
        //         "special4": "",
        //         "special4Val": "",
        //         "special5": "",
        //         "special5Val": "",
        //         "special6": "",
        //         "special6Val": "",
        //         "special7": "",
        //         "special7Val": "",
        //         "platformSkuId": 321321,
        //     }, {
        //         "packageName": "成人/2017-03-17/五星级",
        //         "sellPrice": 14,
        //         "skuId": "b2a4ffbffe4e11e6bf9444a8421ae0af",
        //         "specPeople": "267",
        //         "specPeopleVal": "成人",
        //         "special1": "101",
        //         "special1Val": "四星级",
        //         "special2": "103",
        //         "special2Val": "不提供热水",
        //         "special3": "",
        //         "special3Val": "",
        //         "special4": "",
        //         "special4Val": "",
        //         "special5": "",
        //         "special5Val": "",
        //         "special6": "",
        //         "special6Val": "",
        //         "special7": "",
        //         "special7Val": "",
        //         "platformSkuId": 321321,
        //     }, {
        //         "packageName": "儿童/2017-03-17/五星级",
        //         "sellPrice": 14,
        //         "skuId": "b2a4ffbffe4e11e6bf9444a8421ae011",
        //         "specPeople": "270",
        //         "specPeopleVal": "儿童",
        //         "special1": "101",
        //         "special1Val": "五星级",
        //         "special2": "103",
        //         "special2Val": "不提供热水",
        //         "special3": "",
        //         "special3Val": "",
        //         "special4": "",
        //         "special4Val": "",
        //         "special5": "",
        //         "special5Val": "",
        //         "special6": "",
        //         "special6Val": "",
        //         "special7": "",
        //         "special7Val": "",
        //         "platformSkuId": 321321,
        //     }],
        //     "message": "查询成功",
        //     "specList": [{ "id": "1", "name": "酒店星级", "subConf": [{ "id": "101", "name": "四星级" }, { "id": "200", "name": "三星级" }, { "id": "300", "name": "五星级" }] }],
        //     "toast": "",
        //     "specPeople": {
        //         "id": "-2",
        //         "name": "人群规格",
        //         "subConf": [{
        //             "id": "270",
        //             "name": "儿童"
        //         }, {
        //             "id": "267",
        //             "name": "成人"
        //         }]
        //     }
        // }

        // "data": {
        //     "list": [{
        //         "packageName": "成人/2017-03-12",
        //         "sellPrice": 11100,
        //         "skuId": "d13061e3057011e7aa5644a8421ae0af",
        //         "specPeople": "267",
        //         "specPeopleVal": "成人",
        //         "special1": "",
        //         "special1Val": "",
        //         "special2": "",
        //         "special2Val": "",
        //         "special3": "",
        //         "special3Val": "",
        //         "special4": "",
        //         "special4Val": "",
        //         "special5": "",
        //         "special5Val": "",
        //         "special6": "",
        //         "special6Val": "",
        //         "special7": "",
        //         "special7Val": ""
        //     }, {
        //         "packageName": "儿童/2017-03-12",
        //         "sellPrice": 11100,
        //         "skuId": "d151fd18057011e7aa5644a8421ae0af",
        //         "specPeople": "269",
        //         "specPeopleVal": "儿童",
        //         "special1": "",
        //         "special1Val": "",
        //         "special2": "",
        //         "special2Val": "",
        //         "special3": "",
        //         "special3Val": "",
        //         "special4": "",
        //         "special4Val": "",
        //         "special5": "",
        //         "special5Val": "",
        //         "special6": "",
        //         "special6Val": "",
        //         "special7": "",
        //         "special7Val": ""
        //     }],
        //     "message": "查询成功",
        //     "specConf": "{\"-2\":[\"267(split)成人\",\"269(split)儿童\"],\"-1\":[\"1489075200000(split)2017-03-10\",\"1489161600000(split)2017-03-11\",\"1489248000000(split)2017-03-12\",\"1489334400000(split)2017-03-13\",\"1489420800000(split)2017-03-14\",\"1489507200000(split)2017-03-15\",\"1489593600000(split)2017-03-16\",\"1489680000000(split)2017-03-17\",\"1489766400000(split)2017-03-18\",\"1489852800000(split)2017-03-19\",\"1489939200000(split)2017-03-20\",\"1490025600000(split)2017-03-21\",\"1490112000000(split)2017-03-22\",\"1490198400000(split)2017-03-23\",\"1490284800000(split)2017-03-24\",\"1490371200000(split)2017-03-25\",\"1490457600000(split)2017-03-26\",\"1490544000000(split)2017-03-27\",\"1490630400000(split)2017-03-28\",\"1490716800000(split)2017-03-29\",\"1490803200000(split)2017-03-30\",\"1490889600000(split)2017-03-31\"]}",
        //     "specList": [],
        //     "toast": ""
        // }

    }
}
