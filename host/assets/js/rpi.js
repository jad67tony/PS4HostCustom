let rpiversion = "1.0.0_beta";
let menuRpi = document.getElementById("menurpi");
const choiceLang = document.getElementById("choicelangue");
const displayLangue = document.getElementById("language");
let rpi=[]; rpi=[remote];
for (let i=0;i<rpi.length;i++){rpi[i]=JSON.parse(rpi[i]);}

function ifExist(titleId) {
  $.get(`/exist/${titleId}`,(req,res) => {
    let a=document.getElementById("alerteDisplay");
    req.exists==="true"
    ?((location.href="#alerteDisplay"),setInnerHTML(a,'<div id="alerte" class="alert alert-danger" role="alert">'+rpi[0][defaultLangue].already+"</div>"))
    :((location.href="#alerteDisplay"),setInnerHTML(a,'<div id="alerte" class="alert alert-success" role="alert">'+rpi[0][defaultLangue].notalready+"</div>"));
    hideAlert();
  });
}
function install(file,npTitleId,category) {
  $.get(`/install/${file}`,(req,res) => {
    let a=document.getElementById("alerteDisplay"),tasks=JSON.parse(getCookie("tasks"));
    req.status==="success"
    ?(tasks.push({task_id:req.task_id,title:req.title,npTitleId:npTitleId,category:category,}),modifyCookie("tasks",JSON.stringify(tasks)),taskBar())
    :((location.href = "#alerteDisplay"),console.log(req), setInnerHTML(a,'<div id="alerte" class="alert alert-danger" role="alert">'+rpi[0][defaultLangue].already+"</div>"),
    hideAlert());
  });
}
function uninstall(cusa, type) {
  $.get("/uninstall/" + type + "/" + cusa, (req,res) => {
    let a = document.getElementById("alerteDisplay");
    req.status==="success"
    ?((location.href="#alerteDisplay"),setInnerHTML(a,'<div id="alerte" class="alert alert-success" role="alert">'+rpi[0][defaultLangue].deleteok+"</div>"))
    :((location.href="#alerteDisplay"),setInnerHTML(a,'<div id="alerte" class="alert alert-danger" role="alert">'+rpi[0][defaultLangue].notip+"</div>"));
    hideAlert();
  });
}
function buildCard(d,file,size) {
  let titleId=JSON.parse(localStorage.getItem("tabId")),npTitleId,regexTitle=/([A-Z]{4}[0-9]{5})/i;
  for(let i=0; i<titleId.length; i++) {
    npTitleId=d.npTitleId.split("_00");npTitleId=npTitleId[0];
    if(titleId[i]===npTitleId) {
      npTitleId=d.names[0].name.split(".pkg");npTitleId=npTitleId[0];
      for (let i=0;i<npTitleId.length;i++){npTitleId=npTitleId.replace(" ","");}
      d.names[0].name=d.names[0].name+'<span class="red"> '+rpi[0][defaultLangue].update+"</span>";
    }else{
      regexTitle.test(d.npTitleId)
      ?((npTitleId=d.npTitleId.split("_00")),(npTitleId = npTitleId[0]))
      :((npTitleId=d.names[0].name.split(".pkg")),(npTitleId = npTitleId[0]));
    }
  }
  titleId.push(npTitleId);localStorage.setItem("tabId",JSON.stringify(titleId));
  setTimeout(function(){
    $("#titleid-list").append(
      '<div class="col-4">' +
        '<div class="card flex-row flex-wrap btn-list-titleid m-1 card-custom">' +
        '<div class="card-header p-0 m-0 border-0" >' +
        '<img id="meta-icon-'+npTitleId+'" class="meta-img">' +
        '<div id="task-'+npTitleId+'" align="center" class="meta-p"></div></div>' +
        '<div class="card-block col-10">'+
        '<h6 id="meta-title-'+npTitleId+'" ></h6>' +
        '<div class="row">' +
        '<div class="col-4">' +
        '<p id="meta-cusa-'+npTitleId+'" class="meta-p" style="border:1px solid red"></p></div>' +
        '<div class="col-2 col-sm-4">' +
        '<p id="meta-psvr-'+npTitleId+'" class="meta-p" style="border:1px solid green"></p></div>' +
        '<div class="col-2 col-sm-4">' +
        '<p id="meta-rev-'+npTitleId+'" class="meta-p" style="border:1px solid green"></p></div>' +
        '<div class="col-2 col-sm-4">' +
        '<p id="meta-cat-'+npTitleId+'" class="meta-p" style="border:1px solid green"></p></div>' +
        "</div>" +
        '<div class="row">' +
        '<div class="col-12">' +
        '<p id="meta-content-'+npTitleId+'" class="meta-p"></p></div>' +
        "</div>" +
        '<div class="row">' +
        '<div id="meta-response-'+npTitleId+'" class="col-12"></div>' +
        '<div id="'+npTitleId+'" class="badge badge-secondary m-1">'+size+"</div>" +
        '<div id="checked-'+npTitleId+'" class="badge badge-primary m-1">'+rpi[0][defaultLangue].ifexist+"</div>" +
        '<div id="install-'+npTitleId+'" class="badge badge-success m-1">'+rpi[0][defaultLangue].install+"</div>" +
        '<div id="delete-'+npTitleId+'" class="badge badge-danger m-1">'+rpi[0][defaultLangue].uninstall+"</div>" +
        "</div>"
    );
    document.getElementById(`checked-${npTitleId}`).addEventListener("click",function(){ifExist(npTitleId);});
    document.getElementById(`install-${npTitleId}`).addEventListener("click", function() {
      install(file, npTitleId, d.category);
    });
    document.getElementById(`delete-${npTitleId}`).addEventListener("click",function(){let a = document.getElementById("alerteDisplay"),cat = category(d.category);
      cat == undefined
      ?((location.href="#alerteDisplay"),setInnerHTML(a,'<div id="alerte" class="alert alert-danger" role="alert">' +rpi[0][defaultLangue].notdelete+"</div>"),hideAlert())
      :uninstall(npTitleId, cat);});
    d.icons[0].icon=="assets/img/nopsn.png"
      ?($(`#meta-icon-${npTitleId}`).attr("src",d.icons[0].icon),$(`#meta-icon-${npTitleId}`).attr("class","meta-img-nopsn"))
      :($(`#meta-icon-${npTitleId}`).attr("src",d.icons[0].icon),$(`#meta-icon-${npTitleId}`).attr("class","meta-img"));
    $(`#meta-title-${npTitleId}`).html(d.names[0].name);
    d.psVr===undefined
      ?$(`#meta-psvr-${npTitleId}`).html("<b>PsVr: </b> "+rpi[0][defaultLangue].no)
      :$(`#meta-psvr-${npTitleId}`).html("<b>PsVr: </b> "+rpi[0][defaultLangue].yes);
    d.patchRevision===undefined
      ?$(`#meta-rev-${npTitleId}`).html("<b>Patch: </b> "+rpi[0][defaultLangue].no)
      :$(`#meta-rev-${npTitleId}`).html("<b>Patch: </b>"+d.patchRevision);
    d.category===undefined
      ?$(`#meta-cat-${npTitleId}`).html("<b>Categ: </b> "+rpi[0][defaultLangue].no)
      :$(`#meta-cat-${npTitleId}`).html("<b>Categ: </b>"+d.category);
    regexTitle.test(npTitleId)
      ?$(`#meta-cusa-${npTitleId}`).text(npTitleId)
      :$(`#meta-cusa-${npTitleId}`).text("Cusa non dispo");
    d.contentId===undefined
      ?$(`#meta-content-${npTitleId}`).html("Content-Title : "+rpi[0][defaultLangue].nodispo)
      :$(`#meta-content-${npTitleId}`).html("<b>ContentId : </b>"+d.contentId);
  }, 500);
}
function makeLinkPkg(cusa_00) {
  let key="F5DE66D2680E255B2DF79E74F890EBF349262F618BCAE2A9ACCDEE5156CE8DF2CDF2D48C71173CDC2594465B87405D197CF1AED3B7E9671EEB56CA6753C2E6B0",
  addtmdb="https://tmdb.np.dl.playstation.net/tmdb2/",
  sha=new jsSHA("SHA-256","TEXT"),
  sha1=new jsSHA("SHA-1","TEXT");
  sha.update(key);
  sha1.setHMACKey(key,"HEX");
  sha1.update(cusa_00);
  hmac=sha1.getHMAC("HEX").toUpperCase();
  //console.log(`${addtmdb}${cusa_00}_${hmac}/${cusa_00}.json`);
  return `${addtmdb}${cusa_00}_${hmac}/${cusa_00}.json`;
}
function getMetaJson(url, datas) {
  if (datas.cusa!=="Cusa NA"||datas.cusa!=="No PSN"){
    fetch(url)
      .then(function (response) {
        if(response.status===200){response.json().then(function(d){buildCard(d,datas.file,datas.size);});}
      })
      .catch(function(err){console.log("Fetch Error :-S", err);});
  } 
  else {
    buildCard(datas,datas.size);
  }
  //console.log(datas);
}
function makeCard(datas) {
  let regexTitle = /([A-Z]{4}[0-9]{5})/i;
  if (regexTitle.test(datas.cusa))getMetaJson(makeLinkPkg(`${datas.cusa}_00`),datas);
  else {
    let data={
      npTitleId: datas.cusa,
      icons:[{icon:"assets/img/nopsn.png"}],
      names:[{name:datas.file}],
      file:datas.file,
    };
  console.log(data.file);
  buildCard(data,data.file,datas.size);
  }
}
function getTitleId() {
  localStorage.getItem("tabId")?(localStorage.removeItem("tabId"), localStorage.setItem("tabId", "[]")):localStorage.setItem("tabId", "[]");
  $.get("/listtitle", (pkg,res) => {
    let a=document.getElementById("alerteDisplay");
    pkg.list.length!==0
    ?pkg.list.forEach((datas)=>{makeCard(datas);})
    :((location.href="#alerteDisplay"),setInnerHTML(a,'<div id="alerte" class="alert alert-danger" role="alert">'+rpi[0][defaultLangue].nofiles+"</div>"),
    hideAlert());
  });
}
function deleteProgression(titleId, cusa) {
  let tabmedia=document.getElementById(`tabmedia_${titleId}`),media=document.getElementById(`media_${titleId}`);
  tabmedia.removeChild(media);
  let prog=document.getElementById(`prog-${cusa}`);
  prog.classList.add("no-progress");
  let progress=document.getElementById(`progress-${cusa}`);
  prog.removeChild(progress);
  document.getElementById(`mbps-${cusa}`).innerHTML="";
  document.getElementById(`pourcent-${cusa}`).innerHTML="";
}
function switchFocus(id,task,titleId,i){
  let tasks=JSON.parse(getCookie("tasks"));
  switch (id) {
    case `resume_${titleId}`:
      if (`${task["resume_"+titleId]}`==="btn-media"){
        task["resume_"+titleId]="btn-focus";
        task["pause_"+titleId]="btn-media";
        task["stop_"+titleId]="btn-media";
        task["unregister_"+titleId]="btn-media";
      }
      break;
    case `pause_${titleId}`:
      if (`${task["pause_"+titleId]}`==="btn-media"){
        task["pause_"+titleId]="btn-focus";
        task["resume_"+titleId]="btn-media";
        task["stop_"+titleId]="btn-media";
        task["unregister_"+titleId]="btn-media";
      }
      break;
    case `stop_${titleId}`:
      if (`${task["stop_"+titleId]}`==="btn-media"){
        task["stop_"+titleId]="btn-focus";
        task["resume_"+titleId]="btn-media";
        task["pause_"+titleId]="btn-media";
        task["unregister_"+titleId]="btn-media";
      }
      break;
    case `unregister_${titleId}`:
      if (`${task["unregister_"+titleId]}`==="btn-media"){
        task["unregister_"+titleId]="btn-focus";
        task["resume_"+titleId]="btn-media";
        task["pause_"+titleId]="btn-media";
        task["stop_"+titleId]="btn-media";
      }
      break;
  }
  tasks.splice(i,1,task);
  modifyCookie("tasks",JSON.stringify(tasks));
}
function buttonMediaByTitle(){
  let tasks=JSON.parse(getCookie("tasks")),btnmedia=[],tabmedia=[];
  tabmedia=document.getElementsByClassName("media");
  for(i=0;i<tabmedia.length;i++){
    btnmedia[i]=tabmedia[i].getElementsByTagName("button");
    for(j=0;j<btnmedia[i].length;j++){
      let id=btnmedia[i][j].id;
      document.getElementById(id).addEventListener("click",function(){
        i=i-1;
        let titleId=tasks[i].task_id,a=id.split("_"),action=a[0],task=a[1];
        $.get(`/task/${action}/${task}`,(req, res) =>{
          if(req.status==="success"){
            if(action==="unregister"){
              for(let i=0;i<tasks.length;i++){
                let cat=tasks[i].category,cusa=tasks[i].npTitleId;
                if(tasks[i].task_id===Number(task)) {
                  deleteProgression(titleId,cusa);
                  uninstall(cusa, category(cat));
                  tasks=tasks.splice(i,1);
                  if(tasks.length!==0){tasks.splice(i,1);modifyCookie("tasks",JSON.stringify(tasks));}
                  if(tasks.length===0)modifyCookie("tasks","[]");
                }
              }
            }
          }
        });
        switchFocus(id, tasks[i], titleId, i);
      });
    }
  }
}
taskBar = () => {
  let tasks = JSON.parse(readCookie("tasks"));
  if (tasks.length === 0) return;
  else {
    tasks.forEach(function (task, i) {
    if (tasks[i]["resume_"+task.task_id]===undefined) tasks[i]["resume_"+task.task_id]="btn-media";
    if (tasks[i]["pause_"+task.task_id]===undefined) tasks[i]["pause_"+task.task_id]="btn-media";
    if (tasks[i]["stop_"+task.task_id]===undefined) tasks[i]["stop_"+task.task_id]="btn-media";
    if (tasks[i]["unregister_"+task.task_id]===undefined) tasks[i]["unregister_"+task.task_id]="btn-media";
    tasks.splice(i,1,tasks[i]);
    modifyCookie("tasks",JSON.stringify(tasks));
    let taskId = document.getElementById('task-'+task.npTitleId)
    setInnerHTML(taskId, rpi[0][defaultLangue].task+" "+task.task_id);
      setTimeout(function () {
        $.get(`/progress/${task.task_id}`, (id, res) => {
          $(`#meta-response-${task.npTitleId}`).html(
            `<div id="prog-${task.npTitleId}" class="progress">` +
              `<div id="progress-${task.npTitleId}" class="display-progress">`+"</div></div></div></div>" +
              '<div class="row">' +
              '<div class="col-3" align="center">' +
              `<span id="mbps-${task.npTitleId}" class="meta-p"></span></div>` +
              `<div id="tabmedia_${task.task_id}" class="col-6 player d-flex justify-content-center">` +
              `<div id="media_${task.task_id}" class="media" align="center">` +
              `<button type="button" id="resume_${task.task_id}" class="${tasks[i]["resume_"+task.task_id]}">` +
              '<i class="fa fa-play" ></i></button>' +
              `<button type="button" id="pause_${task.task_id}" class="${tasks[i]["pause_"+task.task_id]}">` +
              '<i class="fa fa-pause" ></i></button>' +
              `<button type="button" id="stop_${task.task_id}" class="${tasks[i]["stop_"+task.task_id]}">` +
              '<i class="fa fa-stop" ></i></button>' +
              `<button type="button" id="unregister_${task.task_id}" class="${tasks[i]["unregister_"+task.task_id]}" data-cusa="${task.npTitleId}">` +
              '<i class="fa fa-eject" ></i></button></div></div>' +
              '<div class="col-3" align="center">' +
              `<span id="pourcent-${task.npTitleId}" class="meta-p"></span></div></div>`
          );
          buttonMediaByTitle();
          let mybar=document.getElementById(`progress-${task.npTitleId}`),pourcent = document.getElementById(`pourcent-${task.npTitleId}`),nb=parseInt(Math.round((100 * id.transferred_total) / id.length_total));
          if(nb.toString()!= Number.NaN.toString()) {setInnerHTML(pourcent,`${nb}%`);mybar.style.width = `${nb}%`;}
          let m=document.getElementById(`mbps-${task.npTitleId}`),
          mbps=parseInt((id.length_total-id.transferred_total)/1024/1024/id.rest_sec_total);
          if(mbps.toString() != Number.NaN.toString()) setInnerHTML(m,`${mbps.toFixed(1)}MB/s`);
          //console.log(`${mbps.toFixed(1)}MB/s`);console.log(`${nb}%`);
          if(nb===100) { deleteProgression(task.task_id, task.npTitleId);
            if(tasks.length!==0) {tasks.splice(i, 1);modifyCookie("tasks",JSON.stringify(tasks));}
            if(tasks.length===0) modifyCookie("tasks", "[]");
          }
        });
      }, 1000 * i);
    });
  }
};
function category(cat) {
  let category=cat;
  if(category==="gd"||category==="gde") category="game";
  else if(category==="ac")category="ac";
  else if(category==="theme")category="theme";
  else category=undefined;
  return category;
}
function hideAlert() {
  let alerte=document.getElementById("alerte"),display=document.getElementById("alerteDisplay");
  if(alerte!=null) {$("#alerte").fadeTo(3000,500).slideUp(500,function(){$("#alerte").slideUp(500);if(display!=null)display.innerHTML="";});}
}
function checkTitleUninstall(cusa, type) {
  let a = document.getElementById("alerteDisplay");
  if(cusa === undefined && type === undefined) {
    (location.href = "#alerteDisplay"),setInnerHTML(a,'<div id="alerte" class="alert alert-danger" role="alert">'+rpi[0][defaultLangue].checkedtitle+"</div>");
  } else if(cusa===undefined) {(location.href="#alerteDisplay"),setInnerHTML(a,'<div id="alerte" class="alert alert-danger" role="alert">'+rpi[0][defaultLangue].checkedid+"</div>");
  } else if(type===undefined) {(location.href="#alerteDisplay"),setInnerHTML(a,'<div id="alerte" class="alert alert-danger" role="alert">'+rpi[0][defaultLangue].checkedcat+"</div>");}
  let b=document.getElementById("alerte");b!=null?hideAlert():uninstall(cusa, type);
}
/********************************RPI***************************/
function buildRPI() {
  let t = document.getElementById("content-title");
  setInnerHTML(t, `<h1 id="title">Remote Package Installer ${rpiversion}</h1>`);
  let buildRpi =
    '<div class="container">' +
    '<div id="alerteDisplay">' +
    "</div>" +
    "</div>" +
    '<div class="container-fluid">' +
    '<div class="row">' +
    '<div class="col-6">' +
    '<form id="ip_submit" class="form-inline">' +
    '<div class="form-group mx-sm-2 mb-2">' +
    '<input type="text" class="form-control" id="ip" value="">' +
    '<button type="submit" class="custom-btn-rpi btn-rpi">IP PS4</button>' +
    "</div>" +
    "</form>" +
    "</div>" +
    '<div class="col-3">' +
    '<form id="form_delete" class="form-inline">' +
    '<button type="submit" class="custom-btn-rpi btn-rpi mb-2">'+rpi[0][defaultLangue].delete+"</button>" +
    '<div class="form-group mx-sm-2 mb-2">' +
    '<input type="text" name="input-title" class="form-control" placeholder="TitleId" value=""></div>' + 
    "</form>" +
    '<div class="form-check">' +
    '<div class="form-check form-check-inline">' +
    '<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="game">' +
    '<label class="form-check-label" for="inlineRadio1">'+rpi[0][defaultLangue].game+"</label></div>" +
    '<div class="form-check form-check-inline">' +
    '<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="patch">' +
    '<label class="form-check-label" for="inlineRadio2">'+rpi[0][defaultLangue].patch +"</label></div>" +
    '<div class="form-check form-check-inline">' +
    '<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="ac">' +
    '<label class="form-check-label" for="inlineRadio3">'+rpi[0][defaultLangue].contentadd+"</label></div>" +
    '<div class="form-check form-check-inline">' +
    '<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="theme">' +
    '<label class="form-check-label" for="inlineRadio4">'+rpi[0][defaultLangue].theme+"</label></div></div></div>" +
    '<div class="col-3">' +
    '<form id="form_task" class="form-inline">' +
    '<button type="submit" class="custom-btn-rpi btn-rpi mb-2">Purge</button>' +
    '<div class="form-group mx-sm-2 mb-2">' +
    '<input type="text" name="input-task" class="form-control" placeholder="n°Task" value=""></div>' +
    '<span class="meta-p">'+rpi[0][defaultLangue].deletetask+'</span>'+
    "</div>" +
    "</div>" +
    '<div class="row" id="titleid-list">';
  return buildRpi;
}
function searchIpPs4() {$.get(`/ip/${user_agent()}`,(ip,res) => {let inputip=document.getElementById("ip");if(getCookie("IP")===null){createCookie("IP",ip);}inputip.value = ip;});}
function modifyIp(ip){$.post("/modify/"+ip,(req, res) => {getCookie("IP")===null?createCookie("IP", ip):modifyCookie("IP",ip);});}
$(() => {setInterval(taskBar, 5000);});
$(function () {
  setInnerHTML(menuRpi, buildRPI());
  if (getCookie("tasks") === null) createCookie("tasks", "[]");
  let ip = document.getElementById("ip"),ip_submit = document.getElementById("ip_submit"),form_delete = document.getElementById("form_delete"),cusa,type,taskid,form_task = document.getElementById("form_task");
  if (getCookie("IP") !== null && ip) {ip.value = readCookie("IP");modifyIp(ip.value);}
  ip_submit.addEventListener("submit", function (e) {e.preventDefault();modifyIp(ip.value);});
  $("input[type=radio]").click(function () {type = this.value;});
  $("input[name=input-title]").change(function () {cusa = this.value.toUpperCase();});
  form_delete.addEventListener("submit", function (e) {e.preventDefault();checkTitleUninstall(cusa, type);});
  $("input[name=input-task]").change(function (){taskid = this.value;});
  form_task.addEventListener("submit", function (e) {e.preventDefault();let tasks=JSON.parse(getCookie("tasks"));tasks.forEach(function (task, i) {if(Number(taskid) === Number(task.task_id)){deleteProgression(task.task_id,task.npTitleId);tasks=tasks.splice(i,1);if(tasks.length!==0){tasks.splice(i,1);modifyCookie("tasks",JSON.stringify(tasks));}if(tasks.length===0)modifyCookie("tasks","[]");}});});
  searchIpPs4();
  getTitleId();
  //displayCheckBox();
});
