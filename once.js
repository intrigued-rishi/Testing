/*var obj;
$('#frm2').hide();
$.ajax({
    type: "get",
    url:'https://dog.ceo/api/breeds/list/all',
    success: function (response) {
           obj =response.message;
           for(i in response.message){
               var list=$('#frm1 select');
               var notun=$(document.createElement("option")).text(i);
               list.append(notun);
           }
    }
}).fail(
    function(){
        console.log("sorry");
    }
);
$('#frm1 select').on("click",fun);
function fun(){
    let v=$(this).val();
    var arr=obj[v];
    var list2=$('#frm2 select');
    list2.empty();
    for(let j=0;j<arr.length;j++){
        var notun2=$(document.createElement("option")).text(arr[j]);
        list2.append(notun2);
    }
    if(arr.length==0){
        $('#frm2').hide();
    }
    else{
        $('#frm2').show();
    }
    //console.log(list2.get(0));
}
$('button').eq(0).on("click",search);
function search(){
    let res;
    if($('#frm2 select').val()){
        let x1=$('#frm1 select').val();
        let x2=$('#frm2 select').val();
        res='https://dog.ceo/api/breed/'+x1+'/'+x2+'/images/random';
    }
    else{
        let x1=$('#frm1 select').val();
        res='https://dog.ceo/api/breed/'+ x1 + '/images/random';
    }
    $.ajax({
         type:'get',
         url:res,
         success:function(data){
             $('#depo').empty();
             $(document.createElement("img")).attr({"src":data.message,height:"100%",width:"100%"}).appendTo("#depo");
         }
    });
}*/