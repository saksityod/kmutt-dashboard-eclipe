function a(){	

			$.ajax({
				url: "../../Model/Finance/fn_revenu_expense.jsp",
				type: "get",
				dataType: "json",
				data:{"fn_paramYear":$("#embfn_paramYear").val(),"fn_paramMonth":$("#embfn_paramMonth").val(),"fn_paramArea":$("#embfn_paramArea").val(),"fn_paramOrg":$("#embfn_paramOrg").val(),"fn_paramDep":$("#embfn_paramDep").val()},
				success:function(data){
					
					if(data != ""){
						$("#hi").hide();
						$("#column1").show();
						$("#column2").show();
						$("#tb").show();
						
					$("#table_fn").empty();
					
					var paMonth = $("#embfn_paramMonth").val();
					var paMonthName = '';
					var paMonthLastName = '';
					
					var rs = data;	
					var htmlTable1="";
					var paYear = $("#embfn_paramYear").val();
					var paYearLast = paYear - 1;
					var paYearLast2 = paYear - 2;
					var paYearSub = paYear.substring(2, 4);
					var paYearLastSub = paYearSub - 1;
					var paYearLastSub2 = paYearLastSub - 1;
					var paLastMonthYear = "";
					var paY = "";
					
					if ( paMonthLastName == "ก.ย."){
						paLastMonthYear = paYearSub - 1;
					}else{
						paLastMonthYear  = paYearSub ;
					}	
					
					$(".Year").html(paYear).val();
					$(".LYear").html(paYearLast).val();
					$(".LLYear").html(paYearLast2).val();
					
					if(paMonth == '1'){
						paMonthName = 'ต.ค.';
						paMonthLastName = 'ก.ย.';
						paYearL= paYear -1;
						paMonthNo = '31';
						paMonthLastNo = '30';
						paY = paYearLastSub;
						paLY = paY;
					}else if(paMonth == '2'){
						paMonthName = 'พ.ย.';
						paMonthLastName = 'ต.ค.';
						paMonthNo = '30';
						paYearL= paYear;
						paMonthLastNo = '31';
						paY = paYearLastSub;
						paLY = paY;
					}else if(paMonth == '3'){
						paMonthName = 'ธ.ค.';
						paMonthLastName = 'พ.ย.';
						paYearL= paYear;
						paMonthNo = '31';
						paMonthLastNo = '30';
						paY = paYearLastSub;
						paLY = paY;
					}else if(paMonth == '4'){
						paMonthName = 'ม.ค.';
						paMonthLastName = 'ธ.ค.';
						paYearL= paYear;
						paMonthNo = '31';
						paMonthLastNo = '31';
						paY = paLastMonthYear;
						paLY = paY-1;
					}else if(paMonth == '5'){
						paMonthName = 'ก.พ.';
						paMonthLastName = 'ม.ค.';
						paYearL= paYear;
						paMonthNo = '28';
						paMonthLastNo = '31';
						paY = paLastMonthYear;
						paLY = paY;
					}else if(paMonth == '6'){
						paMonthName = 'มี.ค.';
						paMonthLastName = 'ก.พ.';
						paYearL= paYear;
						paMonthNo = '31';
						paMonthLastNo = '28';
						paY = paLastMonthYear;
						paLY = paY;
					}else if(paMonth == '7'){
						paMonthName = 'เม.ย.';
						paMonthLastName = 'มี.ค.';
						paYearL= paYear;
						paMonthNo = '30';
						paMonthLastNo = '31';
						paY = paLastMonthYear;
						paLY = paY;
					}else if(paMonth == '8'){
						paMonthName = 'พ.ค.';
						paMonthLastName = 'เม.ย.';
						paYearL= paYear;
						paMonthNo = '31';
						paMonthLastNo = '30';
						paY = paLastMonthYear;
						paLY = paY;
					}else if(paMonth == '9'){
						paMonthName = 'มิ.ย.';
						paMonthLastName = 'พ.ค.';
						paYearL= paYear;
						paMonthNo = '30';
						paMonthLastNo = '31';
						paY = paLastMonthYear;
						paLY = paY;
					}else if(paMonth == '10'){
						paMonthName = 'ก.ค.';
						paMonthLastName = 'มิ.ย.';
						paYearL= paYear;
						paMonthNo = '31';
						paMonthLastNo = '30';
						paY = paLastMonthYear;
						paLY = paY;
					}else if(paMonth == '11'){
						paMonthName = 'ส.ค.';
						paMonthLastName = 'ก.ค.';
						paYearL= paYear;
						paMonthNo = '31';
						paMonthLastNo = '31';
						paY = paLastMonthYear;
						paLY = paY;
					}else if(paMonth == '12'){
						paMonthName = 'ก.ย.';
						paMonthLastName = 'ส.ค.';
						paYearL= paYear;
						paMonthNo = '30';
						paMonthLastNo = '31';
						paY = paLastMonthYear;
						paLY = paY;
					}else{
						paMonthName = '';
						paMonthLastName = '';
					}
				
				htmlTable1+="<table  id='finance_tb1'  width='800' cellpadding='1px' cellspacing='1px' >";
				htmlTable1+="<thead>";
				//*** 1
					htmlTable1+="<tr>";
						htmlTable1+="<th width='330'>";
							htmlTable1+="รายการ";
						htmlTable1+="</th>";
							
						htmlTable1+="<th width='108'>";
							htmlTable1+="ปี  "+paYearL+"";
						htmlTable1+="</th>";
					
						htmlTable1+="<th width='218' colspan='2'>";
							htmlTable1+="ปี  "+paYear+"";
						htmlTable1+="</th>";

						htmlTable1+="<th width='110'>";
							htmlTable1+="ปี "+paYearLast+"";
						htmlTable1+="</th>";
					htmlTable1+="</tr>";
				//*** 1

				//*** 2
					htmlTable1+="<tr>";
						htmlTable1+="<th>";
							htmlTable1+="";
						htmlTable1+="</th>";

						htmlTable1+="<th width='108'>";
							htmlTable1+= "1"+" "+paMonthLastName+" "+paLY+"<br/>"+paMonthLastNo+" "+paMonthLastName+" "+paLY;
						htmlTable1+="</th>";

						htmlTable1+="<th width='108'>";
							htmlTable1+= "1"+" "+paMonthName+" "+paY+"<br/>"+paMonthNo+" "+paMonthName+" "+paY;
						htmlTable1+="</th>";

						htmlTable1+="<th width='108'>";
							htmlTable1+="%";
						htmlTable1+="</th>";

						htmlTable1+="<th width='110'>";
							htmlTable1+= "1 ต.ค"+" "+paYearLastSub2+"<br/>30 ก.ย"+" "+paYearLastSub;
						htmlTable1+="</th>";
					htmlTable1+="</tr>";
				//*** 2		
					
				htmlTable1+="</thead>";
				
				//*** 3
				htmlTable1+="<tbody>";
				
				$.each(rs,function(index,indexEntry){			

				var account_name = indexEntry[0];
				var level = indexEntry[2];
				var parent_key = indexEntry[3];
				var pMonthAmt = indexEntry[4];
				var currentAmt = indexEntry[5];
				var GrowthPercentage = indexEntry[6];
				var pYearAmt = indexEntry[7];
				var levelline = indexEntry[8];
				
					htmlTable1+="<tr>";
						htmlTable1+="<td><div class='level"+level+" parent_key"+parent_key+"'  id='account_key"+level+""+levelline+" '>"+account_name+"</div></td>";
						htmlTable1+="<td>";
							htmlTable1+= pMonthAmt;
						htmlTable1+="</td>";

						htmlTable1+="<td>";
							htmlTable1+= currentAmt;
						htmlTable1+="</td>";

							htmlTable1+="<td>"+GrowthPercentage+" %</td>";
							htmlTable1+="<td>"+pYearAmt+"</td>";
						htmlTable1+="</tr>";
				});
				htmlTable1+="</tbody>";
				//*** 3
			htmlTable1+="</table>";
			
			$("#table_fn").html(htmlTable1);
			
			//#######################Menagement Tab1 Start ######################
			
			$("table#finance_tb1 thead tr  th").css({"background":"#99ccff  ","padding-left":"5px","padding-right":"5px","color":"black","padding":"2px"});
			$("table#finance_tb1 tbody tr  td .level1").css({"text-align":"left"});
			$("table#finance_tb1 tbody tr  td .level1").parent().nextAll().andSelf().css({"text-align":"right","background":"#99ccff ","font-weight":"bold"});
			$("table#finance_tb1 thead tr:eq(0) th").css({"background":"#008EC3 ","padding-left":"5px","padding-right":"5px","color":"white","padding":"2px"});
			$("table#finance_tb1 thead tr:eq(1) th").css({"background":"#008EC3 ","padding-left":"5px","padding-right":"5px","color":"white","padding":"2px"});
			$(".level2").css({"font-weight":"bold","padding-left":"10px"});
			$(".level2").parent().nextAll().andSelf().css({"background":"#a9e4f4 "});
			$(".level2").parent().nextAll().css({"text-align":"right","font-weight":"bold","background":"#a9e4f4 "});
			$(".level3").css({"padding-left":"20px"});
			$(".level3").parent().nextAll().css({"text-align":"right"});
			$(".level4").css({"padding-left":"30px"});
			$(".level4").parent().nextAll().css({"text-align":"right"});
			$("table#finance_tb1 tbody tr:odd").css({"background":"#ecf8fb"});
			$(".summary").parent().nextAll().andSelf().css({"background":"#99ccff","padding":"5px"});
			$("table#finance_tb1").css({"border":"1px solid #a9e4f4"});

			//#######################Menagement Tab1 Start ######################
			
			//Step1  Call Default
			var j=0;
			var dataLevel2 ="";
			var Sum=0;
			dataLevel2+="[";
				$(".level1").each(function(){
					var dateyear = "1"+" "+paMonthName+" "+paY+" - "+paMonthNo+" "+paMonthName+" "+paY;
					var acc_name = "สัดส่วนรายได้รายจ่ายจากการดำเนินงาน<br/>"+dateyear+"";
					account_key=$(this).attr("id").substring(11);
					var valueMonthParam = $(this).parent().parent().children('td').eq(2).text();
					var valueMonthParamNonComma = valueMonthParam.replace(",","");
					var vmpnc = 0;
					$("#accname").html(acc_name);
					
					if(valueMonthParamNonComma < 0){
						vmpnc = 0;
					}else{
						vmpnc = valueMonthParamNonComma;
					}
					
						if(j==0){
						dataLevel2+="[";
							dataLevel2+= "\""+ $(this).text()+"\"" +" , "+ "\""+vmpnc+"\"";
							Sum+=parseFloat($(this).parent().parent().children('td').eq(2).text());
						dataLevel2+="]";
						}else{
						dataLevel2+=",[";
							dataLevel2+= "\""+ $(this).text()+"\"" +" , "+ "\""+vmpnc+"\"";
							Sum+=parseFloat($(this).parent().parent().children('td').eq(2).text());
						dataLevel2+="]";	
						}
					j++;
				});
				dataLevel2+="]";
				var data  = eval("(" + dataLevel2 + ")");  
				//console.log(data2);
				
				$("#pie").empty();
				 option=[];
				 option['themeCustom']=["#3caade","#49a75c","#8ebc00","#ff6900","#e61e26","#d8e404"];
				 option['pointLabelsFont']='12px';
				 option['fontSize']='12px';
				 option['showDataLabels']=true;
				 option['location']='e';
				 option['padding']='40';
				 option['pointLabelsColor']='#000000';
				 option['tooltip']=true;
				 option['numberRows']=1;
				pieChart("pie",data,option);
			//Step1 Call Default
				
			//Step Call Level2
				$(".level1").click(function(e){ 
					var dateyear = "1"+" "+paMonthName+" "+paY+" - "+paMonthNo+" "+paMonthName+" "+paY;
					var acc_name = $(this).text();
					var acc = acc_name +"<br/>"+ dateyear;
					var account_key = this.id;
					var account_key_sub=account_key.substring(11);
					var account_key_loop="";
					var dataLevel2 ="";
					var Sum=0;
					var j=0;
					$("#accname").html(acc);
					dataLevel2+="[";
					$(".parent_key"+account_key_sub).each(function(){
						account_key_loop=this.id;
						account_key_sub_loop=account_key_loop.substring(11);
						var valueMonthParam = $(this).parent().parent().children('td').eq(2).text();
						var valueMonthParamNonComma =valueMonthParam.replace(",","");
						var vmpnc = 0;
						
						if(valueMonthParamNonComma < 0){
							vmpnc = 0;
						}else{
							vmpnc = valueMonthParamNonComma;
						}
						
						if(j==0){
							dataLevel2+="[";
								dataLevel2+= "\""+ $(this).text()+"\"" +" , "+ "\""+vmpnc+"\"";
								Sum+=parseFloat($(this).parent().parent().children('td').eq(2).text());
							dataLevel2+="]";
						}else{
							dataLevel2+=",[";
								dataLevel2+= "\""+$(this).text()+"\""+" , "+ "\""+vmpnc+"\"";
								Sum+=parseFloat($(this).parent().parent().children('td').eq(2).text());
							dataLevel2+="]";
						}
						j++;
					});
					dataLevel2+="]";
					var data=eval("("+dataLevel2+")");
					$("#pie").empty();
					 option=[];
					 option['themeCustom']=["#3caade","#49a75c","#8ebc00","#ff6900","#e61e26","#d8e404"];
					 option['pointLabelsFont']='12px';
					 option['fontSize']='12px';
					 option['showDataLabels']=true;
					 option['location']='e';
					 option['padding']='40';
					 option['pointLabelsColor']='#000000';
					 option['tooltip']=true;
					 option['numberRows']=1;
					 pieChart("pie",data,option);
				});
			//Step Call Level2
				
			//Step Call Level3
				$(".level2").click(function(e){
					var dateyear = "1"+" "+paMonthName+" "+paY+" - "+paMonthNo+" "+paMonthName+" "+paY;
					var acc_name = $(this).text();
					var acc = acc_name +"<br/>"+ dateyear;
					var account_key = this.id;
					var account_key_sub=account_key.substring(11);
					var account_key_loop="";
					$("#accname").html(acc);
					var Sum=0;
					var dataLevel3 ="";
					var j=0;
					dataLevel3+="[";
					$(".parent_key"+account_key_sub).each(function(){
						account_key_loop=this.id;
						account_key_sub_loop=account_key_loop.substring(11);
						var valueMonthParam = $(this).parent().parent().children('td').eq(2).text();
						var valueMonthParamNonComma =valueMonthParam.replace(",","");
						var vmpnc = 0;
						
						if(valueMonthParamNonComma < 0){
							vmpnc = 0;
						}else{
							vmpnc = valueMonthParamNonComma;
						}
						
						if(j==0){
							dataLevel3+="[";
								dataLevel3+= "\""+ $(this).text()+"\"" +" , "+ "\""+vmpnc+"\"";
								Sum+=parseFloat($(this).parent().parent().children('td').eq(2).text());
							dataLevel3+="]";
						}else{
							dataLevel3+=",[";
								dataLevel3+= "\""+$(this).text()+"\""+" , "+ "\""+vmpnc+"\"";
								Sum+=parseFloat($(this).parent().parent().children('td').eq(2).text());
							dataLevel3+="]";
						}
						j++;
					});
					dataLevel3+="]";

					var data=eval("("+dataLevel3+")");
					$("#pie").empty();
					 option=[];
					 option['themeCustom']=["#3caade","#49a75c","#8ebc00","#ff6900","#e61e26","#d8e404"];
					 option['pointLabelsFont']='12px';
					 option['fontSize']='12px';
					 option['showDataLabels']=true;
					 option['location']='e';
					 option['padding']='40';
					 option['pointLabelsColor']='#000000';
					 option['tooltip']=true;
					 option['numberRows']=1;
					 pieChart("pie",data,option);
				});
			//Step Call Level3
				}else{
					$("#column1").hide();
					$("#column2").hide();
					$("#tb").hide();
					$("#hi").show();
				}	
			}
		});
			
			$.ajax({
				url: "../../Model/Finance/fn_revenu_expense_ratio_pro.jsp",
				type: "get",
				dataType: "json",
				data:{"fn_paramYear":$("#embfn_paramYear").val(),"fn_paramArea":$("#embfn_paramArea").val(),"fn_paramOrg":$("#embfn_paramOrg").val(),"fn_paramDep":$("#embfn_paramDep").val()},
				success:function(data){
					var ratio_data = data;
					var htmlTable2="";
					var paYear = $("#embfn_paramYear").val();
					var paLastYear = paYear-1;
					var paLYear = paYear-2;
					
					htmlTable2+="<table>";
						htmlTable2+="<thead>";
							htmlTable2+="<tr>";
								htmlTable2+="<td class='ha' colspan='2'>อัตราส่วนประเมินประสิทธิภาพการดำเนินงาน</td>";
								htmlTable2+="<td class='ra'>"+paLYear+"</td>";
								htmlTable2+="<td class='ra'>"+paLastYear+"</td>";
								htmlTable2+="<td class='ra'>"+paYear+"</td>";
							htmlTable2+="</tr>";
						htmlTable2+="</thead>";
						htmlTable2+="<tbody>";
						$.each(ratio_data,function(index,indexEntry){
							var ratio_name = indexEntry[0];
							var ratio_unit = indexEntry[1];
							var ratio_laYear = indexEntry[2];
							var ratio_lastYear = indexEntry[3];
							var ratio_thisYear = indexEntry[4];
						
							htmlTable2+="<tr>";
								htmlTable2+="<td class='na'>"+ratio_name+"</td>";
								htmlTable2+="<td class='un'>"+ratio_unit+"</td>";
								htmlTable2+="<td class='ra'>"+ratio_laYear+"</td>";
								htmlTable2+="<td class='ra'>"+ratio_lastYear+"</td>";
								htmlTable2+="<td class='ra'>"+ratio_thisYear+"</td>";
							htmlTable2+="</tr>";
						});
					htmlTable2+="</tbody>";
					htmlTable2+="</table>";
					
					$("#table_ration_pro").html(htmlTable2);
					$("#table_ration_pro tbody tr:even").css({"background":"#a9e4f4"});
					$("table thead").css({"background":"#008ec3","font-weight":"bold","color":"#ffffff"});
					$(".na").css({"width":"380px","padding-left":"15px"});
					$(".un").css({"width":"55px","text-align":"center"});
					$(".ra").css({"width":"60px","text-align":"center"});
				}
			});
};