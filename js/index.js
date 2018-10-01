/**
 * Created by gy on 2018/9/29.
 */
$(function () {
    $("#btnYes").click(function () {
        $("#index-1").addClass("am-active");
        $("#index-2").removeClass("am-active");
        $("#index-3").removeClass("am-active");
        $("#btn1").addClass("am-active");
        $("#btn2").removeClass("am-active");
        $("#btn3").removeClass("am-active");
    });
    $("#backgo").click(function () {
        window.history.go(-1);
    });

    var list = '{"list": [' +
        '{ "id":"1","imageurl":"../img/wangdewang.jpg","name":"王德旺","hospital":"武汉九州通医院", "office":"普外科","synopsis":"王德望、骨科副主任医师。1966年毕业于同济医科大学医疗系，曾在协和医院骨科、武汉市一医院从事外（骨）科工作50余年。","Professor":"副主任医师","expert":"对外（骨）科常见病及疑难病例有丰富的治疗经验。" },' +
        '{ "id":"2","imageurl":"../img/hujianjun.jpg","name":"胡建军","hospital":"武汉九州通医院", "office":"普通内科","synopsis":"胡建军、主治医师。从1997年参加工作一直从事内科临床工作。细致、严谨、认真的工作态度，积极接诊患者，在工作中总结经验并应用于临床。","Professor":"主治医师","expert":"对常见呼吸道疾病、心脑血管疾病、泌尿系统疾病治疗有丰富经验。" },' +
        '{ "id":"3","imageurl":"../img/wangzuxiu.jpg","name":"王祖秀","hospital":"武汉九州通医院","office":"妇科","synopsis":"王祖秀、主任医师。1960年毕业于武汉职工医学院临床系。曾在应城市人民医院从事妇产科工作40余年，妇产科主任。1986年10月-1988年10月参加援外“阿尔及利亚中国医疗队”两年。","Professor":"主任医师","expert":"对计生手术（人工流产术）及妇科、产科各类手术、妇产科急诊及危重病人的抢救、妇科常见多发疾病。" },' +
        '{ "id":"4","imageurl":"../img/zhangyong.jpg","name":"张勇","hospital":"武汉九州通医院","office":"口腔科","synopsis":"张勇，口腔科主治医师。武汉市二甲医院从事口腔临床工作二十余年。曾在武汉大学口腔医院进修学习二年。","Professor":"主治医师","expert":"对常见口腔粘膜病及牙齿龋病充填、智齿治疗、牙体缺失、牙列矫形、正畸修复有丰富的临床治疗经验。" },' +
        '{ "id":"5","imageurl":"../img/pujianglian.jpg","name":"蒲江莲","hospital":"武汉九州通医院", "office":"普通内科","synopsis":"从事临床23年，内科副主任医师。国家2级健康管理师，国家2级心理咨询师，国家2级公共营养师。先后在湖北省人民医院、北京中医药大学附属东直门医院、华中科技大学同济医学院附属同济医院进修学习。","Professor":"副主任医师","expert":"对内科常见病、多发病熟练掌握。尤其是糖尿病、急慢性肾病、心脑血管疾病的治疗有独到见解。" },' +
        '{ "id":"6","imageurl":"../img/lihui.jpg","name":"李辉","hospital":"武汉九州通医院","office":"普通内科","synopsis":"毕业于同济医科大学，从事临床内科专业20余年，慢病调理5年，临床经验丰富。","Professor":"副主任医师","expert":"擅长慢性疾病及甲状腺的治疗，如：高血压、心脏病、糖尿病、甲状腺囊肿、甲状腺结节等" },' +
        '{ "id":"7","imageurl":"../img/yangshiyu.jpg","name":"杨时雨","hospital":"武汉九州通医院", "office":"心血管内科","synopsis":"2003毕业于武汉大学，先后在广州军区武汉总医院急诊科和亚洲心脏病医院心内科工作，熟练掌握高血压，冠心病，心肌病，心力衰竭，心瓣膜疾病和各种心律失常，以及各种出血性脑病，缺血性脑病，脑动脉硬化以及颅脑占位疾病诊断与治疗。对于内科急重症也有丰富的诊疗经验。","Professor":"主治医师","expert":"高血压，冠心病，心肌病，心力衰竭，心瓣膜疾病和各种心律失常，以及各种脑血管疾病。" },' +
        '{ "id":"8","imageurl":"../img/tanshuangshuang.jpg","name":"谭双双","hospital":"武汉九州通医院", "office":"妇科","synopsis":"谭双双，主治医师。2004年毕业于华中科技大学同济医学院。从事妇产科工作10余年。熟练掌握妇科常见疾病的诊疗工作。","Professor":"主治医师","expert":"对计生手术（人工流产术）及妇科、产科各类手术，妇产科急诊及危重病人的抢救、妇科常见多发疾病月经不调、阴道炎、宫颈炎、外阴湿疣、宫颈糜烂等有丰富治疗经验。" }]}';
    var doctorList = JSON.parse(list);
    console.log(doctorList.list);
    for (i = 0; i < doctorList.list.length; i++) {
        var doctorDiv = '<div class="doctor-item">' +
            '<div class="am-g item-top">' +
            '<div class="am-u-sm-3"><img class="am-circle" src="' + doctorList.list[i].imageurl + '" width="74px"/></div>' +
            '<div class="am-u-sm-3 name" id="val1">' + doctorList.list[i].name + '</div>' +
            '<div class="am-u-sm-6 right">' +
            '<button class="am-btn" data-am-modal="{target: \'#my-alert\',closeViaDimmer: 0}"><span class="am-icon-video-camera"></span>视频问诊</button>' +
            '</div>' +
            '</div>' +
            '<a class="am-g item-text" id="' + doctorList.list[i].id + '" >' +
            '<div class="am-u-sm-2 am-padding-0">' +
            '<h4>科室：</h4>' +
            '</div>' +
            '<div class="am-u-sm-4">' +
            '<h4 id="val2">' + doctorList.list[i].office + '</h4>' +
            '</div>' +
            '<div class="am-u-sm-2 am-padding-0">' +
            '<h4>职称：</h4>' +
            '</div>' +
            '<div class="am-u-sm-4">' +
            '<h4 id="val3">' + doctorList.list[i].Professor + '</h4>' +
            '</div>' +
            '<div class="am-u-sm-2 am-padding-0">' +
            '<h4>简介：</h4>' +
            '</div>' +
            '<div class="am-u-sm-10">' +
            '<h4 id="val4">' + doctorList.list[i].synopsis + '</h4>' +
            '</div>' +
            '</a>' +
            '</div>';

        $(".doctor-list-page").append(doctorDiv);


    }
    $(".item-text").click(function () {
        var listid = $(this).attr("id");
        if (listid == 1) {
            $(".doctor-details-page").show();
            $(".bd-scoll").css("overflow","hidden");
            $("#hos").html(doctorList.list[0].hospital);
            $("#office").html(doctorList.list[0].office);
            $("#Professor").html(doctorList.list[0].Professor);
            $("#synopsis").html(doctorList.list[0].synopsis);
            $("#name").html(doctorList.list[0].name);
            $("#expert").html(doctorList.list[0].expert);
            $("#imageurl").attr("src", doctorList.list[0].imageurl);
        } else if (listid == 2) {
            $(".doctor-details-page").show();
            $(".bd-scoll").css("overflow","hidden");
            $("#hos").html(doctorList.list[1].hospital);
            $("#office").html(doctorList.list[1].office);
            $("#Professor").html(doctorList.list[1].Professor);
            $("#synopsis").html(doctorList.list[1].synopsis);
            $("#name").html(doctorList.list[1].name);
            $("#expert").html(doctorList.list[1].expert);
            $("#imageurl").attr("src", doctorList.list[1].imageurl);
        } else if (listid == 3) {
            $(".doctor-details-page").show();
            $(".bd-scoll").css("overflow","hidden");
            $("#hos").html(doctorList.list[2].hospital);
            $("#office").html(doctorList.list[2].office);
            $("#Professor").html(doctorList.list[2].Professor);
            $("#synopsis").html(doctorList.list[2].synopsis);
            $("#name").html(doctorList.list[2].name);
            $("#expert").html(doctorList.list[2].expert);
            $("#imageurl").attr("src", doctorList.list[2].imageurl);
        } else if (listid == 4) {
            $(".doctor-details-page").show();
            $(".bd-scoll").css("overflow","hidden");
            $("#hos").html(doctorList.list[3].hospital);
            $("#office").html(doctorList.list[3].office);
            $("#Professor").html(doctorList.list[3].Professor);
            $("#synopsis").html(doctorList.list[3].synopsis);
            $("#name").html(doctorList.list[3].name);
            $("#expert").html(doctorList.list[3].expert);
            $("#imageurl").attr("src", doctorList.list[3].imageurl);
        } else if (listid == 5) {
            $(".doctor-details-page").show();
            $(".bd-scoll").css("overflow","hidden");
            $("#hos").html(doctorList.list[4].hospital);
            $("#office").html(doctorList.list[4].office);
            $("#Professor").html(doctorList.list[4].Professor);
            $("#synopsis").html(doctorList.list[4].synopsis);
            $("#name").html(doctorList.list[4].name);
            $("#expert").html(doctorList.list[4].expert);
            $("#imageurl").attr("src", doctorList.list[4].imageurl);
        } else if (listid == 6) {
            $(".doctor-details-page").show();
            $(".bd-scoll").css("overflow","hidden");
            $("#hos").html(doctorList.list[5].hospital);
            $("#office").html(doctorList.list[5].office);
            $("#Professor").html(doctorList.list[5].Professor);
            $("#synopsis").html(doctorList.list[5].synopsis);
            $("#name").html(doctorList.list[5].name);
            $("#expert").html(doctorList.list[5].expert);
            $("#imageurl").attr("src", doctorList.list[5].imageurl);
        } else if (listid == 7) {
            $(".doctor-details-page").show();
            $(".bd-scoll").css("overflow","hidden");
            $("#hos").html(doctorList.list[6].hospital);
            $("#office").html(doctorList.list[6].office);
            $("#Professor").html(doctorList.list[6].Professor);
            $("#synopsis").html(doctorList.list[6].synopsis);
            $("#name").html(doctorList.list[6].name);
            $("#expert").html(doctorList.list[6].expert);
            $("#imageurl").attr("src", doctorList.list[6].imageurl);
        } else if (listid == 8) {
            $(".doctor-details-page").show();
            $(".bd-scoll").css("overflow","hidden");
            $("#hos").html(doctorList.list[7].hospital);
            $("#office").html(doctorList.list[7].office);
            $("#Professor").html(doctorList.list[7].Professor);
            $("#synopsis").html(doctorList.list[7].synopsis);
            $("#name").html(doctorList.list[7].name);
            $("#expert").html(doctorList.list[7].expert);
            $("#imageurl").attr("src", doctorList.list[7].imageurl);
        }
    });
    $("#backBtndetails").click(function () {
        $(this).parent().parent().hide();
        $(".bd-scoll").css("overflow","auto");
    })
});
