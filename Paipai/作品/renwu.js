// JavaScript Document
//请输入产品名
$(document).ready(function(){
	var str="请输入产品名";
	$(".input_p").val(str);
	$(".input_p").focus(function(){
		var v=this.value;
		if(v==str){
			$(this).val("").addClass("focus");
		}
	}).blur(function(){
		var v=this.value;
		if(v==""){
			$(this).val(str).removeClass("focus");
		}
	});
});
//网游点卡----手机充值
var moneyList=new Array();
moneyList["天下通"]=["10元","15元","20元"];
moneyList["骏网一卡通"]=["15元","20元"];
moneyList["游戏通"]=["10元","15元","20元","30元"];

function showGame(){
	//在页面加载完成以后，将数组中的一维下标封装成若干个option对象
	//将这些option对象添加到游戏的select中
	for(var game in moneyList){
	//1-将game封装成option对象
	var o=new Option(game,game);//<option value="天下通">天下通</option>
	//2-获取对应对象
	var game_select=document.getElementById("game");
	//3-添加
	try{
		game_select.add(o,null);
	}catch(e){
		game_select.add(o);
	}
	}
}
function showMoney(){
	var money_select = document.getElementById("money");
	money_select.options.length = 1;
	/*
	根据用户选择的gameselect中的值，到数组中获取对应的所有的面值
	封装option对象，将对象添加到money  select中
	1-获取省的value值
	2-到数组中获取相应的游戏下的所有面值
	3-获取对应下标处的面值的名字，封装成option对象
	4-将改option对象添加到money的select中
	*/
	var game_name = document.getElementById("game").value;
	for(var money_index in moneyList[game_name]){
		var money_name = moneyList[game_name][money_index];
		var o = new Option(money_name,money_name);
		
		try{
		 money_select.add(o,null);
		}catch(e){
			money_select.add(o);
		}
	}
}
